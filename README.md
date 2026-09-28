# 쪽지시험

학습지 사진을 올리면 AI(구글 Gemini, 무료 API 키)가 5지선다 문제를 만들어 주는 웹앱.
보기를 누르면 바로 정답과 해설이 나오고, 틀린 문제는 오답노트에 모인다.
휴대폰에서 "홈 화면에 추가"하면 앱처럼 쓸 수 있다.

## 파일

| 파일 | 내용 |
| --- | --- |
| `index.html` | 화면 구조 (학습지 / 오답노트 / 설정 탭) |
| `styles.css` | 디자인 |
| `app.js` | 시험·채점·오답노트·Gemini 호출 |
| `questions.js` | 기본으로 들어 있는 학습지 문제 |
| `manifest.webmanifest`, `sw.js`, `icon*` | 홈 화면 앱 설치·오프라인용 |

서버 없이 정적 파일만으로 동작한다. 빌드 과정도 없다.

## 배포 (GitHub Pages)

1. 저장소 **Settings → Pages**
2. **Source**: `Deploy from a branch`, **Branch**: 이 파일들이 있는 브랜치, 폴더 `/ (root)` → Save
3. 1~2분 뒤 `https://<계정>.github.io/<저장소>/` 에서 열린다.

## Gemini API 키

- https://aistudio.google.com/apikey 에서 무료로 발급.
- 앱의 **설정** 탭에 붙여넣으면 그 기기 브라우저(localStorage)에만 저장된다. 코드나 저장소에는 넣지 않는다.
- 무료 요금제는 사용량 제한이 있고, 구글이 무료 요금제 데이터를 서비스 개선에 쓸 수 있다. 학습지의 이름·학번은 가리고 찍는 것을 권장.

## 기본 학습지 문제 추가하기

`questions.js`의 `window.BUILTIN_SETS` 배열에 세트를 추가한다.

```js
{
  id: '고유-id',
  subject: '과목',
  title: '학습지 제목',
  questions: [
    { question: '문제', choices: ['①', '②', '③', '④', '⑤'], correctIndex: 0, explanation: '근거' },
  ],
}
```

사진으로 만든 학습지는 각 기기의 브라우저에 저장된다. 다른 기기로 옮길 때는 설정 탭의 내보내기/가져오기를 쓴다.
