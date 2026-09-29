// 기본으로 들어 있는 학습지 문제. 사진으로 만든 학습지는 브라우저(localStorage)에 따로 저장된다.
window.BUILTIN_SETS = [
  {
    "id": "algebra-exponent",
    "subject": "대수",
    "title": "I. 거듭제곱근과 지수 공식",
    "questions": [
      {
        "question": "$n$이 홀수일 때, 실수 $a$의 $n$제곱근 중 실수인 것의 개수는?",
        "choices": [
          "항상 1개",
          "항상 2개",
          "$a>0$일 때만 1개",
          "항상 0개",
          "$a$에 따라 0개 또는 2개"
        ],
        "correctIndex": 0,
        "explanation": "$n$이 홀수이면 실수 $a$의 $n$제곱근 중 실수는 $\\sqrt[n]{a}$ 하나뿐이다."
      },
      {
        "question": "$n$이 짝수이고 $a>0$일 때, $a$의 $n$제곱근 중 실수인 것은?",
        "choices": [
          "$\\sqrt[n]{a}$, $-\\sqrt[n]{a}$ 두 개",
          "$\\sqrt[n]{a}$ 하나",
          "없다",
          "$-\\sqrt[n]{a}$ 하나",
          "$n$개"
        ],
        "correctIndex": 0,
        "explanation": "$n$이 짝수일 때 실수 $n$제곱근: $a>0$이면 $\\pm\\sqrt[n]{a}$ 2개, $a=0$이면 0 하나, $a<0$이면 없다."
      },
      {
        "question": "$n$이 짝수이고 $a<0$일 때, $a$의 $n$제곱근 중 실수인 것의 개수는?",
        "choices": [
          "0개",
          "1개",
          "2개",
          "$n$개",
          "무수히 많다"
        ],
        "correctIndex": 0,
        "explanation": "짝수 제곱해서 음수가 되는 실수는 없으므로 0개."
      },
      {
        "question": "$a>0,\\ b>0$이고 $n$이 2 이상의 정수일 때, $\\sqrt[n]{a}\\,\\sqrt[n]{b}$와 같은 것은?",
        "choices": [
          "$\\sqrt[n]{ab}$",
          "$\\sqrt[2n]{ab}$",
          "$\\sqrt[n]{a+b}$",
          "$\\sqrt[n^2]{ab}$",
          "$\\sqrt[n]{a}+\\sqrt[n]{b}$"
        ],
        "correctIndex": 0,
        "explanation": "거듭제곱근의 성질: $\\sqrt[n]{a}\\sqrt[n]{b}=\\sqrt[n]{ab}$"
      },
      {
        "question": "$a>0$일 때, $\\left(\\sqrt[n]{a}\\right)^m$과 같은 것은?",
        "choices": [
          "$\\sqrt[n]{a^m}$",
          "$\\sqrt[m]{a^n}$",
          "$\\sqrt[mn]{a}$",
          "$\\sqrt[n]{a}\\cdot m$",
          "$\\sqrt[n+m]{a}$"
        ],
        "correctIndex": 0,
        "explanation": "거듭제곱근의 성질: $\\left(\\sqrt[n]{a}\\right)^m=\\sqrt[n]{a^m}$"
      },
      {
        "question": "$a>0$일 때, $\\sqrt[m]{\\sqrt[n]{a}}$와 같은 것은?",
        "choices": [
          "$\\sqrt[mn]{a}$",
          "$\\sqrt[m+n]{a}$",
          "$\\sqrt[n]{a^m}$",
          "$\\sqrt[m]{a^n}$",
          "$\\sqrt[m-n]{a}$"
        ],
        "correctIndex": 0,
        "explanation": "거듭제곱근의 성질: $\\sqrt[m]{\\sqrt[n]{a}}=\\sqrt[mn]{a}$"
      },
      {
        "question": "$a>0$일 때, $\\sqrt[np]{a^{mp}}$와 같은 것은?",
        "choices": [
          "$\\sqrt[n]{a^m}$",
          "$\\sqrt[p]{a^m}$",
          "$\\sqrt[n]{a^{p}}$",
          "$\\sqrt[mp]{a^n}$",
          "$a^{np}$"
        ],
        "correctIndex": 0,
        "explanation": "거듭제곱근의 성질: $\\sqrt[np]{a^{mp}}=\\sqrt[n]{a^m}$ (지수와 근호의 수를 같은 수로 나눌 수 있다)"
      },
      {
        "question": "$a\\neq0$일 때, $a^0$과 $a^{-n}$을 바르게 나타낸 것은?",
        "choices": [
          "$a^0=1,\\ a^{-n}=\\dfrac{1}{a^n}$",
          "$a^0=0,\\ a^{-n}=\\dfrac{1}{a^n}$",
          "$a^0=1,\\ a^{-n}=-a^n$",
          "$a^0=a,\\ a^{-n}=\\dfrac{1}{a^n}$",
          "$a^0=0,\\ a^{-n}=-a^n$"
        ],
        "correctIndex": 0,
        "explanation": "지수의 확장: $a^0=1$, $a^{-n}=\\dfrac{1}{a^n}$ ($a\\neq0$)"
      },
      {
        "question": "$a>0$이고 $m,n$이 정수($n\\ge2$)일 때, $a^{\\frac{m}{n}}$과 같은 것은?",
        "choices": [
          "$\\sqrt[n]{a^m}$",
          "$\\sqrt[m]{a^n}$",
          "$\\dfrac{a^m}{n}$",
          "$\\left(\\sqrt[m]{a}\\right)^n$",
          "$m\\sqrt[n]{a}$"
        ],
        "correctIndex": 0,
        "explanation": "유리수 지수: $a^{\\frac{m}{n}}=\\sqrt[n]{a^m}$, 특히 $a^{\\frac1n}=\\sqrt[n]{a}$"
      },
      {
        "question": "유리수 지수 $a^{\\frac{m}{n}}$을 정의할 때 밑 $a$의 조건은?",
        "choices": [
          "$a>0$",
          "$a\\neq0$",
          "$a$는 모든 실수",
          "$a\\ge1$",
          "$a<0$"
        ],
        "correctIndex": 0,
        "explanation": "밑이 음수이면 $(-8)^{\\frac13}$과 $(-8)^{\\frac26}$의 값이 달라지는 문제가 생겨서, 유리수·실수 지수에서는 $a>0$으로 한다."
      },
      {
        "question": "$a>0$이고 $x,y$가 실수일 때, 지수법칙으로 옳지 않은 것은?",
        "choices": [
          "$a^x+a^y=a^{x+y}$",
          "$a^xa^y=a^{x+y}$",
          "$a^x\\div a^y=a^{x-y}$",
          "$(a^x)^y=a^{xy}$",
          "$(ab)^x=a^xb^x\\ (b>0)$"
        ],
        "correctIndex": 0,
        "explanation": "지수법칙은 곱셈·나눗셈·거듭제곱에 대한 것이다. 덧셈 $a^x+a^y$는 $a^{x+y}$와 다르다."
      },
      {
        "question": "$8^{\\frac23}$의 값은?",
        "choices": [
          "$4$",
          "$\\dfrac{16}{3}$",
          "$2$",
          "$6$",
          "$\\sqrt[3]{64}\\cdot2$"
        ],
        "correctIndex": 0,
        "explanation": "$8^{\\frac23}=(2^3)^{\\frac23}=2^2=4$"
      },
      {
        "question": "$\\sqrt[3]{-8}$의 값은?",
        "choices": [
          "$-2$",
          "$2$",
          "$\\pm2$",
          "정의되지 않는다",
          "$-\\dfrac{8}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "$n$이 홀수이면 음수의 $n$제곱근 중 실수가 하나 있다: $(-2)^3=-8$이므로 $\\sqrt[3]{-8}=-2$"
      },
      {
        "question": "$16$의 네제곱근 중 실수인 것과 $\\sqrt[4]{16}$의 값을 차례로 쓴 것은?",
        "choices": [
          "$\\pm2$, $2$",
          "$2$, $\\pm2$",
          "$\\pm2$, $\\pm2$",
          "$2$, $2$",
          "$\\pm4$, $4$"
        ],
        "correctIndex": 0,
        "explanation": "$16$의 네제곱근 중 실수는 $2,\\ -2$ 두 개이고, $\\sqrt[4]{16}$은 그중 양수인 $2$만 뜻한다."
      },
      {
        "question": "$a>0$일 때 $a^{\\frac12}\\times a^{\\frac32}$을 간단히 한 것은?",
        "choices": [
          "$a^2$",
          "$a^{\\frac34}$",
          "$a^3$",
          "$a$",
          "$2a$"
        ],
        "correctIndex": 0,
        "explanation": "$a^xa^y=a^{x+y}$: $\\dfrac12+\\dfrac32=2$"
      },
      {
        "question": "$a>0$일 때 $\\left(a^{\\frac23}\\right)^{\\frac32}$을 간단히 한 것은?",
        "choices": [
          "$a$",
          "$a^{\\frac{13}{6}}$",
          "$a^{\\frac49}$",
          "$a^2$",
          "$1$"
        ],
        "correctIndex": 0,
        "explanation": "$(a^x)^y=a^{xy}$: $\\dfrac23\\times\\dfrac32=1$"
      },
      {
        "question": "$a>0$일 때 $\\sqrt{a\\sqrt{a}}$를 $a^k$ 꼴로 나타내면?",
        "choices": [
          "$a^{\\frac34}$",
          "$a^{\\frac32}$",
          "$a^{\\frac14}$",
          "$a^{\\frac12}$",
          "$a$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sqrt{a\\cdot a^{\\frac12}}=\\left(a^{\\frac32}\\right)^{\\frac12}=a^{\\frac34}$"
      },
      {
        "question": "$a>0$이고 $a^x=3$일 때 $a^{2x}$과 $a^{-x}$의 값을 차례로 쓴 것은?",
        "choices": [
          "$9,\\ \\dfrac13$",
          "$6,\\ -3$",
          "$9,\\ -3$",
          "$6,\\ \\dfrac13$",
          "$3,\\ \\dfrac13$"
        ],
        "correctIndex": 0,
        "explanation": "$a^{2x}=(a^x)^2=9$, $a^{-x}=\\dfrac1{a^x}=\\dfrac13$"
      },
      {
        "question": "$\\left(\\dfrac14\\right)^{-\\frac12}$의 값은?",
        "choices": [
          "$2$",
          "$\\dfrac12$",
          "$-2$",
          "$-\\dfrac12$",
          "$16$"
        ],
        "correctIndex": 0,
        "explanation": "$\\left(\\dfrac14\\right)^{-\\frac12}=4^{\\frac12}=2$"
      }
    ]
  },
  {
    "id": "algebra-trig",
    "subject": "대수",
    "title": "II. 삼각함수 공식 (그래프까지)",
    "questions": [
      {
        "question": "$1$ 라디안을 도(°)로 나타낸 것은?",
        "choices": [
          "$\\dfrac{180^\\circ}{\\pi}$",
          "$\\dfrac{\\pi}{180^\\circ}$",
          "$180^\\circ$",
          "$360^\\circ$",
          "$\\pi^\\circ$"
        ],
        "correctIndex": 0,
        "explanation": "호도법: $\\pi$ 라디안 $=180^\\circ$이므로 $1$ 라디안 $=\\dfrac{180^\\circ}{\\pi}$, $1^\\circ=\\dfrac{\\pi}{180}$ 라디안."
      },
      {
        "question": "$150^\\circ$를 호도법으로 나타낸 것은?",
        "choices": [
          "$\\dfrac{5}{6}\\pi$",
          "$\\dfrac{3}{4}\\pi$",
          "$\\dfrac{2}{3}\\pi$",
          "$\\dfrac{5}{3}\\pi$",
          "$\\dfrac{7}{6}\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "$150\\times\\dfrac{\\pi}{180}=\\dfrac56\\pi$"
      },
      {
        "question": "반지름의 길이가 $r$, 중심각의 크기가 $\\theta$(라디안)인 부채꼴의 호의 길이 $l$은?",
        "choices": [
          "$l=r\\theta$",
          "$l=\\dfrac12r\\theta$",
          "$l=r^2\\theta$",
          "$l=2\\pi r\\theta$",
          "$l=\\dfrac12r^2\\theta$"
        ],
        "correctIndex": 0,
        "explanation": "부채꼴의 호의 길이 $l=r\\theta$"
      },
      {
        "question": "반지름의 길이가 $r$, 중심각의 크기가 $\\theta$, 호의 길이가 $l$인 부채꼴의 넓이 $S$는?",
        "choices": [
          "$S=\\dfrac12r^2\\theta=\\dfrac12rl$",
          "$S=r^2\\theta=rl$",
          "$S=\\dfrac12r\\theta=\\dfrac12l$",
          "$S=\\pi r^2\\theta$",
          "$S=\\dfrac12r^2l$"
        ],
        "correctIndex": 0,
        "explanation": "부채꼴의 넓이 $S=\\dfrac12r^2\\theta=\\dfrac12rl$"
      },
      {
        "question": "동경 $OP$가 나타내는 한 각의 크기를 $\\alpha$라 할 때, 일반각 $\\theta$는? (단, $n$은 정수)",
        "choices": [
          "$\\theta=2n\\pi+\\alpha$",
          "$\\theta=n\\pi+\\alpha$",
          "$\\theta=2n\\pi\\alpha$",
          "$\\theta=\\dfrac{n\\pi}{2}+\\alpha$",
          "$\\theta=n\\alpha$"
        ],
        "correctIndex": 0,
        "explanation": "일반각: $\\theta=2n\\pi+\\alpha$ (육십분법으로는 $360^\\circ\\times n+\\alpha$)"
      },
      {
        "question": "원점 $O$와 점 $P(x,y)$에 대하여 $\\overline{OP}=r$이고 동경 $OP$가 나타내는 각이 $\\theta$일 때, 옳은 것은?",
        "choices": [
          "$\\sin\\theta=\\dfrac yr,\\ \\cos\\theta=\\dfrac xr,\\ \\tan\\theta=\\dfrac yx$",
          "$\\sin\\theta=\\dfrac xr,\\ \\cos\\theta=\\dfrac yr,\\ \\tan\\theta=\\dfrac xy$",
          "$\\sin\\theta=\\dfrac ry,\\ \\cos\\theta=\\dfrac rx,\\ \\tan\\theta=\\dfrac xy$",
          "$\\sin\\theta=\\dfrac yx,\\ \\cos\\theta=\\dfrac xr,\\ \\tan\\theta=\\dfrac yr$",
          "$\\sin\\theta=\\dfrac xy,\\ \\cos\\theta=\\dfrac yx,\\ \\tan\\theta=\\dfrac yr$"
        ],
        "correctIndex": 0,
        "explanation": "삼각함수의 정의: $\\sin\\theta=\\dfrac yr$, $\\cos\\theta=\\dfrac xr$, $\\tan\\theta=\\dfrac yx\\ (x\\ne0)$"
      },
      {
        "question": "$\\theta$가 제3사분면의 각일 때, 값이 양수인 삼각함수는?",
        "choices": [
          "$\\tan\\theta$",
          "$\\sin\\theta$",
          "$\\cos\\theta$",
          "$\\sin\\theta$와 $\\cos\\theta$",
          "없다"
        ],
        "correctIndex": 0,
        "explanation": "부호 암기 \"얼-사-탄-코\": 1사분면 모두 +, 2사분면 $\\sin$만 +, 3사분면 $\\tan$만 +, 4사분면 $\\cos$만 +."
      },
      {
        "question": "$\\theta$가 제2사분면의 각일 때, 값이 양수인 삼각함수는?",
        "choices": [
          "$\\sin\\theta$",
          "$\\cos\\theta$",
          "$\\tan\\theta$",
          "$\\cos\\theta$와 $\\tan\\theta$",
          "모두"
        ],
        "correctIndex": 0,
        "explanation": "2사분면에서는 $y>0,\\ x<0$이므로 $\\sin\\theta>0$, $\\cos\\theta<0$, $\\tan\\theta<0$."
      },
      {
        "question": "삼각함수 사이의 관계로 옳은 것은?",
        "choices": [
          "$\\sin^2\\theta+\\cos^2\\theta=1$",
          "$\\sin\\theta+\\cos\\theta=1$",
          "$\\sin^2\\theta-\\cos^2\\theta=1$",
          "$\\tan\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}$",
          "$\\sin\\theta\\cos\\theta=1$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$, $\\sin^2\\theta+\\cos^2\\theta=1$"
      },
      {
        "question": "$\\sin\\theta+\\cos\\theta=k$일 때 $\\sin\\theta\\cos\\theta$의 값은?",
        "choices": [
          "$\\dfrac{k^2-1}{2}$",
          "$\\dfrac{k^2+1}{2}$",
          "$k^2-1$",
          "$\\dfrac{1-k^2}{2}$",
          "$\\dfrac{k-1}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "양변을 제곱하면 $1+2\\sin\\theta\\cos\\theta=k^2$이므로 $\\sin\\theta\\cos\\theta=\\dfrac{k^2-1}{2}$"
      },
      {
        "question": "$\\sin\\dfrac{\\pi}{6},\\ \\cos\\dfrac{\\pi}{6},\\ \\tan\\dfrac{\\pi}{6}$의 값을 차례로 쓴 것은?",
        "choices": [
          "$\\dfrac12,\\ \\dfrac{\\sqrt3}{2},\\ \\dfrac{\\sqrt3}{3}$",
          "$\\dfrac{\\sqrt3}{2},\\ \\dfrac12,\\ \\sqrt3$",
          "$\\dfrac12,\\ \\dfrac{\\sqrt3}{2},\\ \\sqrt3$",
          "$\\dfrac{\\sqrt2}{2},\\ \\dfrac{\\sqrt2}{2},\\ 1$",
          "$\\dfrac{\\sqrt3}{2},\\ \\dfrac12,\\ \\dfrac{\\sqrt3}{3}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac\\pi6(30^\\circ)$: $\\sin=\\dfrac12$, $\\cos=\\dfrac{\\sqrt3}{2}$, $\\tan=\\dfrac1{\\sqrt3}=\\dfrac{\\sqrt3}{3}$"
      },
      {
        "question": "$\\tan\\dfrac{\\pi}{3}$의 값은?",
        "choices": [
          "$\\sqrt3$",
          "$\\dfrac{\\sqrt3}{3}$",
          "$1$",
          "$\\dfrac{\\sqrt3}{2}$",
          "$\\dfrac12$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac\\pi3(60^\\circ)$: $\\sin=\\dfrac{\\sqrt3}2$, $\\cos=\\dfrac12$, $\\tan=\\sqrt3$"
      },
      {
        "question": "함수 $y=\\sin x$에 대한 설명으로 옳지 않은 것은?",
        "choices": [
          "그래프는 $y$축에 대하여 대칭이다.",
          "주기가 $2\\pi$인 주기함수이다.",
          "치역은 $\\{y\\mid-1\\le y\\le1\\}$이다.",
          "그래프는 원점에 대하여 대칭이다.",
          "정의역은 실수 전체이다."
        ],
        "correctIndex": 0,
        "explanation": "$y=\\sin x$는 원점 대칭($\\sin(-x)=-\\sin x$). $y$축 대칭은 $y=\\cos x$."
      },
      {
        "question": "함수 $y=\\cos x$의 그래프에 대한 설명으로 옳은 것은?",
        "choices": [
          "$y$축에 대하여 대칭이고 주기는 $2\\pi$이다.",
          "원점에 대하여 대칭이고 주기는 $\\pi$이다.",
          "점근선이 있다.",
          "치역은 실수 전체이다.",
          "점 $(0,0)$을 지난다."
        ],
        "correctIndex": 0,
        "explanation": "$\\cos(-x)=\\cos x$이므로 $y$축 대칭, 주기 $2\\pi$, 치역 $[-1,1]$, 점 $(0,1)$을 지난다."
      },
      {
        "question": "함수 $y=\\tan x$에 대한 설명으로 옳은 것은?",
        "choices": [
          "주기는 $\\pi$이고, 점근선은 $x=n\\pi+\\dfrac\\pi2$ ($n$은 정수)이다.",
          "주기는 $2\\pi$이고 점근선은 없다.",
          "치역은 $\\{y\\mid-1\\le y\\le1\\}$이다.",
          "그래프는 $y$축에 대하여 대칭이다.",
          "정의역은 실수 전체이다."
        ],
        "correctIndex": 0,
        "explanation": "$y=\\tan x$: 정의역은 $x\\ne n\\pi+\\dfrac\\pi2$인 실수, 치역 실수 전체, 주기 $\\pi$, 원점 대칭, 점근선 $x=n\\pi+\\dfrac\\pi2$."
      },
      {
        "question": "함수 $y=a\\sin(bx+c)+d$의 최댓값, 최솟값, 주기를 바르게 쓴 것은?",
        "choices": [
          "최댓값 $|a|+d$, 최솟값 $-|a|+d$, 주기 $\\dfrac{2\\pi}{|b|}$",
          "최댓값 $a+d$, 최솟값 $a-d$, 주기 $2\\pi|b|$",
          "최댓값 $|a|$, 최솟값 $-|a|$, 주기 $\\dfrac{\\pi}{|b|}$",
          "최댓값 $|a|+d$, 최솟값 $-|a|+d$, 주기 $\\dfrac{\\pi}{|b|}$",
          "최댓값 $|b|+d$, 최솟값 $-|b|+d$, 주기 $\\dfrac{2\\pi}{|a|}$"
        ],
        "correctIndex": 0,
        "explanation": "$y=a\\sin(bx+c)+d$, $y=a\\cos(bx+c)+d$: 최댓값 $|a|+d$, 최솟값 $-|a|+d$, 주기 $\\dfrac{2\\pi}{|b|}$"
      },
      {
        "question": "함수 $y=a\\tan(bx+c)+d$의 주기는?",
        "choices": [
          "$\\dfrac{\\pi}{|b|}$",
          "$\\dfrac{2\\pi}{|b|}$",
          "$\\pi|b|$",
          "$\\dfrac{\\pi}{|a|}$",
          "$2\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "$\\tan$의 주기는 $\\pi$이므로 $y=a\\tan(bx+c)+d$의 주기는 $\\dfrac{\\pi}{|b|}$ (최댓값·최솟값은 없다)."
      },
      {
        "question": "함수 $y=3\\sin2x-1$의 최댓값과 주기를 차례로 쓴 것은?",
        "choices": [
          "$2,\\ \\pi$",
          "$3,\\ \\pi$",
          "$2,\\ 2\\pi$",
          "$4,\\ \\pi$",
          "$3,\\ 4\\pi$"
        ],
        "correctIndex": 0,
        "explanation": "최댓값 $|3|+(-1)=2$, 주기 $\\dfrac{2\\pi}{2}=\\pi$"
      },
      {
        "question": "$\\sin(-x),\\ \\cos(-x),\\ \\tan(-x)$를 바르게 나타낸 것은?",
        "choices": [
          "$-\\sin x,\\ \\cos x,\\ -\\tan x$",
          "$\\sin x,\\ -\\cos x,\\ \\tan x$",
          "$-\\sin x,\\ -\\cos x,\\ -\\tan x$",
          "$\\sin x,\\ \\cos x,\\ -\\tan x$",
          "$-\\sin x,\\ \\cos x,\\ \\tan x$"
        ],
        "correctIndex": 0,
        "explanation": "음각: $\\cos$만 부호가 그대로이고 $\\sin,\\ \\tan$은 부호가 바뀐다."
      },
      {
        "question": "$\\sin(\\pi-x)$와 $\\cos(\\pi-x)$를 바르게 나타낸 것은?",
        "choices": [
          "$\\sin x,\\ -\\cos x$",
          "$-\\sin x,\\ \\cos x$",
          "$-\\sin x,\\ -\\cos x$",
          "$\\cos x,\\ \\sin x$",
          "$\\sin x,\\ \\cos x$"
        ],
        "correctIndex": 0,
        "explanation": "$\\pi-x$는 2사분면 쪽이므로 $\\sin$은 +, $\\cos$은 −: $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$, $\\tan(\\pi-x)=-\\tan x$"
      },
      {
        "question": "$\\sin(\\pi+x),\\ \\cos(\\pi+x),\\ \\tan(\\pi+x)$를 바르게 나타낸 것은?",
        "choices": [
          "$-\\sin x,\\ -\\cos x,\\ \\tan x$",
          "$\\sin x,\\ \\cos x,\\ \\tan x$",
          "$-\\sin x,\\ \\cos x,\\ -\\tan x$",
          "$\\sin x,\\ -\\cos x,\\ -\\tan x$",
          "$-\\cos x,\\ -\\sin x,\\ \\tan x$"
        ],
        "correctIndex": 0,
        "explanation": "$\\pi+x$는 3사분면 쪽: $\\tan$만 +. $\\tan$의 주기가 $\\pi$이므로 $\\tan(\\pi+x)=\\tan x$."
      },
      {
        "question": "$\\sin\\left(\\dfrac\\pi2-x\\right)$와 $\\cos\\left(\\dfrac\\pi2-x\\right)$를 바르게 나타낸 것은?",
        "choices": [
          "$\\cos x,\\ \\sin x$",
          "$\\sin x,\\ \\cos x$",
          "$-\\cos x,\\ \\sin x$",
          "$\\cos x,\\ -\\sin x$",
          "$-\\sin x,\\ -\\cos x$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac\\pi2\\pm x$ 꼴은 $\\sin\\leftrightarrow\\cos$으로 바뀐다. $\\dfrac\\pi2-x$는 1사분면 쪽이라 모두 +: $\\sin\\left(\\dfrac\\pi2-x\\right)=\\cos x$, $\\cos\\left(\\dfrac\\pi2-x\\right)=\\sin x$, $\\tan\\left(\\dfrac\\pi2-x\\right)=\\dfrac1{\\tan x}$"
      },
      {
        "question": "$\\sin\\left(\\dfrac\\pi2+x\\right)$와 $\\cos\\left(\\dfrac\\pi2+x\\right)$를 바르게 나타낸 것은?",
        "choices": [
          "$\\cos x,\\ -\\sin x$",
          "$\\cos x,\\ \\sin x$",
          "$-\\cos x,\\ \\sin x$",
          "$\\sin x,\\ -\\cos x$",
          "$-\\cos x,\\ -\\sin x$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac\\pi2+x$는 2사분면 쪽: $\\sin$은 +, $\\cos$은 −. $\\sin\\left(\\dfrac\\pi2+x\\right)=\\cos x$, $\\cos\\left(\\dfrac\\pi2+x\\right)=-\\sin x$"
      },
      {
        "question": "$\\sin(2n\\pi+x)$와 같은 것은? (단, $n$은 정수)",
        "choices": [
          "$\\sin x$",
          "$-\\sin x$",
          "$\\cos x$",
          "$\\sin 2x$",
          "$n\\sin x$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin,\\ \\cos$은 주기가 $2\\pi$이므로 $\\sin(2n\\pi+x)=\\sin x$, $\\cos(2n\\pi+x)=\\cos x$. $\\tan(n\\pi+x)=\\tan x$."
      },
      {
        "question": "$\\cos\\dfrac{2}{3}\\pi$의 값은?",
        "choices": [
          "$-\\dfrac12$",
          "$\\dfrac12$",
          "$-\\dfrac{\\sqrt3}{2}$",
          "$\\dfrac{\\sqrt3}{2}$",
          "$-1$"
        ],
        "correctIndex": 0,
        "explanation": "$\\cos\\dfrac23\\pi=\\cos\\left(\\pi-\\dfrac\\pi3\\right)=-\\cos\\dfrac\\pi3=-\\dfrac12$"
      },
      {
        "question": "$\\sin\\dfrac{7}{6}\\pi$의 값은?",
        "choices": [
          "$-\\dfrac12$",
          "$\\dfrac12$",
          "$-\\dfrac{\\sqrt3}{2}$",
          "$\\dfrac{\\sqrt3}{2}$",
          "$0$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sin\\dfrac76\\pi=\\sin\\left(\\pi+\\dfrac\\pi6\\right)=-\\sin\\dfrac\\pi6=-\\dfrac12$"
      }
    ]
  },
  {
    "id": "algebra-sequence",
    "subject": "대수",
    "title": "III. 수열 공식 (귀납적 정의까지)",
    "questions": [
      {
        "question": "첫째항이 $a$, 공차가 $d$인 등차수열의 일반항 $a_n$은?",
        "choices": [
          "$a_n=a+(n-1)d$",
          "$a_n=a+nd$",
          "$a_n=ad^{n-1}$",
          "$a_n=a+(n+1)d$",
          "$a_n=nd$"
        ],
        "correctIndex": 0,
        "explanation": "등차수열의 일반항: $a_n=a+(n-1)d$"
      },
      {
        "question": "세 수 $a,\\ b,\\ c$가 이 순서대로 등차수열을 이룰 때 성립하는 식은?",
        "choices": [
          "$2b=a+c$",
          "$b^2=ac$",
          "$b=a+c$",
          "$2b=ac$",
          "$b^2=a+c$"
        ],
        "correctIndex": 0,
        "explanation": "등차중항: $b=\\dfrac{a+c}{2}$, 즉 $2b=a+c$"
      },
      {
        "question": "첫째항이 $a$, 제$n$항(끝항)이 $l$인 등차수열의 첫째항부터 제$n$항까지의 합 $S_n$은?",
        "choices": [
          "$\\dfrac{n(a+l)}{2}$",
          "$n(a+l)$",
          "$\\dfrac{(n-1)(a+l)}{2}$",
          "$\\dfrac{a+l}{2}$",
          "$\\dfrac{n(l-a)}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "등차수열의 합: $S_n=\\dfrac{n(a+l)}{2}$"
      },
      {
        "question": "첫째항이 $a$, 공차가 $d$인 등차수열의 첫째항부터 제$n$항까지의 합 $S_n$은?",
        "choices": [
          "$\\dfrac{n\\{2a+(n-1)d\\}}{2}$",
          "$\\dfrac{n\\{a+(n-1)d\\}}{2}$",
          "$n\\{2a+(n-1)d\\}$",
          "$\\dfrac{n\\{2a+nd\\}}{2}$",
          "$\\dfrac{a(d^n-1)}{d-1}$"
        ],
        "correctIndex": 0,
        "explanation": "$l=a+(n-1)d$를 $\\dfrac{n(a+l)}{2}$에 넣으면 $S_n=\\dfrac{n\\{2a+(n-1)d\\}}{2}$"
      },
      {
        "question": "첫째항이 $a$, 공비가 $r$인 등비수열의 일반항 $a_n$은?",
        "choices": [
          "$a_n=ar^{n-1}$",
          "$a_n=ar^n$",
          "$a_n=a+(n-1)r$",
          "$a_n=a^{n-1}r$",
          "$a_n=ar^{n+1}$"
        ],
        "correctIndex": 0,
        "explanation": "등비수열의 일반항: $a_n=ar^{n-1}$"
      },
      {
        "question": "0이 아닌 세 수 $a,\\ b,\\ c$가 이 순서대로 등비수열을 이룰 때 성립하는 식은?",
        "choices": [
          "$b^2=ac$",
          "$2b=a+c$",
          "$b=ac$",
          "$b^2=a+c$",
          "$2b=ac$"
        ],
        "correctIndex": 0,
        "explanation": "등비중항: $b^2=ac$"
      },
      {
        "question": "첫째항이 $a$, 공비가 $r\\ (r\\ne1)$인 등비수열의 첫째항부터 제$n$항까지의 합 $S_n$은?",
        "choices": [
          "$\\dfrac{a(r^n-1)}{r-1}$",
          "$\\dfrac{a(r^{n-1}-1)}{r-1}$",
          "$\\dfrac{a(r^n-1)}{r}$",
          "$\\dfrac{n(a+ar^{n-1})}{2}$",
          "$a(r^n-1)$"
        ],
        "correctIndex": 0,
        "explanation": "등비수열의 합($r\\ne1$): $S_n=\\dfrac{a(r^n-1)}{r-1}=\\dfrac{a(1-r^n)}{1-r}$"
      },
      {
        "question": "공비가 $r=1$인 등비수열의 첫째항부터 제$n$항까지의 합 $S_n$은? (첫째항 $a$)",
        "choices": [
          "$na$",
          "$0$",
          "$a$",
          "$a(n-1)$",
          "$a^n$"
        ],
        "correctIndex": 0,
        "explanation": "$r=1$이면 모든 항이 $a$이므로 $S_n=na$"
      },
      {
        "question": "수열의 합 $S_n$과 일반항 $a_n$ 사이의 관계로 옳은 것은?",
        "choices": [
          "$a_1=S_1$, $a_n=S_n-S_{n-1}\\ (n\\ge2)$",
          "$a_n=S_n-S_{n-1}\\ (n\\ge1)$",
          "$a_n=S_n+S_{n-1}$",
          "$a_n=S_{n+1}-S_n\\ (n\\ge2)$",
          "$a_n=\\dfrac{S_n}{n}$"
        ],
        "correctIndex": 0,
        "explanation": "$a_1=S_1$, $a_n=S_n-S_{n-1}$ ($n\\ge2$). $n=1$일 때는 따로 확인한다."
      },
      {
        "question": "$\\sum$의 성질로 옳지 않은 것은? (단, $c$는 상수)",
        "choices": [
          "$\\sum_{k=1}^{n}a_kb_k=\\sum_{k=1}^{n}a_k\\sum_{k=1}^{n}b_k$",
          "$\\sum_{k=1}^{n}(a_k+b_k)=\\sum_{k=1}^{n}a_k+\\sum_{k=1}^{n}b_k$",
          "$\\sum_{k=1}^{n}ca_k=c\\sum_{k=1}^{n}a_k$",
          "$\\sum_{k=1}^{n}c=cn$",
          "$\\sum_{k=1}^{n}(a_k-b_k)=\\sum_{k=1}^{n}a_k-\\sum_{k=1}^{n}b_k$"
        ],
        "correctIndex": 0,
        "explanation": "곱의 합은 합의 곱과 다르다: $\\sum a_kb_k\\ne\\sum a_k\\sum b_k$"
      },
      {
        "question": "$\\displaystyle\\sum_{k=1}^{n}k$의 값은?",
        "choices": [
          "$\\dfrac{n(n+1)}{2}$",
          "$\\dfrac{n(n-1)}{2}$",
          "$n(n+1)$",
          "$\\dfrac{n(n+1)(2n+1)}{6}$",
          "$\\dfrac{n^2}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sum_{k=1}^{n}k=1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$"
      },
      {
        "question": "$\\displaystyle\\sum_{k=1}^{n}k^2$의 값은?",
        "choices": [
          "$\\dfrac{n(n+1)(2n+1)}{6}$",
          "$\\left\\{\\dfrac{n(n+1)}{2}\\right\\}^2$",
          "$\\dfrac{n(n+1)(2n+1)}{3}$",
          "$\\dfrac{n(n+1)(n+2)}{6}$",
          "$\\dfrac{n^2(n+1)}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sum_{k=1}^{n}k^2=\\dfrac{n(n+1)(2n+1)}{6}$"
      },
      {
        "question": "$\\displaystyle\\sum_{k=1}^{n}k^3$의 값은?",
        "choices": [
          "$\\left\\{\\dfrac{n(n+1)}{2}\\right\\}^2$",
          "$\\dfrac{n(n+1)(2n+1)}{6}$",
          "$\\dfrac{n^2(n+1)^2}{2}$",
          "$\\dfrac{n^3(n+1)}{4}$",
          "$\\left\\{\\dfrac{n(n+1)}{2}\\right\\}^3$"
        ],
        "correctIndex": 0,
        "explanation": "$\\sum_{k=1}^{n}k^3=\\left\\{\\dfrac{n(n+1)}{2}\\right\\}^2$ ($\\sum k$의 제곱)"
      },
      {
        "question": "$\\displaystyle\\sum_{k=1}^{10}k^2$의 값은?",
        "choices": [
          "$385$",
          "$55$",
          "$3025$",
          "$330$",
          "$505$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac{10\\cdot11\\cdot21}{6}=385$"
      },
      {
        "question": "$\\dfrac{1}{k(k+1)}$을 부분분수로 바르게 나타낸 것은?",
        "choices": [
          "$\\dfrac1k-\\dfrac1{k+1}$",
          "$\\dfrac1k+\\dfrac1{k+1}$",
          "$\\dfrac1{k+1}-\\dfrac1k$",
          "$\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+1}\\right)$",
          "$\\dfrac{1}{k}\\cdot\\dfrac1{k+1}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac1{AB}=\\dfrac1{B-A}\\left(\\dfrac1A-\\dfrac1B\\right)$에서 $B-A=1$이므로 $\\dfrac1k-\\dfrac1{k+1}$"
      },
      {
        "question": "$\\displaystyle\\sum_{k=1}^{n}\\frac{1}{k(k+1)}$의 값은?",
        "choices": [
          "$\\dfrac{n}{n+1}$",
          "$\\dfrac{1}{n+1}$",
          "$\\dfrac{n+1}{n}$",
          "$1$",
          "$\\dfrac{n}{2(n+1)}$"
        ],
        "correctIndex": 0,
        "explanation": "$\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots=1-\\dfrac1{n+1}=\\dfrac{n}{n+1}$"
      },
      {
        "question": "수열 $\\{a_n\\}$을 귀납적으로 정의한다는 것의 뜻으로 옳은 것은?",
        "choices": [
          "첫째항과, 이웃하는 항 사이의 관계식으로 수열을 정의하는 것",
          "일반항 $a_n$을 $n$의 식으로 나타내는 것",
          "모든 항을 나열하는 것",
          "합 $S_n$만으로 수열을 나타내는 것",
          "첫째항만으로 수열을 정하는 것"
        ],
        "correctIndex": 0,
        "explanation": "수열의 귀납적 정의: 첫째항 $a_1$과 $a_n$, $a_{n+1}$ 사이의 관계식으로 모든 항을 차례로 정한다."
      },
      {
        "question": "$a_{n+1}=a_n+d$ ($n=1,2,3,\\cdots$)로 정의된 수열은?",
        "choices": [
          "공차가 $d$인 등차수열",
          "공비가 $d$인 등비수열",
          "계차가 $d$인 등비수열",
          "상수수열",
          "공차가 $a_n$인 등차수열"
        ],
        "correctIndex": 0,
        "explanation": "$a_{n+1}-a_n=d$ (일정) → 공차 $d$인 등차수열"
      },
      {
        "question": "$a_{n+1}=ra_n$ ($n=1,2,3,\\cdots$)으로 정의된 수열은?",
        "choices": [
          "공비가 $r$인 등비수열",
          "공차가 $r$인 등차수열",
          "첫째항이 $r$인 등차수열",
          "상수수열",
          "공비가 $a_n$인 등비수열"
        ],
        "correctIndex": 0,
        "explanation": "$\\dfrac{a_{n+1}}{a_n}=r$ (일정) → 공비 $r$인 등비수열"
      },
      {
        "question": "모든 자연수 $n$에 대하여 $2a_{n+1}=a_n+a_{n+2}$가 성립하는 수열은?",
        "choices": [
          "등차수열",
          "등비수열",
          "상수수열만",
          "조화수열",
          "알 수 없다"
        ],
        "correctIndex": 0,
        "explanation": "연속한 세 항에서 가운데 항이 등차중항 → 등차수열"
      },
      {
        "question": "모든 자연수 $n$에 대하여 $a_{n+1}^{\\,2}=a_na_{n+2}$ ($a_n\\ne0$)가 성립하는 수열은?",
        "choices": [
          "등비수열",
          "등차수열",
          "계차수열",
          "조화수열",
          "알 수 없다"
        ],
        "correctIndex": 0,
        "explanation": "연속한 세 항에서 가운데 항이 등비중항 → 등비수열"
      },
      {
        "question": "$a_1=2$, $a_{n+1}=a_n+3$으로 정의된 수열 $\\{a_n\\}$의 제10항은?",
        "choices": [
          "$29$",
          "$32$",
          "$30$",
          "$27$",
          "$2\\cdot3^9$"
        ],
        "correctIndex": 0,
        "explanation": "공차 3인 등차수열: $a_{10}=2+9\\times3=29$"
      },
      {
        "question": "$a_1=1$, $a_{n+1}=2a_n$으로 정의된 수열 $\\{a_n\\}$의 제6항은?",
        "choices": [
          "$32$",
          "$64$",
          "$12$",
          "$11$",
          "$16$"
        ],
        "correctIndex": 0,
        "explanation": "공비 2인 등비수열: $a_6=1\\times2^5=32$"
      },
      {
        "question": "$a_{n+1}=a_n+f(n)$으로 정의된 수열의 일반항을 구하는 식으로 옳은 것은? ($n\\ge2$)",
        "choices": [
          "$a_n=a_1+\\sum_{k=1}^{n-1}f(k)$",
          "$a_n=a_1+\\sum_{k=1}^{n}f(k)$",
          "$a_n=a_1\\times\\sum_{k=1}^{n-1}f(k)$",
          "$a_n=f(n)-a_1$",
          "$a_n=a_1+(n-1)f(n)$"
        ],
        "correctIndex": 0,
        "explanation": "$a_2=a_1+f(1),\\ a_3=a_2+f(2),\\ \\cdots$ 을 모두 더하면 $a_n=a_1+\\sum_{k=1}^{n-1}f(k)$"
      },
      {
        "question": "$a_1=2$, $a_{n+1}=a_n+2n$으로 정의된 수열의 $a_4$의 값은?",
        "choices": [
          "$14$",
          "$12$",
          "$10$",
          "$20$",
          "$8$"
        ],
        "correctIndex": 0,
        "explanation": "$a_2=2+2=4$, $a_3=4+4=8$, $a_4=8+6=14$"
      }
    ]
  },
  {
    id: 'social-population',
    subject: '통합사회',
    title: 'V-01~02 세계의 인구와 인구 문제',
    questions: [
      {
        question: '세계 인구 변화에 대한 설명으로 옳은 것은?',
        choices: [
          '1800년경 약 10억 명에서 2023년 약 80억 명으로 급증하였다.',
          '1800년경 약 30억 명에서 2023년 약 60억 명으로 두 배 늘었다.',
          '산업 혁명 이전에 인구가 가장 빠르게 늘었다.',
          '최근 인구 성장은 선진국이 주도하고 있다.',
          '세계 인구는 2000년 이후 감소하기 시작하였다.',
        ],
        correctIndex: 0,
        explanation: '01-1-(1): 세계 인구는 1800년경 약 10억 명에서 2023년 약 80억 명으로 급증했다.',
      },
      {
        question: '산업 혁명 이후 세계 인구가 빠르게 성장한 주된 이유로 옳은 것은?',
        choices: [
          '출생률은 그대로인데 의료 기술 발달과 위생 개선으로 사망률이 크게 낮아졌다.',
          '출생률과 사망률이 함께 크게 높아졌다.',
          '출산 억제 정책으로 출생률이 낮아졌다.',
          '국제 이주가 늘어 세계 전체 인구가 늘었다.',
          '노년층 인구 비율이 빠르게 높아졌다.',
        ],
        correctIndex: 0,
        explanation: '01-1-(2): 생활 수준 향상, 의료 기술 발달, 공공 위생 시설 개선으로 사망률이 감소하고, 경제 발전으로 인구 부양력이 커졌다.',
      },
      {
        question: '최근 세계 인구 성장의 경향으로 옳은 것은?',
        choices: [
          '선진국보다 인구 증가율이 높은 개발도상국이 인구 성장을 주도한다.',
          '선진국의 인구 비율이 점점 높아지고 있다.',
          '모든 대륙의 인구 증가율이 비슷해졌다.',
          '개발도상국의 인구는 감소하고 있다.',
          '유럽의 인구 비율이 가장 빠르게 늘고 있다.',
        ],
        correctIndex: 0,
        explanation: '01-1-(3): 최근에는 인구 증가율이 높은 개발도상국이 성장을 주도해 개발도상국 인구 비율이 점차 높아진다.',
      },
      {
        question: '세계의 인구 분포에 대한 설명으로 옳은 것은?',
        choices: [
          '남반구보다 북반구에 인구가 훨씬 많이 산다.',
          '해발 고도가 높은 고산 지역에 인구가 집중한다.',
          '해안보다 대륙 내부에 인구가 많이 산다.',
          '적도 부근 열대 우림에 인구가 가장 밀집해 있다.',
          '남반구와 북반구의 인구가 거의 같다.',
        ],
        correctIndex: 0,
        explanation: '01-2-(1): 세계 인구는 남반구보다 북반구에 많고, 해안에서 가깝거나 해발 고도가 낮은 지역에 집중한다.',
      },
      {
        question: '인구 밀집 지역의 조건으로 가장 적절한 것은?',
        choices: [
          '농업에 유리하거나 공업·서비스업이 발달한 지역',
          '기후가 매우 춥거나 건조한 지역',
          '험준한 산지가 넓게 분포하는 지역',
          '교통이 불편한 내륙 오지',
          '경제 활동이 어려운 사막 지역',
        ],
        correctIndex: 0,
        explanation: '01-2-(2): 농업에 유리하거나 공업과 서비스업이 발달한 지역에 인구가 밀집한다. 나머지는 인구 희박 지역의 조건이다.',
      },
      {
        question: '세계 인구의 지역(대륙)별 비율 변화에 대한 설명으로 옳은 것은?',
        choices: [
          '아시아의 인구 비율이 가장 높고, 아프리카의 인구 비율은 높아지는 추세이다.',
          '유럽의 인구 비율이 1950년 이후 계속 높아졌다.',
          '앵글로아메리카의 인구 비율이 가장 높다.',
          '아프리카의 인구 비율은 1950년 이후 계속 낮아졌다.',
          '오세아니아가 아시아 다음으로 인구 비율이 높다.',
        ],
        correctIndex: 0,
        explanation: '세계 인구와 지역별 인구 비율 변화 그래프: 아시아 비율이 가장 높고, 출생률이 높은 아프리카는 비율이 늘며 유럽은 줄고 있다.',
      },
      {
        question: '대륙별 출생률과 사망률을 비교했을 때 옳은 것은?',
        choices: [
          '아프리카는 출생률이 가장 높고, 유럽은 출생률이 낮아 사망률과 비슷하다.',
          '유럽은 출생률이 가장 높은 대륙이다.',
          '아프리카는 출생률이 가장 낮다.',
          '모든 대륙의 출생률이 사망률보다 크게 낮다.',
          '앵글로아메리카는 사망률이 출생률의 세 배이다.',
        ],
        correctIndex: 0,
        explanation: '대륙별 출생률과 사망률 그래프: 아프리카의 출생률이 가장 높고, 고령화된 유럽은 출생률과 사망률이 비슷하다.',
      },
      {
        question: '인구 변천 모형에 대한 설명으로 옳은 것은?',
        choices: [
          '경제 발전 정도에 따른 출생률과 사망률의 변화로 인구 성장 단계를 나타낸 것이다.',
          '국가별 인구 밀도를 지도에 나타낸 것이다.',
          '연령층별 인구를 성별로 쌓아 올린 그래프이다.',
          '국제 이주의 흡인 요인과 배출 요인을 정리한 것이다.',
          '에너지 소비량에 따라 국가를 분류한 것이다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(1): 인구 변천 모형은 경제 발전 정도에 따른 출생률·사망률 변화를 4단계(최근 5단계)로 구분한 것이다.',
      },
      {
        question: '인구 변천 모형에서 "다산다사"로 인구가 거의 늘지 않는 단계는?',
        choices: ['제1단계(고위 정체기)', '제2단계(초기 확장기)', '제3단계(후기 확장기)', '제4단계(저위 정체기)', '제5단계(감소기)'],
        correctIndex: 0,
        explanation: '02-1-①: 1단계는 출생률과 사망률이 모두 높아(다산다사) 인구 증가가 거의 없다.',
      },
      {
        question: '인구 변천 모형의 제2단계(초기 확장기)에서 사망률이 크게 떨어지는 원인은?',
        choices: [
          '의학 발달과 보급, 농업 기술 발달에 따른 인구 부양력 향상',
          '여성의 사회 진출 확대',
          '산아 제한 정책 시행',
          '만혼과 자녀에 대한 가치관 변화',
          '고령화의 심화',
        ],
        correctIndex: 0,
        explanation: '02-1-②: 2단계는 다산감사. 의학 발달·보급으로 사망률이 줄고, 농업 기술 발달로 인구 부양력이 높아진다.',
      },
      {
        question: '인구 변천 모형의 제3단계(후기 확장기)에서 출생률이 감소하는 원인으로 옳은 것은?',
        choices: [
          '여성의 사회 진출, 자녀에 대한 가치관 변화, 산아 제한 정책',
          '의학 발달로 인한 사망률 증가',
          '전쟁과 기근의 확대',
          '농업 기술의 퇴보',
          '노년층 인구의 급격한 감소',
        ],
        correctIndex: 0,
        explanation: '02-1-②: 3단계는 감산소사. 여성의 사회 진출, 가치관 변화, 산아 제한 정책으로 출생률이 줄어든다.',
      },
      {
        question: '인구 변천 모형의 제5단계(감소기)의 특징으로 옳은 것은?',
        choices: [
          '저출산과 고령화 심화로 인구의 자연 증가율이 (-)가 된다.',
          '출생률이 가장 높은 단계이다.',
          '사망률이 급격히 감소하는 단계이다.',
          '주로 개발도상국에서 나타난다.',
          '유소년층 인구 비율이 가장 높다.',
        ],
        correctIndex: 0,
        explanation: '02-1-②: 5단계는 저출산으로 인구가 자연적으로 감소하고, 고령화 심화로 자연 증가율이 음수로 나타난다(주로 선진국).',
      },
      {
        question: '인구 변천 모형의 단계와 국가 유형을 바르게 연결한 것은?',
        choices: [
          '1~3단계는 주로 개발도상국, 4~5단계는 주로 선진국이다.',
          '1~3단계는 주로 선진국, 4~5단계는 주로 개발도상국이다.',
          '모든 단계가 선진국에서만 나타난다.',
          '1단계는 오늘날 선진국에서 가장 흔하다.',
          '5단계는 아프리카에서 주로 나타난다.',
        ],
        correctIndex: 0,
        explanation: '인구 변천 모형 표의 경제 수준: 1단계는 저개발국, 2~3단계는 개발도상국, 4~5단계는 선진국.',
      },
      {
        question: '1970년대 이후 인구의 자연 증가율이 가장 높게 나타나는 대륙은?',
        choices: ['아프리카', '유럽', '앵글로아메리카', '오세아니아', '라틴 아메리카'],
        correctIndex: 0,
        explanation: '02-1-(2)-①: 아프리카는 1970년대 이후 자연적 인구 증가율이 가장 높다.',
      },
      {
        question: '아시아와 라틴 아메리카의 인구 증가율 변화로 옳은 것은?',
        choices: [
          '1950년대 증가율이 높았으나 경제 발전과 산아 제한 정책으로 1970년대 이후 감소 추세이다.',
          '1950년대부터 지금까지 증가율이 계속 높아지고 있다.',
          '1950년대부터 자연 증가율이 음수였다.',
          '유럽보다 먼저 저출산·고령화가 나타났다.',
          '인구 증가율 변화가 전혀 없었다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(2)-②: 아시아와 라틴 아메리카는 1950년대에 증가율이 높았지만 1970년대 이후 줄고 있다.',
      },
      {
        question: '유럽 일부 국가에서 나타나는 인구 현상으로 옳은 것은?',
        choices: [
          '출생률 감소로 인구가 자연적으로 줄어들며 저출산·고령화로 노동력이 부족하다.',
          '출생률이 크게 높아져 인구 과잉 문제가 심각하다.',
          '유소년층 비율이 세계에서 가장 높다.',
          '사망률이 출생률보다 훨씬 낮아 인구가 급증한다.',
          '인구 부양력이 부족해 식량 문제가 심각하다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(2)-③: 유럽 일부 국가는 인구의 자연적 감소가 나타나고, 저출산·고령화로 임금 상승과 노동력 부족을 겪는다.',
      },
      {
        question: '선진국과 개발도상국의 인구 구조를 비교한 것으로 옳은 것은?',
        choices: [
          '선진국은 노년층 비율이 높고 유소년층 비율이 낮아 종형·방추형 피라미드가 나타난다.',
          '선진국은 유소년층 비율이 높아 피라미드형이 나타난다.',
          '개발도상국은 노년층 비율이 가장 높다.',
          '개발도상국의 인구 피라미드는 대부분 방추형이다.',
          '두 집단의 인구 구조는 거의 같다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(3)-①: 선진국은 유소년층 비율이 낮고 노년층 비율이 높아 종형·방추형, 개발도상국은 피라미드형이 많다.',
      },
      {
        question: '선진국과 개발도상국의 부양비를 비교한 것으로 옳은 것은?',
        choices: [
          '선진국은 노년 부양비가, 개발도상국은 유소년 부양비가 높다.',
          '선진국은 유소년 부양비가, 개발도상국은 노년 부양비가 높다.',
          '두 집단 모두 노년 부양비가 유소년 부양비보다 높다.',
          '개발도상국은 부양비가 0에 가깝다.',
          '부양비는 경제 발전 수준과 관계가 없다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(3)-②: 선진국은 노년 부양비가 높고, 개발도상국은 유소년 부양비가 높다.',
      },
      {
        question: '선진국과 개발도상국의 산업별 인구 구조로 옳은 것은?',
        choices: [
          '선진국은 1차 산업 종사자 비율이 낮고 3차 산업 종사자 비율이 높다.',
          '선진국은 1차 산업 종사자 비율이 가장 높다.',
          '개발도상국은 3차 산업 종사자 비율이 선진국보다 높다.',
          '개발도상국은 1차 산업 종사자가 거의 없다.',
          '두 집단의 산업별 인구 구조는 같다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(3)-③: 선진국은 개발도상국보다 1차 산업 비율이 낮고, 3차 산업 비율이 높은 경우가 많다.',
      },
      {
        question: '니제르와 독일의 인구를 비교한 설명으로 옳은 것은?',
        choices: [
          '니제르는 인구의 자연 증가율이 매우 높고, 독일은 자연 증가율이 0 근처이거나 음수이다.',
          '독일의 자연 증가율이 니제르보다 훨씬 높다.',
          '니제르는 노년층 인구 비율이 독일보다 높다.',
          '독일은 유소년층 비율이 니제르보다 높다.',
          '두 나라의 인구 구조는 비슷하다.',
        ],
        correctIndex: 0,
        explanation: '니제르와 독일의 인구 자연 증가율 그래프: 니제르는 약 3%대로 매우 높고, 독일은 0 이하로 떨어지기도 한다.',
      },
      {
        question: '연령층별 인구 구분으로 옳은 것은?',
        choices: [
          '유소년층 0~14세, 청장년층 15~64세, 노년층 65세 이상',
          '유소년층 0~19세, 청장년층 20~59세, 노년층 60세 이상',
          '유소년층 0~9세, 청장년층 10~69세, 노년층 70세 이상',
          '유소년층 0~17세, 청장년층 18~64세, 노년층 65세 이상',
          '유소년층 0~14세, 청장년층 15~59세, 노년층 60세 이상',
        ],
        correctIndex: 0,
        explanation: 'Geo Story - 인구 구조와 관련된 주요 개념: 유소년층 0~14세, 청장년층 15~64세, 노년층 65세 이상.',
      },
      {
        question: '인구 증감에 대한 설명으로 옳은 것은?',
        choices: [
          '인구 증감은 자연적 증감(출생-사망)과 사회적 증감(전입-전출)을 합한 것이다.',
          '자연적 증감은 전입 인구에서 전출 인구를 뺀 것이다.',
          '사회적 증감은 출생아 수에서 사망자 수를 뺀 것이다.',
          '인구 증감은 출생아 수만으로 결정된다.',
          '국제 이동은 인구 증감에 영향을 주지 않는다.',
        ],
        correctIndex: 0,
        explanation: 'Geo Story: 인구 증감 = 자연적 증감(출생률-사망률) + 사회적 증감(전입-전출).',
      },
      {
        question: '"성비"의 뜻으로 옳은 것은?',
        choices: [
          '여자 100명당 남자의 수',
          '남자 100명당 여자의 수',
          '전체 인구 중 남자의 비율',
          '출생아 100명당 여자 출생아 수',
          '청장년층 100명당 노년층의 수',
        ],
        correctIndex: 0,
        explanation: 'Geo Story: 성비는 여자 100명당 남자의 수이다. 100보다 크면 남초, 작으면 여초.',
      },
      {
        question: '총부양비를 구하는 방법으로 옳은 것은?',
        choices: [
          '유소년 부양비 + 노년 부양비',
          '노년층 인구 ÷ 유소년층 인구 × 100',
          '청장년층 인구 ÷ 전체 인구 × 100',
          '유소년층 인구 ÷ 노년층 인구 × 100',
          '출생률 - 사망률',
        ],
        correctIndex: 0,
        explanation: 'Geo Story: 부양비는 청장년층에 대한 비생산 연령층의 비율이고, 총부양비 = 유소년 부양비 + 노년 부양비.',
      },
      {
        question: '노년 부양비를 구하는 식으로 옳은 것은?',
        choices: [
          '(65세 이상 인구 ÷ 15~64세 인구) × 100',
          '(65세 이상 인구 ÷ 0~14세 인구) × 100',
          '(0~14세 인구 ÷ 15~64세 인구) × 100',
          '(65세 이상 인구 ÷ 전체 인구) × 100',
          '(15~64세 인구 ÷ 65세 이상 인구) × 100',
        ],
        correctIndex: 0,
        explanation: 'Geo Story: 노년 인구 부양비 = 65세 이상 인구 / 15~64세 인구 × 100.',
      },
      {
        question: '노령화 지수를 구하는 식으로 옳은 것은?',
        choices: [
          '(65세 이상 인구 ÷ 0~14세 인구) × 100',
          '(65세 이상 인구 ÷ 15~64세 인구) × 100',
          '(0~14세 인구 ÷ 65세 이상 인구) × 100',
          '(65세 이상 인구 ÷ 전체 인구) × 100',
          '(0~14세 인구 ÷ 15~64세 인구) × 100',
        ],
        correctIndex: 0,
        explanation: 'Geo Story: 노령화 지수 = 65세 이상 인구 / 0~14세 인구 × 100. 노년 부양비와 분모가 다르니 주의.',
      },
      {
        question: '전체 인구 중 65세 이상 인구 비율이 16%인 나라는 어느 단계에 해당하는가?',
        choices: ['고령 사회', '고령화 사회', '초고령 사회', '고령화 이전 사회', '인구 과잉 사회'],
        correctIndex: 0,
        explanation: 'Geo Story: 고령화 사회 7~14%, 고령 사회 14~20%, 초고령 사회 20% 이상.',
      },
      {
        question: '출생률과 사망률이 모두 낮아 유소년층과 청장년층 비율이 비슷한 선진국형 인구 피라미드는?',
        choices: ['종형', '피라미드형', '별형', '표주박형', '역피라미드형'],
        correctIndex: 0,
        explanation: 'Geo Story - 인구 피라미드: 종형은 출생률과 사망률이 모두 낮은 선진국형이다.',
      },
      {
        question: '출생률이 매우 낮아 유소년층 인구가 급감하는 인구 피라미드는?',
        choices: ['방추형', '피라미드형', '별형', '표주박형', '종형'],
        correctIndex: 0,
        explanation: 'Geo Story: 방추형은 출생률이 매우 낮아 유소년 인구가 급감하는 형태로, 선진국에서 나타난다.',
      },
      {
        question: '청장년층 인구가 많이 전입해 와서 생산 연령층 비율이 높은 도시에서 나타나는 인구 피라미드는?',
        choices: ['별형', '표주박형', '피라미드형', '종형', '방추형'],
        correctIndex: 0,
        explanation: 'Geo Story: 별형은 생산 연령층(청장년층)의 전입이 많은 도시에서 나타난다.',
      },
      {
        question: '청장년층이 빠져나가 노년층과 유소년층 비율이 상대적으로 높은 농촌에서 나타나는 인구 피라미드는?',
        choices: ['표주박형', '별형', '피라미드형', '종형', '방추형'],
        correctIndex: 0,
        explanation: 'Geo Story: 표주박형은 청장년층이 도시로 빠져나간 농촌에서 나타난다.',
      },
      {
        question: '"합계 출산율"의 뜻으로 옳은 것은?',
        choices: [
          '한 여성이 가임 기간(15~49세)에 낳을 것으로 예상되는 평균 자녀 수',
          '인구 1,000명당 출생아 수',
          '1년 동안 태어난 전체 출생아 수',
          '결혼한 여성 1명당 실제로 낳은 자녀 수',
          '전체 인구 중 유소년층의 비율',
        ],
        correctIndex: 0,
        explanation: '02 Geo Story: 합계 출산율(TFR)은 여성 1명이 가임 기간에 낳을 것으로 예상되는 평균 자녀 수이다. 인구 1,000명당 출생아 수는 조출생률(CBR).',
      },
      {
        question: '합계 출산율이 높은 나라에서 주로 나타나는 특징으로 옳은 것은?',
        choices: [
          '유소년층 비율과 유소년 부양비가 높다.',
          '노령화 지수가 매우 높다.',
          '노년 부양비가 가장 높다.',
          '인구의 자연 증가율이 음수이다.',
          '인구 피라미드가 방추형이다.',
        ],
        correctIndex: 0,
        explanation: '합계 출산율이 높으면 유소년층이 많아 유소년 부양비가 높고 피라미드형 인구 구조가 나타난다(예: 아프리카 국가).',
      },
      {
        question: '인구 과잉 문제의 원인으로 옳은 것은?',
        choices: [
          '사망률은 감소했지만 여전히 높은 출생률로 인구가 인구 부양력을 넘어섬',
          '출생률과 사망률이 모두 매우 낮아짐',
          '청장년층의 해외 유출',
          '기대 수명 증가에 따른 고령화',
          '결혼과 출산에 대한 가치관 변화',
        ],
        correctIndex: 0,
        explanation: '02-1-(1): 인구 과잉은 사망률이 감소해도 출생률이 높아 인구가 부양력을 초과하는 현상이다.',
      },
      {
        question: '인구 과잉 문제를 해결하는 방안으로 적절하지 않은 것은?',
        choices: [
          '출산 장려금을 크게 늘린다.',
          '식량 증산과 일자리 창출로 인구 부양력을 높인다.',
          '출산 억제 정책을 시행한다.',
          '경제 성장을 추진한다.',
          '도시 기반 시설을 확충한다.',
        ],
        correctIndex: 0,
        explanation: '02-1-(3): 인구 과잉 해결책은 경제 성장, 식량 증산, 일자리 창출, 출산 억제, 도시 기반 시설 확충. 출산 장려는 저출생 대책이다.',
      },
      {
        question: '저출생으로 나타나는 문제로 가장 적절한 것은?',
        choices: [
          '생산 가능 인구 부족으로 인한 노동력 부족과 장기적 경제 침체',
          '식량과 자원의 부족',
          '도시의 주택과 사회 기반 시설 부족',
          '실업률의 급격한 상승',
          '유소년 부양비의 증가',
        ],
        correctIndex: 0,
        explanation: '02-2-(1)-②: 저출생은 생산 가능 인구 부족 → 노동력 부족 → 장기적 경제 침체, 국가 경쟁력 약화로 이어진다.',
      },
      {
        question: '고령화의 원인으로 옳은 것은?',
        choices: [
          '의학 기술 발달과 생활 수준 향상으로 기대 수명이 늘어남',
          '출생률이 크게 높아짐',
          '청장년층의 대규모 유입',
          '사망률의 증가',
          '산업화 이전 사회로의 회귀',
        ],
        correctIndex: 0,
        explanation: '02-2-(2)-①: 고령화는 의학 기술 발달과 생활 수준 향상으로 기대 수명이 늘어나 나타난다.',
      },
      {
        question: '고령화 문제의 해결 방안으로 가장 적절한 것은?',
        choices: [
          '노년층 일자리 확보와 연금 제도 개선',
          '산아 제한 정책 강화',
          '식량 증산',
          '청장년층의 해외 이주 장려',
          '도시 기반 시설 축소',
        ],
        correctIndex: 0,
        explanation: '02-2-(2)-③: 노년층 일자리 확보, 연금 제도 개선, 세대 간 정의(형평성) 실현을 위한 노력이 필요하다.',
      },
      {
        question: '국제 인구 이동의 흡인 요인으로 옳은 것은?',
        choices: [
          '풍부한 일자리와 높은 임금',
          '빈곤과 낮은 임금',
          '실업',
          '정치적·종교적 억압',
          '잦은 자연재해',
        ],
        correctIndex: 0,
        explanation: '03-1-(1): 흡인 요인은 풍부한 일자리, 높은 임금, 교육·문화·보건 시설 등. 나머지는 배출 요인이다.',
      },
      {
        question: '국제 인구 이동의 배출 요인으로 옳은 것은?',
        choices: [
          '인종적·정치적·종교적 억압',
          '높은 임금',
          '풍부한 일자리',
          '우수한 교육 시설',
          '풍부한 보건 시설',
        ],
        correctIndex: 0,
        explanation: '03-1-(1): 배출 요인은 빈곤, 낮은 임금, 실업, 시설 부족, 인종·정치·종교적 억압, 자연재해 등이다.',
      },
      {
        question: '국제 인구 이동을 원인에 따라 분류할 때, 청교도가 종교의 자유를 찾아 아메리카로 이동한 것은?',
        choices: ['종교적 이동', '경제적 이동', '정치적 이동', '환경적 이동', '일시적 이동'],
        correctIndex: 0,
        explanation: '03-1-(2): 종교적 이동은 종교적 자유를 찾아 떠나는 이동이다(예: 청교도의 아메리카 이동).',
      },
      {
        question: '내전이나 박해를 피해 다른 나라로 떠나는 난민의 이동을 동기로 분류하면?',
        choices: ['강제적 이동', '자발적 이동', '일시적 이동', '경제적 이동', '종교적 이동'],
        correctIndex: 0,
        explanation: '03-1-(2): 이동 동기로 보면 난민은 강제적 이동, 원인으로 보면 정치적 이동에 해당한다.',
      },
      {
        question: '미숙련 노동자의 국제 이동 방향으로 가장 적절한 것은?',
        choices: [
          '소득이 낮고 고용 기회가 적은 개발도상국 → 소득이 높고 고용 기회가 많은 선진국',
          '선진국 → 개발도상국',
          '선진국 → 다른 선진국으로만 이동',
          '도시 → 농촌',
          '난민 발생국 → 내전 지역',
        ],
        correctIndex: 0,
        explanation: '03-2-(1): 미숙련 노동자는 소득이 낮고 고용 기회가 적은 개발도상국에서 선진국으로 이동한다.',
      },
      {
        question: '최근 난민이 많이 발생한 나라로 학습지에 제시된 것이 아닌 것은?',
        choices: ['스위스', '시리아', '아프가니스탄', '남수단', '미얀마'],
        correctIndex: 0,
        explanation: '03-2-(2): 내전·테러 등으로 시리아, 아프가니스탄, 남수단, 미얀마 등에서 난민이 발생했다.',
      },
      {
        question: '인구 유출 지역에 나타나는 긍정적 영향은?',
        choices: [
          '해외 이주 노동자들의 송금으로 지역 경제가 활성화된다.',
          '고급 기술 인력이 늘어난다.',
          '생산 연령 인구가 늘어난다.',
          '문화적 다양성이 커진다.',
          '부족한 노동력을 확보한다.',
        ],
        correctIndex: 0,
        explanation: '03-2-(3)-①: 유출 지역은 송금 유입으로 경제가 활성화되고 실업률이 낮아질 수 있다.',
      },
      {
        question: '인구 유출 지역의 부정적 영향으로 옳은 것은?',
        choices: [
          '생산 연령 인구와 고급 인력 유출로 산업 성장이 둔화된다.',
          '문화적 차이로 인한 갈등이 커진다.',
          '이주자 집단 주거지가 형성된다.',
          '노동력이 과잉 공급된다.',
          '임금이 크게 오른다.',
        ],
        correctIndex: 0,
        explanation: '03-2-(3)-①: 유출 지역은 생산 연령 인구, 고급 기술·전문 인력 유출로 산업 성장 둔화, 사회 침체를 겪는다.',
      },
      {
        question: '인구 유입 지역의 부정적 영향으로 옳은 것은?',
        choices: [
          '문화적 차이에 따른 갈등, 이주자 집단 주거지 형성으로 인한 지역 갈등',
          '해외 송금 증가',
          '고급 인력 유출',
          '생산 연령 인구 감소',
          '실업률 하락',
        ],
        correctIndex: 0,
        explanation: '03-2-(3)-②: 유입 지역은 노동력 확보·문화 다양성 증대라는 긍정적 영향과 함께 문화 갈등, 집단 주거지 형성 문제가 생긴다.',
      },
      {
        question: '대륙별 인구 순 이동을 보면 인구가 순유입되는 대표 지역은?',
        choices: ['유럽과 앵글로아메리카', '아프리카와 아시아', '라틴 아메리카와 아프리카', '아시아와 라틴 아메리카', '아프리카와 오세아니아'],
        correctIndex: 0,
        explanation: '지역(대륙)별 인구 순 이동 변화 그래프: 소득이 높은 유럽과 앵글로아메리카로 순유입, 아시아·라틴 아메리카·아프리카는 순유출.',
      },
      {
        question: '앵글로아메리카로 들어온 이주민의 출신지 가운데 가장 많은 지역은?',
        choices: ['라틴 아메리카', '오세아니아', '유럽', '앵글로아메리카', '남극'],
        correctIndex: 0,
        explanation: '기출 개념: 앵글로아메리카(미국·캐나다)는 인접한 라틴 아메리카 출신 이주민이 가장 많다.',
      },
    ],
  },
  {
    id: 'social-energy',
    subject: '통합사회',
    title: 'V-03 자원의 분포와 소비 실태',
    questions: [
      {
        question: '자원의 의미로 옳은 것은?',
        choices: [
          '인간에게 이용 가치가 있고 기술적·경제적으로 이용 가능한 것',
          '자연에 존재하는 모든 물질',
          '땅속에 묻혀 있는 광물만을 가리키는 말',
          '한 번 쓰면 다시 쓸 수 없는 것',
          '국가가 소유한 재산',
        ],
        correctIndex: 0,
        explanation: '03-1-1-(1): 자원은 인간에게 이용 가치가 있고 기술적·경제적으로 이용 가능한 것이다.',
      },
      {
        question: '자원의 매장량이 한정되어 언젠가는 고갈되는 특성은?',
        choices: ['유한성', '편재성', '가변성', '순환성', '재생성'],
        correctIndex: 0,
        explanation: '03-1-1-(2)-①: 유한성. 가채 연수로 앞으로 얼마나 더 채굴할 수 있는지를 나타낸다.',
      },
      {
        question: '자원이 특정 지역에 치우쳐 분포하는 특성으로, 자원 민족주의가 나타나는 배경이 되는 것은?',
        choices: ['편재성', '유한성', '가변성', '재생성', '보편성'],
        correctIndex: 0,
        explanation: '03-1-1-(2)-②: 편재성은 자원이 특정 지역에 편중되어 분포하는 특성으로, 자원 민족주의의 배경이 된다.',
      },
      {
        question: '과거에는 쓸모없던 셰일 가스가 기술 발달로 중요한 자원이 된 것과 관련된 자원의 특성은?',
        choices: ['가변성', '유한성', '편재성', '고갈성', '순환성'],
        correctIndex: 0,
        explanation: '03-1-1-(2)-③: 가변성은 기술·경제·문화적 조건에 따라 자원의 의미와 가치가 달라지는 특성이다.',
      },
      {
        question: '"가채 연수"가 나타내는 것은?',
        choices: [
          '현재 기술로 그 자원을 앞으로 몇 년 더 채굴할 수 있는지',
          '자원이 처음 발견된 뒤 지난 햇수',
          '자원이 만들어지는 데 걸린 시간',
          '자원을 수입하는 데 걸리는 기간',
          '자원 가격이 오르는 주기',
        ],
        correctIndex: 0,
        explanation: '03-1-1-(2)-①: 가채 연수를 통해 그 자원을 얼마나 더 채굴할 수 있는지 알 수 있다.',
      },
      {
        question: '세계 1차 에너지 소비에 대한 설명으로 옳은 것은?',
        choices: [
          '소비량이 계속 늘고 있고, 신·재생 에너지 개발에도 화석 에너지 의존도가 여전히 높다.',
          '소비량이 2000년 이후 계속 줄고 있다.',
          '신·재생 에너지가 화석 에너지를 이미 넘어섰다.',
          '원자력이 가장 많이 소비되는 에너지이다.',
          '석탄 소비는 사라졌다.',
        ],
        correctIndex: 0,
        explanation: '03-1-2: 세계 1차 에너지 소비량은 지속적으로 증가하고, 화석 에너지 의존도가 여전히 높다.',
      },
      {
        question: '2022년 기준 세계 1차 에너지 자원별 소비량 순서로 옳은 것은?',
        choices: [
          '석유 > 석탄 > 천연가스 > 신·재생 에너지 > 수력 > 원자력',
          '석탄 > 석유 > 천연가스 > 수력 > 원자력 > 신·재생 에너지',
          '천연가스 > 석유 > 석탄 > 원자력 > 수력 > 신·재생 에너지',
          '석유 > 천연가스 > 석탄 > 원자력 > 신·재생 에너지 > 수력',
          '신·재생 에너지 > 석유 > 석탄 > 천연가스 > 수력 > 원자력',
        ],
        correctIndex: 0,
        explanation: '03-1-2-2): 2022년 기준 석유 > 석탄 > 천연가스 > 신·재생 에너지 > 수력 > 원자력 순이다.',
      },
      {
        question: '산업 혁명기에 증기 기관의 연료로 쓰이면서 소비가 늘어난, 상용화 시기가 가장 이른 화석 에너지는?',
        choices: ['석탄', '석유', '천연가스', '우라늄', '바이오 에탄올'],
        correctIndex: 0,
        explanation: '03-2-1-1): 석탄은 산업 혁명기 증기 기관의 연료로 이용되면서 소비량이 늘었다. 화석 에너지 중 상용화가 가장 이르다.',
      },
      {
        question: '19세기 내연 기관 발명과 자동차 보급으로 소비량이 급증한 에너지는?',
        choices: ['석유', '석탄', '천연가스', '원자력', '지열'],
        correctIndex: 0,
        explanation: '03-2-1-1): 석유는 19세기 내연 기관 발명과 자동차 보급 확산으로 소비량이 급증했다.',
      },
      {
        question: '냉동 액화 기술의 발달로 운반과 사용이 편리해지면서 소비량이 급증한 에너지는?',
        choices: ['천연가스', '석탄', '석유', '원자력', '수력'],
        correctIndex: 0,
        explanation: '03-2-1-1): 천연가스는 냉동 액화 기술(LNG) 발달로 운반이 편리해지며 소비가 급증했다.',
      },
      {
        question: '석탄, 석유, 천연가스 가운데 연소 시 대기 오염 물질 배출량이 가장 적은 것은?',
        choices: ['천연가스', '석탄', '석유', '셋 모두 같다', '비교할 수 없다'],
        correctIndex: 0,
        explanation: '03-2-1-1): 천연가스는 석탄, 석유에 비해 연소 시 대기 오염 물질 배출량이 적다. 석탄이 가장 많다.',
      },
      {
        question: '석탄이 주로 매장된 곳은?',
        choices: [
          '고기 조산대 주변',
          '신생대 제3기층 배사 구조',
          '신기 습곡 산지의 화산대',
          '대륙붕의 석회암층',
          '빙하 퇴적 지형',
        ],
        correctIndex: 0,
        explanation: '03-2-1-1): 석탄은 주로 고기 조산대에 매장되어 있다(미국 애팔래치아산맥, 오스트레일리아 그레이트디바이딩산맥, 중국 푸순 등).',
      },
      {
        question: '석유와 천연가스가 주로 매장되어 있는 지질 구조는?',
        choices: [
          '신생대 제3기층의 배사 구조',
          '고생대 고기 조산대',
          '화산 활동이 활발한 판의 경계',
          '빙하 침식 지형',
          '선캄브리아기 순상지',
        ],
        correctIndex: 0,
        explanation: '03-2-1-1): 석유는 신생대 제3기층 배사 구조에 주로 매장되고, 천연가스는 석유와 함께 매장되는 경우가 많다.',
      },
      {
        question: '석유 매장이 집중된 지역으로, 이 지역 산유국들이 OPEC를 이끄는 곳은?',
        choices: ['서남아시아 페르시아만 연안', '북유럽 스칸디나비아반도', '동아시아 한반도', '남아메리카 아마존 분지', '오세아니아 그레이트디바이딩산맥'],
        correctIndex: 0,
        explanation: '03-2-1-1): 석유는 서남아시아 페르시아만 연안에 주로 분포한다(OPEC).',
      },
      {
        question: '화석 에너지의 국제 이동에 대한 설명으로 옳은 것은?',
        choices: [
          '석유는 편재성이 커서 국제 이동량이 많고, 석탄은 편재성이 작아 생산량 대비 국제 이동량이 적다.',
          '석탄은 편재성이 가장 커서 국제 이동량이 가장 많다.',
          '석유는 대부분 생산국 안에서 소비된다.',
          '천연가스는 국제적으로 거래되지 않는다.',
          '세 자원의 국제 이동 비율은 같다.',
        ],
        correctIndex: 0,
        explanation: '03-2-1-1): 석탄은 편재성이 적고 생산량 대비 국제 이동이 적다. 석유는 편재성이 커서 국제 이동이 많다.',
      },
      {
        question: '천연가스를 국제적으로 운반하는 방법으로 옳은 것은?',
        choices: [
          '육상 구간은 주로 파이프라인, 해상 구간은 수송선(LNG선)을 이용한다.',
          '대부분 화물 열차로만 운반한다.',
          '기체 상태 그대로 트럭에 실어 나른다.',
          '국경을 넘어 운반할 수 없다.',
          '항공기로만 운반한다.',
        ],
        correctIndex: 0,
        explanation: '03-2-1-1): 천연가스는 육상에서는 파이프라인, 해상에서는 수송선을 이용한다.',
      },
      {
        question: '용도별 소비 비율에서 "산업용" 비율이 약 80%로 가장 압도적인 화석 에너지는?',
        choices: ['석탄', '석유', '천연가스', '우라늄', '수력'],
        correctIndex: 0,
        explanation: '석탄의 용도별 소비 비율: 산업용이 81.8%(제철·발전 등)이고 수송용은 0.1%에 불과하다.',
      },
      {
        question: '용도별 소비 비율에서 "수송용" 비율이 가장 높은 화석 에너지는?',
        choices: ['석유', '석탄', '천연가스', '원자력', '지열'],
        correctIndex: 0,
        explanation: '석유의 용도별 소비 비율: 수송용이 61.6%로 가장 높다. 자동차·선박·항공기 연료로 쓰이기 때문이다.',
      },
      {
        question: '세 화석 에너지 가운데 "가정용" 소비 비율이 가장 높은 것은?',
        choices: ['천연가스', '석탄', '석유', '셋 모두 같다', '비교할 수 없다'],
        correctIndex: 0,
        explanation: '천연가스의 용도별 소비 비율: 가정용이 30.1%로, 난방·취사용으로 많이 쓰인다.',
      },
      {
        question: '석탄의 세계 최대 생산국이자 최대 소비국이며, 국내 수요를 감당하지 못해 많은 양을 수입하는 나라는?',
        choices: ['중국', '오스트레일리아', '인도네시아', '러시아', '미국'],
        correctIndex: 0,
        explanation: '석탄의 국가별 생산·소비·순수입: 중국이 생산 51.1%, 소비 53.9%로 모두 1위이고 순수입도 1위(23.4%).',
      },
      {
        question: '석탄의 순수출량 비율이 가장 높은 두 나라는?',
        choices: ['인도네시아, 오스트레일리아', '중국, 인도', '일본, 대한민국', '사우디아라비아, 이라크', '독일, 프랑스'],
        correctIndex: 0,
        explanation: '석탄의 국가별 순 수출량: 인도네시아 31.4%, 오스트레일리아 26.5%, 러시아 17.1% 순.',
      },
      {
        question: '석유의 국가별 생산량 비율이 가장 높은 나라는?',
        choices: ['미국', '사우디아라비아', '러시아', '캐나다', '이라크'],
        correctIndex: 0,
        explanation: '석유의 국가별 생산량(2021): 미국 20.4%, 사우디아라비아 11.6%, 러시아 10.7% 순. 순수출은 사우디아라비아가 1위.',
      },
      {
        question: '석유의 순수출량 비율이 가장 높은 나라는?',
        choices: ['사우디아라비아', '미국', '중국', '일본', '대한민국'],
        correctIndex: 0,
        explanation: '석유의 국가별 순 수출량: 사우디아라비아 15.3%, 러시아 11.1%, 이라크 8.4% 순.',
      },
      {
        question: '석유의 순수입량 비율이 가장 높은 나라는?',
        choices: ['중국', '사우디아라비아', '러시아', '캐나다', '노르웨이'],
        correctIndex: 0,
        explanation: '석유의 국가별 순 수입량: 중국 24.1%, 미국 14.3%, 인도 9.9%, 대한민국 6.1% 순.',
      },
      {
        question: '천연가스의 순수출량 비율이 가장 높은 나라는?',
        choices: ['러시아', '중국', '일본', '독일', '대한민국'],
        correctIndex: 0,
        explanation: '천연가스의 국가별 순 수출량: 러시아 19.6%, 미국 14.7%, 카타르 9.7%, 노르웨이 8.6% 순.',
      },
      {
        question: '천연가스의 순수입량 비율이 높은 나라로 짝지은 것은?',
        choices: ['중국, 일본, 독일', '러시아, 카타르, 노르웨이', '미국, 캐나다, 러시아', '이란, 카타르, 사우디아라비아', '오스트레일리아, 인도네시아, 러시아'],
        correctIndex: 0,
        explanation: '천연가스의 국가별 순 수입량: 중국 12.2%, 일본 7.9%, 독일 6.6%, 미국, 이탈리아, 대한민국 순.',
      },
      {
        question: '지역(대륙)별 1차 에너지 소비량에 대한 설명으로 옳은 것은?',
        choices: [
          '총소비량은 아시아 및 오세아니아가 가장 많지만, 1인당 소비량은 유럽·앵글로아메리카 같은 선진 지역이 더 많다.',
          '아프리카의 총소비량이 가장 많다.',
          '1인당 소비량은 아프리카가 가장 많다.',
          '모든 대륙의 1인당 소비량이 같다.',
          '앵글로아메리카는 총소비량과 1인당 소비량이 모두 가장 적다.',
        ],
        correctIndex: 0,
        explanation: '지역별 1차 에너지원별 소비량 그래프와 필기: 총량은 아시아가 최대, 1인당 소비량은 유럽·앵글로아메리카(선진국) > 아시아.',
      },
      {
        question: '경제 발전 수준에 따른 에너지 소비 구조 변화(1990→2022)로 옳은 것은?',
        choices: [
          '비OECD 국가(주로 개발도상국)의 석탄 소비가 크게 늘었다.',
          'OECD 국가의 석탄 소비가 세 배로 늘었다.',
          '비OECD 국가의 석유 소비가 줄었다.',
          '모든 국가의 에너지 소비가 줄었다.',
          'OECD 국가는 천연가스를 전혀 쓰지 않는다.',
        ],
        correctIndex: 0,
        explanation: '경제 발전 수준에 따른 에너지원별 소비 구조 변화: 비OECD 국가의 석탄 소비가 크게 늘었고, OECD는 석탄 소비가 줄었다.',
      },
      {
        question: '원자력 에너지의 정의로 옳은 것은?',
        choices: [
          '우라늄이나 플루토늄의 핵분열 시 발생하는 열에너지',
          '지구 내부의 열을 이용한 에너지',
          '식물과 미생물을 이용한 에너지',
          '석탄을 가공해 얻은 에너지',
          '바닷물의 밀물과 썰물을 이용한 에너지',
        ],
        correctIndex: 0,
        explanation: '03-2-1-2)-①: 원자력은 우라늄이나 플루토늄의 핵분열 시 발생하는 열에너지이다.',
      },
      {
        question: '원자력 발전소의 입지 조건으로 가장 적절한 것은?',
        choices: [
          '지반이 안정되고 냉각수를 얻기 쉬운 지역',
          '화산 활동이 활발한 판의 경계',
          '일조량이 많은 사막',
          '바람이 강한 산지 능선',
          '인구가 가장 많은 도심 한가운데',
        ],
        correctIndex: 0,
        explanation: '03-2-1-2)-②: 원자력 발전소는 지반이 안정되고 냉각수가 풍부한 지역에 입지한다.',
      },
      {
        question: '원자력 발전의 장점과 단점을 바르게 짝지은 것은?',
        choices: [
          '장점: 적은 연료로 많은 전력 생산 / 단점: 방사능 유출 위험, 방사성 폐기물 처리 비용',
          '장점: 방사성 폐기물이 전혀 없음 / 단점: 대기 오염 물질이 많이 나옴',
          '장점: 기상 조건에 따라 발전량이 변함 / 단점: 연료가 무한함',
          '장점: 건설 비용이 거의 없음 / 단점: 전력 생산량이 매우 적음',
          '장점: 화력 발전보다 대기 오염이 심함 / 단점: 연료가 적게 듦',
        ],
        correctIndex: 0,
        explanation: '03-2-1-2)-③: 장점은 적은 양으로 많은 전력 생산, 대기 오염 적음. 단점은 방사능 유출·폭발 위험, 폐기물 처리 비용.',
      },
      {
        question: '전체 전력 생산에서 원자력 발전 비중이 가장 높은 나라는?',
        choices: ['프랑스', '미국', '독일', '캐나다', '중국'],
        correctIndex: 0,
        explanation: '국가별 전력 생산에서 원자력 비중(2021): 프랑스 68.0%, 우크라이나 57.5% 순. 원자력 총소비량은 미국이 최대.',
      },
      {
        question: '신·재생 에너지의 정의로 옳은 것은?',
        choices: [
          '기존 화석 에너지를 변환시켜 이용하는 에너지와 재생이 가능한 에너지',
          '석유와 석탄만을 가리키는 에너지',
          '우라늄을 이용한 에너지',
          '한 번 사용하면 고갈되는 에너지',
          '수입해서 쓰는 모든 에너지',
        ],
        correctIndex: 0,
        explanation: '03-2-2-1): 신·재생 에너지는 기존 화석 에너지를 변환해 이용하는 에너지(신에너지)와 재생 가능한 에너지(재생 에너지)이다.',
      },
      {
        question: '신·재생 에너지의 특징으로 옳지 않은 것은?',
        choices: [
          '에너지 효율이 매우 높고 처음부터 경제성이 높았다.',
          '대기 오염 물질 배출량이 적어 환경친화적이다.',
          '대부분 재생 가능하여 고갈 가능성이 낮다.',
          '석유 가격 상승과 환경 규제 강화로 개발이 활발하다.',
          '최근 기술 발달로 경제성이 높아지고 공급량이 늘고 있다.',
        ],
        correctIndex: 0,
        explanation: '03-2-2-2)-③: 신·재생 에너지는 효율이 낮고 소규모 발전이라 경제성이 낮았으나, 최근 기술 발달로 경제성이 높아지고 있다.',
      },
      {
        question: '신·재생 에너지 개발이 활발해진 배경으로 적절하지 않은 것은?',
        choices: ['석유 가격 하락', '신·재생 에너지 의무 할당제 도입', '환경 규제 강화', '화석 에너지 고갈 우려', '기후 변화 대응'],
        correctIndex: 0,
        explanation: '03-2-2-2)-②: 석유 가격 상승, 의무 할당제 도입, 환경 규제 강화 등으로 개발이 활발해졌다.',
      },
      {
        question: '수력 발전에 유리한 조건으로 옳은 것은?',
        choices: [
          '강수량이 많아 유량이 풍부하고 낙차를 확보하기 좋은 지역',
          '일조량이 많은 건조 지역',
          '판의 경계부로 화산 활동이 활발한 지역',
          '바람이 약하고 지형이 평탄한 지역',
          '옥수수와 사탕수수 재배가 많은 지역',
        ],
        correctIndex: 0,
        explanation: '03-2-2-3) 수력: 강수량이 많아 유량이 풍부한 지역(브라질), 높은 산지와 빙하가 있어 낙차 확보가 유리한 지역(노르웨이, 캐나다 등).',
      },
      {
        question: '전체 발전량 중 수력 발전 비중이 매우 높은 나라로 가장 적절한 것은?',
        choices: ['노르웨이', '사우디아라비아', '이집트', '프랑스', '카타르'],
        correctIndex: 0,
        explanation: '기출 개념: 빙하 지형과 풍부한 강수로 노르웨이는 전체 발전량 중 수력 비중이 가장 높다.',
      },
      {
        question: '브라질이 가뭄을 겪으면 전력 공급에 큰 타격을 받는 이유는?',
        choices: [
          '전체 전력 생산에서 수력 발전 의존도가 매우 높아서',
          '원자력 발전 비중이 가장 높아서',
          '석탄 화력 발전만 하기 때문에',
          '태양광 발전이 대부분이라서',
          '지열 발전이 대부분이라서',
        ],
        correctIndex: 0,
        explanation: '기출 개념: 브라질은 전력 생산의 60% 정도를 수력에 의존하므로 가뭄에 취약하다.',
      },
      {
        question: '풍력 발전에 유리한 입지로 옳은 것은?',
        choices: [
          '지형 장애가 적고 일정하면서 강한 바람이 지속적으로 부는 산지 능선, 고원, 해안',
          '바람이 거의 불지 않는 분지',
          '빌딩이 밀집한 도심',
          '판의 경계부의 화산 지대',
          '유량이 풍부한 하천 하류',
        ],
        correctIndex: 0,
        explanation: '03-2-2-3) 풍력: 지형 장애가 적고 강한 바람이 지속적으로 부는 곳(덴마크 등).',
      },
      {
        question: '태양광(열) 발전에 유리한 지역은?',
        choices: [
          '건조 기후처럼 일조량이 많은 지역',
          '연중 흐리고 비가 많은 지역',
          '고위도의 극야 지역',
          '안개가 잦은 해안',
          '판의 경계부',
        ],
        correctIndex: 0,
        explanation: '03-2-2-3) 태양광(열): 건조 기후처럼 일조량이 많은 지역이 유리하다(이탈리아, 튀르키예 등).',
      },
      {
        question: '태양광 발전의 단점과 이를 보완하는 방법으로 옳은 것은?',
        choices: [
          '일조량과 일조 시간의 영향을 받아 주야간 발전량 차이가 크다 → 낮에 생산한 전력을 저장한다.',
          '연료비가 많이 든다 → 석탄을 섞어 쓴다.',
          '방사성 폐기물이 나온다 → 깊은 땅속에 묻는다.',
          '냉각수가 많이 필요하다 → 바닷가에 짓는다.',
          '지진에 취약하다 → 판의 경계에 짓는다.',
        ],
        correctIndex: 0,
        explanation: '기출 개념: 태양광은 주야간 발전량 차이가 커서, 낮에 생산한 여유 전력을 저장해 보완한다.',
      },
      {
        question: '지열 발전에 유리한 지역과 대표 국가를 바르게 짝지은 것은?',
        choices: [
          '판의 경계부 - 아이슬란드, 뉴질랜드, 필리핀, 인도네시아',
          '안정육괴 - 오스트레일리아 내륙, 캐나다 순상지',
          '고기 조산대 - 애팔래치아산맥',
          '일조량이 많은 사막 - 사우디아라비아',
          '편서풍이 강한 해안 - 덴마크',
        ],
        correctIndex: 0,
        explanation: '03-2-2-3) 지열: 판의 경계부처럼 지열이 풍부한 곳(필리핀, 인도네시아, 뉴질랜드, 아이슬란드 등).',
      },
      {
        question: '지열 발전이 활발한 아이슬란드를 지나는 판의 경계는?',
        choices: ['대서양 중앙 해령', '환태평양 조산대', '알프스-히말라야 조산대', '애팔래치아산맥', '그레이트디바이딩산맥'],
        correctIndex: 0,
        explanation: '학습지 필기: 아이슬란드는 대서양 중앙 해령, 필리핀·인도네시아·뉴질랜드는 환태평양 조산대, 이탈리아·튀르키예는 알프스-히말라야 조산대.',
      },
      {
        question: '지열 발전의 특징으로 옳은 것은?',
        choices: [
          '기상 조건의 영향을 적게 받아 발전량이 비교적 안정적이다.',
          '낮과 밤의 발전량 차이가 매우 크다.',
          '바람이 약하면 발전할 수 없다.',
          '가뭄이 들면 발전량이 크게 줄어든다.',
          '대기 오염 물질이 화력 발전보다 많다.',
        ],
        correctIndex: 0,
        explanation: '기출 개념: 지열은 지구 내부의 열을 이용하므로 태양광·풍력·수력보다 기상 조건의 영향을 덜 받는다.',
      },
      {
        question: '지열 발전량 비율이 높은 나라로 학습지 자료에 나온 것은?',
        choices: ['미국, 인도네시아, 필리핀', '노르웨이, 캐나다, 브라질', '덴마크, 독일, 영국', '사우디아라비아, 이라크, 쿠웨이트', '프랑스, 우크라이나, 스웨덴'],
        correctIndex: 0,
        explanation: '지열의 국가별 발전량 비율(2020): 미국 19.9%, 인도네시아 16.4%, 필리핀 11.4%, 튀르키예 10.6%, 뉴질랜드 8.8%.',
      },
      {
        question: '수력, 풍력, 태양광(열) 발전량 비중에서 모두 1위인 나라는?',
        choices: ['중국', '미국', '브라질', '독일', '일본'],
        correctIndex: 0,
        explanation: '수력·풍력·태양광(열)의 국가별 발전량 비중: 중국이 각각 30.3%, 29.4%, 31.0%로 모두 1위.',
      },
      {
        question: '바이오 에너지에 대한 설명으로 옳은 것은?',
        choices: [
          '식물이나 미생물을 에너지원으로 이용하며, 바이오 에탄올과 바이오 디젤이 대표적이다.',
          '지구 내부의 열을 이용한다.',
          '우라늄의 핵분열을 이용한다.',
          '바람의 운동 에너지를 이용한다.',
          '석탄을 액체로 바꾼 에너지이다.',
        ],
        correctIndex: 0,
        explanation: '03-2-2-3) 바이오: 식물이나 미생물을 에너지원으로 이용하며 고구마, 옥수수, 콩, 볏짚 등을 원료로 한다.',
      },
      {
        question: '바이오 연료 생산량이 가장 많은 두 나라와 그 주원료를 바르게 연결한 것은?',
        choices: ['미국 - 옥수수, 브라질 - 사탕수수', '중국 - 쌀, 인도 - 밀', '독일 - 감자, 프랑스 - 포도', '사우디아라비아 - 대추야자, 이란 - 밀', '노르웨이 - 목재, 캐나다 - 보리'],
        correctIndex: 0,
        explanation: '국가별 바이오 연료 생산량: 미국이 1위(옥수수), 브라질이 2위(사탕수수)이다.',
      },
      {
        question: '바이오 에너지의 문제점으로 가장 적절한 것은?',
        choices: [
          '원료 작물 재배가 늘면서 곡물 가격 상승과 식량 문제를 일으킬 수 있다.',
          '방사성 폐기물이 대량으로 나온다.',
          '판의 경계에서만 생산할 수 있다.',
          '낮에만 생산할 수 있다.',
          '바람이 약하면 생산할 수 없다.',
        ],
        correctIndex: 0,
        explanation: '교과 개념: 옥수수·사탕수수 등 식량 작물을 연료로 쓰면서 곡물 가격이 오르고 식량 부족 문제가 생길 수 있다.',
      },
      {
        question: '아랍에미리트가 풍부하게 매장된 자원을 수출해 모은 자본을 관광·금융 산업에 투자하고 있다. 이 자원은?',
        choices: ['석유', '석탄', '우라늄', '수력', '바이오 에탄올'],
        correctIndex: 0,
        explanation: '기출 개념: 아랍에미리트는 페르시아만 연안의 산유국으로, 석유 수출로 축적한 자본을 관광·금융에 투자한다.',
      },
      {
        question: '석탄, 석유, 천연가스 가운데 세계 1차 에너지 소비량에서 차지하는 비율이 가장 높은 것은?',
        choices: ['석유', '석탄', '천연가스', '셋 모두 같다', '비교할 수 없다'],
        correctIndex: 0,
        explanation: '03-1-2: 세계 1차 에너지 소비량은 석유 > 석탄 > 천연가스 순이다.',
      },
    ],
  },
];
