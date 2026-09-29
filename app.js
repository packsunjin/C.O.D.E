(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const CIRCLED = ['①', '②', '③', '④', '⑤'];
  const API_BASE = 'https://generativelanguage.googleapis.com/v1beta';
  const DEFAULT_MODEL = 'gemini-3.8-flash';

  // ── 저장소 (이 기기 브라우저에만) ───────────────────
  const KEYS = {
    apiKey: 'jjok:apiKey',
    model: 'jjok:model',
    sets: 'jjok:sets',
    wrong: 'jjok:wrong',
    best: 'jjok:best',
    shuffle: 'jjok:shuffle',
    hidden: 'jjok:hiddenBuiltin',
  };
  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
  }

  const store = {
    userSets: read(KEYS.sets, []),
    wrong: read(KEYS.wrong, {}),
    best: read(KEYS.best, {}),
    hidden: read(KEYS.hidden, []),
  };
  const saveSets = () => write(KEYS.sets, store.userSets);
  const saveWrong = () => write(KEYS.wrong, store.wrong);
  const saveBest = () => write(KEYS.best, store.best);
  const saveHidden = () => write(KEYS.hidden, store.hidden);

  // 사진으로 만든 학습지의 원본 사진은 용량이 커서 IndexedDB에 따로 둔다. 키: "<학습지 id>:<장 번호>"
  const images = (() => {
    let dbp = null;
    const open = () => dbp || (dbp = new Promise((resolve, reject) => {
      const req = indexedDB.open('jjok', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('images');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }));
    const tx = async (mode, fn) => {
      const db = await open();
      return new Promise((resolve, reject) => {
        const t = db.transaction('images', mode);
        const out = fn(t.objectStore('images'));
        t.oncomplete = () => resolve(out?.result);
        t.onerror = () => reject(t.error);
      });
    };
    return {
      put: (key, blob) => tx('readwrite', (st) => st.put(blob, key)).catch(() => {}),
      get: (key) => tx('readonly', (st) => st.get(key)).catch(() => null),
      removeSet: (setId) => tx('readwrite', (st) => st.delete(IDBKeyRange.bound(`${setId}:`, `${setId}:\uffff`))).catch(() => {}),
    };
  })();

  // 문제마다 고정 id를 붙여 둔다(문제를 하나 지워도 오답노트·기록이 어긋나지 않게).
  if (store.userSets.some((s) => s.questions.some((q) => !q.qid))) {
    for (const set of store.userSets) set.questions.forEach((q, i) => { if (!q.qid) q.qid = `${set.id}#${i}`; });
    saveSets();
  }

  function allSets() {
    const builtin = (window.BUILTIN_SETS || [])
      .filter((s) => !store.hidden.includes(s.id))
      .map((s) => ({ ...s, builtin: true }));
    return [...store.userSets, ...builtin];
  }

  // 사진으로 만든 학습지는 지우고, 기본 학습지는 숨긴다(설정에서 되돌릴 수 있음).
  function deleteSet(id) {
    if ((window.BUILTIN_SETS || []).some((s) => s.id === id)) {
      if (!store.hidden.includes(id)) store.hidden.push(id);
      saveHidden();
    } else {
      store.userSets = store.userSets.filter((s) => s.id !== id);
      saveSets();
    }
    for (const k of Object.keys(store.wrong)) if (k.startsWith(`${id}#`)) delete store.wrong[k];
    delete store.best[id];
    saveWrong(); saveBest();
    images.removeSet(id);
  }

  function removeQuestion(qid) {
    const set = store.userSets.find((s) => qid.startsWith(`${s.id}#`));
    if (!set) return false;
    set.questions = set.questions.filter((q) => q.qid !== qid);
    if (store.wrong[qid]) { delete store.wrong[qid]; saveWrong(); }
    saveSets();
    return true;
  }
  function findSet(id) {
    if (id === 'all') return combinedSet();
    return allSets().find((s) => s.id === id);
  }
  function combinedSet() {
    const sets = allSets();
    return {
      id: 'all', subject: '전체', title: '모든 학습지 합쳐서', combined: true,
      questions: sets.flatMap((s) => s.questions.map((q, i) => withMeta(q, s, i))),
    };
  }
  function withMeta(q, set, index) {
    return { ...q, qid: q.qid || `${set.id}#${index}`, from: q.from || set.title };
  }

  // ── 공통 UI ────────────────────────────────────────
  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function shuffled(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  let toastTimer = null;
  function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  // ── 화면 이동 ───────────────────────────────────────
  const TAB_OF = { sets: 'sets', make: 'sets', detail: 'sets', test: 'sets', result: 'sets', wrong: 'wrong', settings: 'settings' };
  const TITLES = { sets: '쪽지시험', make: '문제 만들기', wrong: '오답노트', settings: '설정' };
  const BACK = { make: 'sets', detail: 'sets', test: 'detail', result: 'detail' };
  let current = 'sets';

  function go(view, title) {
    current = view;
    for (const el of document.querySelectorAll('.view')) el.hidden = el.id !== `view-${view}`;
    $('appbar-title').textContent = title || TITLES[view] || '쪽지시험';
    $('appbar-extra').textContent = '';
    $('btn-back').hidden = !BACK[view];
    document.body.classList.toggle('in-test', view === 'test');
    for (const t of document.querySelectorAll('.tab')) t.classList.toggle('on', t.dataset.tab === TAB_OF[view]);
    window.scrollTo(0, 0);
  }

  $('btn-back').onclick = () => {
    const to = BACK[current];
    if (to === 'detail' && state.set && !state.set.review) openDetail(state.set.id);
    else if (to === 'detail' && state.set?.review) { renderWrong(); go('wrong'); }
    else { renderSets(); go(to); }
  };
  for (const t of document.querySelectorAll('.tab')) {
    t.onclick = () => {
      const tab = t.dataset.tab;
      if (tab === 'sets') { renderSets(); go('sets'); }
      if (tab === 'wrong') { renderWrong(); go('wrong'); }
      if (tab === 'settings') { renderSettings(); go('settings'); }
    };
  }

  // ── 학습지 목록 ─────────────────────────────────────
  let editing = false;
  let confirmId = null;

  $('btn-edit-sets').onclick = () => {
    editing = !editing;
    confirmId = null;
    renderSets();
  };

  function renderSets() {
    const sets = allSets();
    if (!sets.length) editing = false;
    const entries = sets.length > 1 && !editing ? [...sets, combinedSet()] : sets;
    $('sets-count').textContent = `${sets.length}개`;
    $('btn-edit-sets').hidden = !sets.length;
    $('btn-edit-sets').textContent = editing ? '완료' : '편집';
    $('sets-empty').hidden = sets.length > 0;
    const list = $('set-list');
    list.innerHTML = '';
    for (const s of entries) {
      if (editing) { list.append(editRow(s)); continue; }
      const b = document.createElement('button');
      b.className = `set-item${s.combined ? ' combined' : ''}`;
      const best = store.best[s.id];
      const meta = [`${s.questions.length}문제`];
      if (best != null) meta.push(`최고 ${best}%`);
      if (!s.builtin && !s.combined) meta.push('사진으로 만듦');
      b.innerHTML = `
        <span class="subj">${esc(s.subject || '학습지')}</span>
        <span class="name">${esc(s.title)}</span>
        <span class="meta best">${esc(meta.join(' · '))}</span>
        <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;
      b.onclick = () => openDetail(s.id);
      list.append(b);
    }
    $('wrong-dot').hidden = Object.keys(store.wrong).length === 0;
  }

  function editRow(s) {
    const row = document.createElement('div');
    row.className = 'edit-row';
    if (confirmId === s.id) {
      row.classList.add('confirming');
      row.innerHTML = `
        <p><strong>${esc(s.title)}</strong>을(를) 삭제할까요?
        <span class="muted small">${s.builtin ? '기본 학습지는 설정에서 다시 보이게 할 수 있어요.' : '되돌릴 수 없어요.'}</span></p>
        <div class="btn-row">
          <button class="btn danger-fill" data-act="yes">삭제</button>
          <button class="btn ghost" data-act="no">취소</button>
        </div>`;
      row.querySelector('[data-act=yes]').onclick = () => {
        deleteSet(s.id);
        confirmId = null;
        toast('학습지를 삭제했어요');
        renderSets();
      };
      row.querySelector('[data-act=no]').onclick = () => { confirmId = null; renderSets(); };
      return row;
    }
    row.innerHTML = `
      <div class="edit-info">
        <span class="subj">${esc(s.subject || '학습지')}</span>
        <span class="name">${esc(s.title)}</span>
        <span class="meta">${s.questions.length}문제${s.builtin ? ' · 기본' : ''}</span>
      </div>
      <button class="icon-btn danger" aria-label="${esc(s.title)} 삭제">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>
      </button>`;
    row.querySelector('button').onclick = () => { confirmId = s.id; renderSets(); };
    return row;
  }

  $('opt-shuffle').checked = read(KEYS.shuffle, true) !== false;
  $('opt-shuffle').onchange = (e) => write(KEYS.shuffle, e.target.checked);

  // ── 학습지 상세 ─────────────────────────────────────
  function openDetail(id) {
    const s = findSet(id);
    if (!s) { renderSets(); go('sets'); return; }
    state.set = s;
    $('detail-subject').textContent = s.subject || '학습지';
    $('detail-title').textContent = s.title;
    const best = store.best[s.id];
    $('detail-meta').textContent = `${s.questions.length}문제` + (best != null ? ` · 최고 점수 ${best}%` : '');
    $('detail-list').hidden = true;
    $('btn-toggle-answers').textContent = '정답 보기';
    $('btn-delete-set').hidden = !!s.combined;
    const userSet = store.userSets.find((u) => u.id === s.id);
    const bad = userSet ? userSet.questions.filter(isBadQuestion).length : 0;
    $('clean-box').hidden = !bad;
    $('clean-text').textContent = `시험지 번호를 묻거나 사진 없이는 풀 수 없는 문제 ${bad}개를 찾았어요.`;
    $('delete-confirm').hidden = true;
    go('detail', s.subject || '학습지');
  }

  $('btn-toggle-answers').onclick = () => {
    const box = $('detail-list');
    if (!box.hidden) { box.hidden = true; $('btn-toggle-answers').textContent = '정답 보기'; return; }
    box.innerHTML = state.set.questions.map((q, i) => `
      <div class="qitem">
        <p class="q">${i + 1}. ${esc(q.question)}</p>
        <ol>${q.choices.map((c, j) => `<li class="${j === q.correctIndex ? 'correct' : ''}">${CIRCLED[j]} ${esc(c)}</li>`).join('')}</ol>
        <p class="why">${esc(q.explanation)}</p>
      </div>`).join('');
    box.hidden = false;
    $('btn-toggle-answers').textContent = '정답 숨기기';
  };
  $('btn-start').onclick = () => startRound(state.set, state.set.questions);
  $('btn-clean').onclick = () => {
    const set = store.userSets.find((u) => u.id === state.set.id);
    if (!set) return;
    const bad = set.questions.filter(isBadQuestion);
    for (const q of bad) removeQuestion(q.qid);
    toast(`문제 ${bad.length}개를 지웠어요`);
    openDetail(set.id);
  };
  $('btn-delete-set').onclick = () => { $('delete-confirm').hidden = false; };
  $('btn-delete-no').onclick = () => { $('delete-confirm').hidden = true; };
  $('btn-delete-yes').onclick = () => {
    deleteSet(state.set.id);
    toast('학습지를 삭제했어요');
    renderSets();
    go('sets');
  };

  // ── 시험 ───────────────────────────────────────────
  const state = { set: null, source: [], round: [], answers: [], no: 0 };

  // 보기 순서도 매번 섞어서 정답 위치를 외우지 않게 한다.
  function shuffleChoices(q) {
    const order = shuffled([0, 1, 2, 3, 4]);
    return { ...q, choices: order.map((k) => q.choices[k]), correctIndex: order.indexOf(q.correctIndex) };
  }

  function startRound(set, questions) {
    state.set = set;
    state.source = questions;
    const prepared = questions.map((q, i) => (q.qid ? q : withMeta(q, set, i)));
    const ordered = $('opt-shuffle').checked ? shuffled(prepared) : prepared;
    state.round = ordered.map(shuffleChoices);
    state.answers = new Array(state.round.length).fill(-1);
    state.no = 0;
    renderQuestion();
    go('test', set.review ? '오답 다시 풀기' : set.title);
  }

  function counts() {
    const answered = state.answers.filter((a) => a !== -1).length;
    const right = state.answers.filter((a, i) => a === state.round[i].correctIndex).length;
    return { answered, right };
  }

  function renderQuestion() {
    const q = state.round[state.no];
    const chosen = state.answers[state.no];
    const done = chosen !== -1;
    const { answered, right } = counts();
    const total = state.round.length;

    $('progress-bar').style.width = `${(answered / total) * 100}%`;
    $('test-no').textContent = `${state.no + 1} / ${total}`;
    $('test-score').textContent = answered ? `맞음 ${right} · 틀림 ${answered - right}` : '';
    $('test-question').textContent = q.question;
    $('btn-figure').hidden = !q.img;
    $('btn-figure').classList.toggle('need', !!q.figure);
    $('btn-figure-text').textContent = q.figure ? '자료를 보고 푸는 문제 · 사진 보기' : '원본 사진 보기';
    $('btn-remove-q').hidden = !done || !store.userSets.some((s) => q.qid?.startsWith(`${s.id}#`));

    const box = $('test-choices');
    box.innerHTML = '';
    q.choices.forEach((c, i) => {
      const b = document.createElement('button');
      let cls = 'choice';
      if (done) cls += i === q.correctIndex ? ' right' : i === chosen ? ' wrong' : ' dim';
      b.className = cls;
      b.disabled = done;
      b.innerHTML = `<span class="n">${CIRCLED[i]}</span><span>${esc(c)}</span>`;
      b.onclick = () => answer(i);
      box.append(b);
    });

    const fb = $('feedback');
    fb.hidden = !done;
    if (done) {
      const ok = chosen === q.correctIndex;
      fb.className = `feedback ${ok ? 'ok' : 'no'}`;
      $('feedback-verdict').textContent = ok ? '정답이에요' : `틀렸어요 · 정답은 ${CIRCLED[q.correctIndex]}`;
      $('feedback-why').textContent = q.explanation;
    }

    const last = state.no === total - 1;
    $('btn-prev').disabled = state.no === 0;
    $('btn-next').textContent = last ? '채점 결과 보기' : done ? '다음 문제' : '건너뛰기';
    $('btn-finish').hidden = last || answered === 0;
  }

  function answer(i) {
    if (state.answers[state.no] !== -1) return;
    state.answers[state.no] = i;
    const q = state.round[state.no];
    if (i === q.correctIndex) {
      // 오답노트에서 다시 맞히면 노트에서 뺀다.
      if (state.set.review && store.wrong[q.qid]) { delete store.wrong[q.qid]; saveWrong(); }
    } else {
      const prev = store.wrong[q.qid];
      store.wrong[q.qid] = {
        qid: q.qid, from: q.from || state.set.title,
        question: q.question, choices: q.choices, correctIndex: q.correctIndex, explanation: q.explanation,
        img: q.img, figure: q.figure,
        misses: (prev?.misses || 0) + 1, at: Date.now(),
      };
      saveWrong();
    }
    renderQuestion();
  }

  $('btn-remove-q').onclick = () => {
    const q = state.round[state.no];
    if (!removeQuestion(q.qid)) return;
    state.round.splice(state.no, 1);
    state.answers.splice(state.no, 1);
    toast('문제를 삭제했어요');
    if (!state.round.length) { openDetail(state.set.id); return; }
    if (state.no >= state.round.length) state.no = state.round.length - 1;
    renderQuestion();
  };

  // ── 원본 사진 보기 ─────────────────────────────────
  let viewerUrl = null;
  let viewerDeg = 0;
  async function showViewer(key) {
    const blob = await images.get(key);
    if (!blob) { toast('원본 사진을 찾지 못했어요'); return; }
    if (viewerUrl) URL.revokeObjectURL(viewerUrl);
    viewerUrl = URL.createObjectURL(blob);
    viewerDeg = 0;
    $('viewer-img').src = viewerUrl;
    $('viewer-body').classList.remove('zoom');
    $('viewer-zoom').textContent = '크게';
    $('viewer').hidden = false;
  }
  // 사진이 옆으로 누워 있는 경우가 많아 캔버스로 90도씩 돌린다.
  $('viewer-rotate').onclick = () => {
    const img = new Image();
    img.onload = () => {
      viewerDeg = (viewerDeg + 90) % 360;
      const c = document.createElement('canvas');
      const side = viewerDeg % 180 !== 0;
      c.width = side ? img.naturalHeight : img.naturalWidth;
      c.height = side ? img.naturalWidth : img.naturalHeight;
      const g = c.getContext('2d');
      g.translate(c.width / 2, c.height / 2);
      g.rotate((viewerDeg * Math.PI) / 180);
      g.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
      $('viewer-img').src = c.toDataURL('image/jpeg', 0.9);
    };
    img.src = viewerUrl;
  };
  $('viewer-zoom').onclick = () => {
    const on = $('viewer-body').classList.toggle('zoom');
    $('viewer-zoom').textContent = on ? '맞추기' : '크게';
  };
  $('viewer-close').onclick = () => { $('viewer').hidden = true; };
  $('btn-figure').onclick = () => { const q = state.round[state.no]; if (q?.img) showViewer(q.img); };

  $('btn-prev').onclick = () => { if (state.no > 0) { state.no--; renderQuestion(); } };
  $('btn-next').onclick = () => {
    if (state.no < state.round.length - 1) { state.no++; renderQuestion(); window.scrollTo(0, 0); }
    else finish();
  };
  $('btn-finish').onclick = finish;

  // ── 결과 ───────────────────────────────────────────
  let lastWrong = [];
  function finish() {
    const total = state.round.length;
    const { answered, right } = counts();
    const pct = Math.round((right / total) * 100);
    $('score-ring').style.setProperty('--p', pct);
    $('score-pct').textContent = `${pct}%`;
    $('score-num').textContent = `${total}문제 중 ${right}개 맞음`;
    $('score-note').textContent = answered < total ? `${total - answered}문제는 풀지 않았어요` : '';

    if (!state.set.review && state.source === state.set.questions && answered === total) {
      if (store.best[state.set.id] == null || pct > store.best[state.set.id]) {
        store.best[state.set.id] = pct;
        saveBest();
      }
    }

    lastWrong = state.round.filter((q, i) => state.answers[i] !== q.correctIndex);
    $('btn-retry-wrong').hidden = lastWrong.length === 0;
    $('result-wrong').innerHTML = lastWrong.length
      ? `<h2 class="card-title">틀리거나 안 푼 문제 ${lastWrong.length}개</h2>` + lastWrong.map((q) => {
          const i = state.round.indexOf(q);
          const mine = state.answers[i];
          return `<div class="witem">
            ${state.set.combined || state.set.review ? `<p class="from">${esc(q.from)}</p>` : ''}
            <p class="q">${esc(q.question)}</p>
            <p class="line mine">내 답: ${mine === -1 ? '(안 풂)' : `${CIRCLED[mine]} ${esc(q.choices[mine])}`}</p>
            <p class="line ans">정답: ${CIRCLED[q.correctIndex]} ${esc(q.choices[q.correctIndex])}</p>
            <p class="why">${esc(q.explanation)}</p>
          </div>`;
        }).join('')
      : '<p class="muted">전부 맞았어요!</p>';
    go('result', '채점 결과');
    renderSets();
  }

  $('btn-retry-wrong').onclick = () => startRound(state.set, lastWrong);
  $('btn-retest').onclick = () => startRound(state.set, state.set.questions);

  // ── 오답노트 ───────────────────────────────────────
  function renderWrong() {
    const items = Object.values(store.wrong).sort((a, b) => b.at - a.at);
    $('wrong-dot').hidden = items.length === 0;
    $('wrong-summary').innerHTML = items.length
      ? `<h2 class="card-title">틀린 문제 ${items.length}개</h2>
         <p class="muted small">오답노트로 다시 풀어서 맞히면 목록에서 빠져요.</p>
         <div class="btn-row"><button class="btn primary grow" id="btn-review">오답만 시험 보기</button></div>`
      : `<h2 class="card-title">오답노트가 비어 있어요</h2>
         <p class="muted small">시험에서 틀린 문제가 여기에 자동으로 모여요.</p>`;
    const btn = $('btn-review');
    if (btn) btn.onclick = () => startRound({ id: 'review', title: '오답노트', review: true, questions: items }, items);

    const list = $('wrong-list');
    list.innerHTML = '';
    for (const q of items) {
      const card = document.createElement('div');
      card.className = 'card witem';
      card.innerHTML = `
        <p class="from">${esc(q.from)}${q.misses > 1 ? ` · ${q.misses}번 틀림` : ''}</p>
        <p class="q">${esc(q.question)}</p>
        <p class="line ans">정답: ${esc(q.choices[q.correctIndex])}</p>
        <p class="why">${esc(q.explanation)}</p>
        <div class="btn-row"><button class="btn text small">노트에서 빼기</button></div>`;
      card.querySelector('button').onclick = () => {
        delete store.wrong[q.qid];
        saveWrong();
        renderWrong();
      };
      list.append(card);
    }
  }

  // ── 설정 ───────────────────────────────────────────
  function apiKey() { return read(KEYS.apiKey, ''); }
  function model() { return read(KEYS.model, DEFAULT_MODEL); }

  function renderSettings() {
    $('in-key').value = apiKey();
    $('in-model').value = model();
    if (!$('in-model').value) $('in-model').value = DEFAULT_MODEL;
    setStatus('key-status', apiKey() ? '키가 저장되어 있어요.' : '아직 키가 없어요.', apiKey() ? 'ok' : '');
    setStatus('data-status', '', '');
    $('btn-restore').hidden = store.hidden.length === 0;
  }
  $('btn-restore').onclick = () => {
    const n = store.hidden.length;
    store.hidden = [];
    saveHidden();
    $('btn-restore').hidden = true;
    setStatus('data-status', `기본 학습지 ${n}개를 다시 보이게 했어요.`, 'ok');
  };
  function setStatus(id, text, kind) {
    const el = $(id);
    el.textContent = text;
    el.className = `status-line small ${kind || ''}`;
  }
  $('btn-save-key').onclick = () => {
    write(KEYS.apiKey, $('in-key').value.trim());
    write(KEYS.model, $('in-model').value);
    setStatus('key-status', '저장했어요.', 'ok');
    updateMakeReady();
  };
  $('btn-test-key').onclick = async () => {
    const key = $('in-key').value.trim();
    if (!key) { setStatus('key-status', '키를 먼저 붙여넣어 주세요.', 'no'); return; }
    setStatus('key-status', '확인 중…', '');
    try {
      const res = await fetch(`${API_BASE}/models?pageSize=1`, { headers: { 'x-goog-api-key': key } });
      if (res.ok) setStatus('key-status', '연결됐어요. 저장을 눌러 주세요.', 'ok');
      else setStatus('key-status', await explainHttp(res), 'no');
    } catch {
      setStatus('key-status', '구글 서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요.', 'no');
    }
  };

  $('btn-export').onclick = () => {
    const data = JSON.stringify({ app: 'jjok', version: 1, sets: store.userSets, wrong: store.wrong, best: store.best }, null, 1);
    const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `쪽지시험-백업-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('data-status', '백업 파일을 내려받았어요.', 'ok');
  };
  $('in-import').onchange = async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (data.app !== 'jjok' || !Array.isArray(data.sets)) throw new Error();
      const have = new Set(store.userSets.map((s) => s.id));
      const added = data.sets.filter((s) => !have.has(s.id));
      store.userSets = [...added, ...store.userSets];
      store.wrong = { ...(data.wrong || {}), ...store.wrong };
      store.best = { ...(data.best || {}), ...store.best };
      saveSets(); saveWrong(); saveBest();
      setStatus('data-status', `학습지 ${added.length}개를 가져왔어요.`, 'ok');
    } catch {
      setStatus('data-status', '쪽지시험 백업 파일이 아니에요.', 'no');
    }
  };

  // ── 문제 만들기 (Gemini) ────────────────────────────
  let photos = [];

  function updateMakeReady() {
    const hasKey = !!apiKey();
    $('btn-generate').disabled = !hasKey || photos.length === 0 || busy;
    $('make-hint').textContent = hasKey
      ? `${model()} 모델로 사진을 한 장씩 읽어 만들어요. 한 장에 10~30초 정도 걸려요.`
      : '먼저 설정 탭에서 Gemini API 키를 저장해 주세요.';
  }

  $('btn-go-make').onclick = () => { updateMakeReady(); go('make'); };
  function updateCountLabel() {
    const per = Number($('in-count').value);
    $('count-out').textContent = photos.length > 1 ? `${per}개 × ${photos.length}장 = 약 ${per * photos.length}문제` : `${per}개`;
  }
  $('in-count').oninput = updateCountLabel;
  // 사진은 한 장씩 따로 보내므로 장수가 많아도 되지만, 무료 사용량을 생각해 넉넉한 상한만 둔다.
  const MAX_PHOTOS = 30;
  $('in-photo').onchange = (e) => {
    const picked = [...e.target.files];
    photos = picked.slice(0, MAX_PHOTOS);
    if (picked.length > MAX_PHOTOS) toast(`한 번에 ${MAX_PHOTOS}장까지 돼요. 앞의 ${MAX_PHOTOS}장만 골랐어요.`);
    else if (picked.length) toast(`사진 ${picked.length}장을 골랐어요`);
    $('thumbs').innerHTML = photos.map((f) => `<img src="${URL.createObjectURL(f)}" alt="">`).join('');
    $('gen-error').hidden = true;
    updateCountLabel();
    updateMakeReady();
  };

  // 사진이 크면 요청이 무거워지므로 긴 변 1600px JPEG로 줄인다.
  async function toBase64Jpeg(file) {
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = reject;
        el.src = url;
      });
      const scale = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  function buildPrompt(count, subject, title, page, pages) {
    return `너는 학생이 찍어 보낸 학습지 사진을 보고 5지선다 문제를 만드는 출제자다. 학생은 이 문제로 혼자 시험을 본다.

사진을 직접 보고 읽어라. 인쇄된 글자뿐 아니라 빈칸에 손글씨로 채운 답과 필기도 학습지 내용이다.
사진이 옆으로 돌아가 있어도 돌려서 읽어라.
${pages > 1 ? `이 사진은 학습지 ${pages}장 중 ${page}번째 장이다. 이 장이 다루는 단원·주제로 문제를 만든다.\n` : ''}
출제 범위:
- 학습지는 "어느 단원을 공부하는지"를 알려 주는 출발점이다. 학습지에 적힌 내용에만 묶이지 말고, 그 단원에서 고등학교 교과서가 다루는 개념·원인과 결과·비교·관련 사례까지 넓혀서 문제를 만든다.
- 학습지 내용으로 만든 문제와, 같은 단원의 교과서 지식으로 넓힌 문제를 골고루 섞는다.
- 학습지에 기출문제(시험 문항, 그래프·표 자료)가 있으면 원래 문제를 옮기지 말고, 그 문항이 묻는 개념을 파악해 개념 문제로 만든다. 해설이 없어도 교과 지식으로 풀어서 쓴다.
- 단원을 벗어난 내용은 묻지 않는다.

반드시 지킬 것:
- 사실은 정확해야 한다. 교과서에서 확실히 다루는 사실만 쓰고, 확실하지 않은 연도·수치·인물은 쓰지 않는다.
- 알아보기 어려운 글씨는 억지로 읽지 않는다. X표나 줄로 지운 항목은 문제로 쓰지 않는다.
- 사진이 흐려 글자가 조금 깨져 보이면 문맥으로 바로잡아 올바른 용어로 쓴다.
- 보기 5개는 같은 종류(모두 인물, 모두 지역, 모두 완결된 문장 등)로 맞추고, 각 보기는 그것만 읽어도 뜻이 통하는 완결된 말이어야 한다.
- 오답 보기 4개는 같은 단원의 헷갈리기 쉬운 용어·인물·사건·개념에서 가져오고, 분명히 틀려야 한다.
- 보기끼리 겹치면 안 된다. 뜻이 같은 보기("한성"과 "국내")나 다른 보기를 합친 보기("이집트", "일본", "이집트와 일본")를 함께 넣지 않는다.
- 같은 내용을 문구만 바꿔 두 번 묻지 않는다.
- 학생은 시험 볼 때 사진을 보지 않고 문제 글만 본다. "17번 문제", "위 자료", "(가)", "그림의 A", "A국"처럼 사진을 봐야만 뭘 가리키는지 알 수 있는 말을 쓰지 않는다. 시험 연도·시험 이름·문항 번호도 쓰지 않는다.
- 그래프·표 내용이 필요하면 풀이에 필요한 수치나 사실을 문제 글 안에 적는다. 그래도 자료를 직접 봐야만 풀 수 있는 문제는 "figure": true, 나머지는 false.

나쁜 예:
- "2020학년도 수능 15번 문항 그래프에 포함되지 않는 국가는?" → 시험지를 외우는 문제
- "17번 문제의 보기 중 이란에 대한 설명으로 옳은 것은?" → 사진 없이 풀 수 없음
좋은 예:
- "합계 출산율이 낮고 노년층 인구 비중이 높은 국가에서 나타나는 특징으로 옳은 것은?"
- "석유 소비 비중이 높고 천연가스 생산이 많은 서남아시아 국가의 에너지 특징으로 옳은 것은?"

- 요청한 문항 수를 채운다. 이 장의 모든 항목을 골고루 다룬다.
- 정답은 보기 5개 중 정확히 하나다. 정답 위치를 골고루 섞는다.
- explanation에는 왜 그 답이 맞는지 개념을 한두 문장으로 설명한다. 학습지 항목이 근거면 그 항목(번호·소제목)을 함께 적는다.

요청 문항 수: ${count}개
${subject ? `과목: ${subject}` : '과목: 학습지를 보고 판단'}
${title ? `학습지 제목: ${title}` : '학습지 제목: 학습지에 적힌 제목을 그대로 쓴다'}

아래 JSON 하나만 출력한다. 다른 말은 쓰지 않는다.
{"subject":"과목","title":"학습지 제목","questions":[{"question":"문제","choices":["보기1","보기2","보기3","보기4","보기5"],"correctIndex":0,"explanation":"설명","figure":false}]}`;
  }

  function b64ToBlob(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Blob([bytes], { type: 'image/jpeg' });
  }

  function parseJsonText(text) {
    const t = String(text || '').replace(/```(?:json)?/g, '').trim();
    try { return JSON.parse(t); } catch {}
    const start = t.indexOf('{');
    const end = t.lastIndexOf('}');
    if (start !== -1 && end > start) return JSON.parse(t.slice(start, end + 1));
    throw new Error('parse');
  }

  // AI가 규칙을 어기고 만든 "시험지 자체를 외우는" 문제나 사진 없이는 뭘 가리키는지 모르는 문제를 걸러낸다.
  const BAD_QUESTION = [
    /\d+\s*번\s*(문항|문제)/,                       // "15번 문항", "17번 문제"
    /학년도|모의\s*평가|모평|학력\s*평가|학평|수능|기출/, // 시험 이름·연도
    /(위|아래|제시된|주어진|앞의)\s*(자료|그래프|그림|도표|표|지도|사료|글)/,
    /그래프에\s*(포함|나타|제시|표시)/,
    /\((가|나|다|라|마)\)|[㉠㉡㉢㉣㉤]/,              // (가), ㉠ 같은 기호
    /[A-E]\s*(국|국가|지역|시기|도시)(?![가-힣])/,       // "A국", "B 지역"
  ];
  function isBadQuestion(q) {
    if (BAD_QUESTION.some((re) => re.test(q.question))) return true;
    // "이집트와 일본"처럼 다른 보기 둘을 합친 보기가 있으면 정답이 겹친다.
    return q.choices.some((c, i) => {
      const parts = c.split(/\s*(?:와|과|,|및|그리고)\s+|\s*,\s*|(?<=[가-힣])(?:와|과)\s+/).map((x) => x.trim()).filter(Boolean);
      return parts.length >= 2 && parts.every((part) => q.choices.some((o, j) => j !== i && o === part));
    });
  }

  function normalizeQuestions(raw) {
    const list = Array.isArray(raw?.questions) ? raw.questions : [];
    return list.map((q) => {
      if (!q || typeof q !== 'object') return null;
      const question = String(q.question ?? '').trim();
      const explanation = String(q.explanation ?? '').trim();
      const choices = Array.isArray(q.choices) ? q.choices.map((c) => String(c ?? '').trim()) : [];
      const correctIndex = Number(q.correctIndex);
      if (!question || choices.length !== 5 || choices.some((c) => !c)) return null;
      if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 4) return null;
      if (new Set(choices).size !== 5) return null;
      return { question, choices, correctIndex, explanation: explanation || '학습지 내용', figure: q.figure === true };
    }).filter((q) => q && !isBadQuestion(q));
  }

  async function explainHttp(res, m = model()) {
    let msg = '';
    try { msg = (await res.json())?.error?.message || ''; } catch {}
    if (res.status === 400 && /api key/i.test(msg)) return 'API 키가 올바르지 않아요. 설정에서 다시 확인해 주세요.';
    if (res.status === 401 || res.status === 403) return 'API 키가 거부됐어요. 키를 새로 만들어 설정에 저장해 주세요.';
    if (res.status === 404) return `모델을 찾지 못했어요(${m}). 설정에서 다른 모델을 골라 주세요.`;
    if (res.status === 429) return '무료 사용량을 잠시 넘었어요. 1~2분 뒤에 다시 시도해 주세요.';
    if (res.status >= 500) return '구글 서버가 잠시 응답하지 않아요. 조금 뒤 다시 시도해 주세요.';
    return `요청이 실패했어요 (${res.status}) ${msg}`.trim();
  }

  // 무료 모델은 사람이 몰리면 503(과부하)을 자주 낸다. 그때는 다음 모델로 넘어간다.
  const FALLBACK_MODELS = ['gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-flash-latest', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite'];
  const LITE = /lite/;

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  // 붐비거나(503) 사용량을 넘은(429) 모델은 잠시 쉬게 하고, 그동안은 다른 장도 바로 다음 모델로 보낸다.
  // 그래야 사진이 많을 때 막힌 모델에 계속 두드리느라 시간을 버리지 않는다.
  const cooldown = {};
  function coolDown(m, status) {
    const ms = status === 429 ? 90000 : status === 404 ? 3600000 : 45000;
    cooldown[m] = Date.now() + ms;
  }

  // accept(text)는 응답을 문제 목록으로 바꾸고, 쓸 만한 문제가 없으면 예외를 던진다(그때도 다음 모델로).
  async function callWithFallback(prompt, images, onModel, accept) {
    const chosen = model();
    const base = [chosen, ...FALLBACK_MODELS.filter((m) => m !== chosen)];
    let lastErr = null;
    for (let round = 0; round < 4; round++) {
      const now = Date.now();
      const order = base.filter((m) => !(cooldown[m] > now));
      if (!order.length) {
        const soonest = Math.min(...base.map((m) => cooldown[m]));
        onModel(null, round, soonest - now);
        await wait(Math.min(Math.max(soonest - now, 2000), 30000));
        continue;
      }
      for (const m of order) {
        if (cooldown[m] > Date.now()) continue;
        onModel(m, round);
        try {
          const text = await callGemini(m, prompt, images);
          return { value: accept(text), usedModel: m };
        } catch (e) {
          lastErr = e;
          if (e.status && e.retryable === false) throw e;
          if (e.status) coolDown(m, e.status);
        }
      }
    }
    throw new Error(lastErr?.status === 429
      ? '무료 사용량을 잠시 넘었어요. 1~2분 뒤에 다시 시도해 주세요.'
      : '지금 모든 무료 모델에 사람이 몰려 있어요. 잠시 뒤에 다시 시도해 주세요.');
  }

  // generateContent가 기본. 이 모델이 그 방식을 안 받으면(404) 새 Interactions 방식으로 한 번 더 시도한다.
  async function callGemini(m, prompt, images, signal) {
    const key = apiKey();
    const headers = { 'Content-Type': 'application/json', 'x-goog-api-key': key };
    const fail = async (res) => {
      const err = new Error(await explainHttp(res, m));
      err.status = res.status;
      err.retryable = res.status === 503 || res.status === 429 || res.status === 500 || res.status === 404;
      return err;
    };

    const res = await fetch(`${API_BASE}/models/${encodeURIComponent(m)}:generateContent`, {
      method: 'POST', headers, signal,
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [{ text: prompt }, ...images.map((data) => ({ inline_data: { mime_type: 'image/jpeg', data } }))],
        }],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.4, maxOutputTokens: 16384 },
      }),
    });
    if (res.ok) {
      const data = await res.json();
      const parts = data?.candidates?.[0]?.content?.parts || [];
      const text = parts.map((p) => p.text || '').join('');
      if (!text) {
        const reason = data?.promptFeedback?.blockReason || data?.candidates?.[0]?.finishReason;
        throw new Error(reason ? `AI가 답을 주지 않았어요 (${reason}). 다른 사진으로 시도해 주세요.` : 'AI 응답이 비어 있어요. 다시 시도해 주세요.');
      }
      return text;
    }
    if (res.status !== 404) throw await fail(res);

    const res2 = await fetch(`${API_BASE}/interactions`, {
      method: 'POST', headers, signal,
      body: JSON.stringify({
        model: m,
        input: [{ type: 'text', text: prompt }, ...images.map((data) => ({ type: 'image', data, mime_type: 'image/jpeg' }))],
        response_format: { type: 'text', mime_type: 'application/json' },
      }),
    });
    if (!res2.ok) throw await fail(res2);
    const d = await res2.json();
    const text = d?.interaction?.output_text ?? d?.output_text
      ?? (d?.outputs || d?.interaction?.outputs || []).map((o) => o.text || '').join('');
    if (!text) throw new Error('AI 응답이 비어 있어요. 다시 시도해 주세요.');
    return text;
  }

  let busy = false;
  $('btn-generate').onclick = async () => {
    if (busy || !photos.length) return;
    busy = true;
    updateMakeReady();
    const err = $('gen-error');
    err.hidden = true;
    $('gen-status').hidden = false;
    const say = (t) => { $('gen-status-text').textContent = t; };

    try {
      say('사진 준비 중…');
      const images64 = [];
      for (const f of photos) images64.push(await toBase64Jpeg(f));
      const perPage = Number($('in-count').value) || 10;
      const subject = $('in-subject').value.trim();
      const title = $('in-title').value.trim();

      // 사진을 한꺼번에 보내면 AI가 문제를 적게 만든다. 한 장씩 따로 만들어 합친다(동시에 2장씩).
      const results = new Array(images64.length).fill(null);
      const usedModels = new Set();
      let lastError = null;
      let done = 0;
      const progress = (extra) => {
        const made = results.reduce((n, r) => n + (r?.questions.length || 0), 0);
        say(`사진 ${images64.length}장 중 ${done}장 완료 · 지금까지 ${made}문제${extra ? ` · ${extra}` : ''}`);
      };
      progress();
      let next = 0;
      const worker = async () => {
        while (next < images64.length) {
          const i = next++;
          await makePage(i);
          done++;
          progress();
        }
      };
      const makePage = async (i) => {
        try {
          const { value, usedModel } = await callWithFallback(
            buildPrompt(perPage, subject, title, i + 1, images64.length), [images64[i]],
            (m, round, waitMs) => {
              if (!m) progress(`모든 모델이 붐벼서 ${Math.ceil(Math.min(waitMs, 30000) / 1000)}초 기다리는 중`);
              else if (m !== model()) progress(`기본 모델이 붐벼서 ${m} 사용 중`);
            },
            (text) => {
              const raw = parseJsonText(text);
              const questions = normalizeQuestions(raw);
              if (!questions.length) throw new Error('parse');
              return { raw, questions: questions.map((q) => ({ ...q, page: i })) };
            },
          );
          results[i] = value;
          usedModels.add(usedModel);
        } catch (e) {
          lastError = e;
        }
      };
      await Promise.all([worker(), worker()]);

      // 실패한 장은 잠깐 쉬었다가 한 번 더.
      const retry = results.map((r, i) => (r ? -1 : i)).filter((i) => i >= 0);
      if (retry.length) {
        progress(`실패한 ${retry.length}장 다시 시도 중`);
        await wait(5000);
        for (const i of retry) await makePage(i);
      }

      const seen = new Set();
      const questions = [];
      for (const r of results) {
        for (const q of r?.questions || []) {
          const k = q.question.replace(/\s+/g, '');
          if (seen.has(k)) continue;
          seen.add(k);
          questions.push(q);
        }
      }
      const failed = results.filter((r) => !r?.questions.length).length;
      if (!questions.length) {
        throw new Error(lastError && !(lastError instanceof SyntaxError) && lastError.message !== 'parse'
          ? lastError.message
          : '문제를 만들지 못했어요. 더 밝고 또렷한 사진으로 다시 시도해 주세요.');
      }
      const raw = results.find((r) => r?.raw)?.raw || {};
      const usedModel = [...usedModels].find((m) => LITE.test(m)) || [...usedModels][0] || '';

      const setId = `u${Date.now().toString(36)}`;
      const set = {
        id: setId,
        subject: subject || String(raw.subject || '').trim() || '학습지',
        title: title || String(raw.title || '').trim() || `학습지 ${new Date().toLocaleDateString('ko-KR')}`,
        createdAt: Date.now(),
        questions: questions.map(({ page, ...q }, n) => ({ ...q, qid: `${setId}#${n}`, img: `${setId}:${page}` })),
      };
      say('원본 사진 저장 중…');
      await Promise.all(images64.map((b64, i) => images.put(`${setId}:${i}`, b64ToBlob(b64))));
      store.userSets = [set, ...store.userSets];
      if (!saveSets()) throw new Error('저장 공간이 부족해 학습지를 저장하지 못했어요.');

      photos = [];
      $('in-photo').value = '';
      $('thumbs').innerHTML = '';
      $('in-title').value = '';
      const notes = [];
      if (failed) notes.push(`${failed}장은 실패`);
      if (LITE.test(usedModel)) notes.push('일부는 가벼운 모델이라 꼭 확인하세요');
      toast(`${questions.length}문제를 만들었어요${notes.length ? ' · ' + notes.join(' · ') : ''}`);
      openDetail(set.id);
    } catch (e) {
      err.hidden = false;
      err.textContent = e?.name === 'TypeError'
        ? '구글 서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요.'
        : (e?.message || '문제를 만들지 못했어요.');
    } finally {
      busy = false;
      $('gen-status').hidden = true;
      updateMakeReady();
    }
  };

  // ── 시작 ───────────────────────────────────────────
  renderSets();
  go('sets');
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
