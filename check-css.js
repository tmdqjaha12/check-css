require("dotenv").config(); // .env 파일의 값을 환경 변수로 로드
const postcss = require("postcss");
const doiuse = require("doiuse");
const fs = require("fs");
const path = require("path");
const browserslist = require("browserslist");

// 검사할 CSS 파일 경로
const cssFilePath = path.join(__dirname, "styles/" + process.env.CHECK_CSS_PATH);

// CSS 파일 읽기
const css = fs.readFileSync(cssFilePath, "utf8");

// 결과를 저장할 파일 경로
const outputFilePath = path.join(__dirname, "test_result/" + process.env.WRITE_CSS_PATH);

// 결과를 저장할 변수
let resultOutput = "";

// PostCSS와 Doiuse 실행
postcss([
  doiuse({
    browsers: browserslist(),
    // onFeatureUsage: function (usageInfo) {
    //   console.log("CSS Feature:", usageInfo.feature); // 어떤 CSS 기능이 문제가 있는지 나타냄
    //   console.log("Message:", usageInfo.message); // 이 기능이 일부 브라우저에서 지원되지 않음을 나타냄
    //   console.log("Browser:", usageInfo.browser); // 문제가 발생하는 브라우저의 버전을 나타냄
    //   console.log("Usage:", usageInfo.usage); // 해당 기능을 사용하는 사용자 비율이나 통계를 나타냄
    //   console.log("---------------------------------------------------");
    // },
    onFeatureUsage: function (usageInfo) {
      // 결과에 추가할 내용
      const featureOutput = [
        "---------------------------------------------------",
        `CSS Feature: ${usageInfo.feature || "N/A"}`,
        `Message: ${usageInfo.message || "No message available"}`,
        `Browser: ${usageInfo.browser || "N/A"}`,
        `Usage: ${usageInfo.usage || "N/A"}`,
      ].join("\n");

      // 결과를 변수에 추가
      resultOutput += featureOutput + "\n";
    },
  }),
])
  .process(css, { from: cssFilePath })
  .then(() => {
    fs.writeFileSync(outputFilePath, resultOutput, "utf8");
    console.log("CSS 검사 완료. 결과가 파일에 저장되었습니다.");
  })
  .catch((err) => {
    console.error("CSS 검사 중 오류 발생:", err);
  });
