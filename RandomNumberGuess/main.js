// 랜덤번호를 저장하기위한 전역변수
let computerNum = 0;
let chances = 5;
let selectNumArray = [];

// html에 있는 UI를 가져오기위한 전역변수
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceLabel = document.getElementById("chance-label");

// html에서 가져온 UI의 이벤트 처리를 위해
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
// 메서드 이름을 따로 만들지 않고 간단하게 만들 수도 있다.
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

// 랜덤번호 메서드
function pickNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답은", computerNum);
  // resultArea.textContent = "";
}

// Go버튼 메서드
function play() {
  let userValue = userInput.value;
  // console.log(userValue);

  // 숫자가 범위밖을 넘어갔을 때
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자만 입력해주세요.";
    return;
  }

  // 반복된 숫자가 들어갔을 때
  if (selectNumArray.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다.";
    return;
  }

  if (userValue < computerNum) {
    minus("업");
  } else if (userValue > computerNum) {
    minus("다운");
  } else {
    resultArea.textContent = "빙고!!!";
    playButton.disabled = true;
  }

  selectNumArray.push(userValue);
  console.log(selectNumArray);

  if (chances == 0) {
    playButton.disabled = true;
  }
}

// 리셋버튼 메서드
function reset() {
  userInput.value = "";
  pickNumber();
  resultArea.textContent = "결과가 나온다.";
  chances = 5;
  playButton.disabled = false;
}

// 기회가 줄어드는 메서드
function minus(text) {
  resultArea.textContent = text;
  chances--;
  chanceLabel.textContent = `남은기회는 ${chances} 번`;
}

pickNumber();
