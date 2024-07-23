- node 20.12.2

```bash
$npm init -y
$npm install doiuse browserslist --save-dev
$vi .browserslistrc
$vi check-css.js
$vi node check-css.js
```

## .browserslistrc

```bash
# 현재 사용중
> 1% # 전 세계 점유율이 1% 이상인 브라우저
last 2 versions # 주요 브라우저의 초신 2개 버전
not dead # 24개월 이상 업데이트되지 않았거나, 점유율이 매우 낮은 브라우저를 제외
```

```bash
> 1% # 전 세계 점유율이 1% 이상인 브라우저
last 2 versions # 주요 브라우저의 초신 2개 버전
not dead # 24개월 이상 업데이트되지 않았거나, 점유율이 매우 낮은 브라우저를 제외
last 2 Chrome versions # 특정 브라우저와 버전을 지정
last 2 Firefox versions # 특정 브라우저와 버전을 지정
last 2 Safari versions # 특정 브라우저와 버전을 지정
last 2 Edge versions # 특정 브라우저와 버전을 지정
not IE 11 # 특정 브라우저를 제외
not op_mini all 특정 브라우저를 제외
iOS >= 10 # 모바일 브라우저(IOS 10 이상)
Android >= 5 # 모바일 브라우저(Android 5 이상)
> 1% in KR # 한국에서 점유율이 1% 이상인 브라우저
Firefox ESR # Firefox Extended Support Release(확장 지원 릴리스)
not Explorer > 0 # Internet Explorer이 모든 버전을 지원 목록에서 제외하겠다
ios_saf >= 15.7 and ios_saf <= 17
and_chr >= 91
```

---

## 테스트 결과 예시

CSS Feature: css-resize
Message: C:\Users\rs02\Desktop\jodal\styles\reset.css:219:3: CSS resize property not supported by: Safari on iOS (16.6-16.7,17.4,17.5), Opera Mini (all), KaiOS Browser (2.5) (css-resize)
Browser: N/A
Usage: resize: none

검사css resize
reset.css파일 219번째 줄 3번째 열에서 사용
특정 브라우저에서 지원되지 않음( Safari IOS16.6~17.5, Opera Mini모든버전, KaiOS Browser2.5)

## 브라우저리스트 데이터베이스 업데이트

npx browserslist@latest --update-db

## 브라우저리스트 체크 버전

npx browserslist
