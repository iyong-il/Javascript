const taskInput = document.querySelector(".input-area");
const add = document.querySelector(".plus-button");
let taskList = [];
let contents = document.querySelector(".contents__row");

// 플러스버튼을 눌렀을 때
const addTask = () => {
  console.log("add");
  let content = taskInput.value;
  taskList.push(content);
  console.log(taskList);
  render();
};

const render = () => {
  let result = "";
  for (let i = 0; i < taskList.length; i++) {
    result += `<div class="contents">
    <div class="task__contents">${taskList[i]}</div>
    <div class="button">
      <button>check</button>
      <button>delete</button>
    </div>
  </div>`;
  }

  contents.innerHTML = result;
};

add.addEventListener("click", addTask);
