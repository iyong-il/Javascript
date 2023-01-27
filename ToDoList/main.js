const taskInput = document.querySelector(".input-area");
const add = document.querySelector(".plus-button");
let taskList = [];
let contents = document.querySelector(".contents__row");
let tabs = document.querySelectorAll(".menu .menu__item");
let filterList = [];
let buttonID = "all";

// 렌더링해주는 메서드
const render = () => {
  let copyList = [];
  if (buttonID === "all") {
    copyList = taskList;
  } else if (buttonID === "going" || buttonID === "done") {
    copyList = filterList;
  }

  let result = "";
  for (let i = 0; i < copyList.length; i++) {
    if (copyList[i].isComplete === true) {
      result += `<div class="contents">
      <div class="task__contents" style="text-decoration:line-through;">${copyList[i].taskContents}</div>
      <div class="button">
        <button onclick="toggleCheck('${copyList[i].id}')">check</button>
        <button onclick="deleteButton('${copyList[i].id}')">delete</button>
      </div>
    </div>`;
    } else {
      result += `<div class="contents">
    <div class="task__contents">${copyList[i].taskContents}</div>
    <div class="button">
      <button onclick="toggleCheck('${copyList[i].id}')">check</button>
      <button onclick="deleteButton('${copyList[i].id}')">delete</button>
    </div>
  </div>`;
    }
  }

  contents.innerHTML = result;
};

// 플러스버튼을 눌렀을 때
const addTask = () => {
  console.log("add");

  let task = {
    id: Math.random().toString(36).substr(2, 16),
    taskContents: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);
  console.log(taskList);
  render();
  return;
};

// check버튼 클릭시
const toggleCheck = (e) => {
  console.log(e);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === e) {
      // toggle
      taskList[i].isComplete = !taskList[i].isComplete;
      console.log(taskList[i].isComplete);
      render();
      return;
    }
  }
};

// delete버튼 클릭시
const deleteButton = (e) => {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === e) {
      taskList.splice(i, 1);
      render();
      return;
    }
  }
};

for (i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    filter(e);
  });
}

const filter = (e) => {
  console.log(e.target.id);
  buttonID = e.target.id;
  filterList = [];
  if (buttonID === "all") {
    render();
  } else if (buttonID === "going") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (buttonID === "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
};

add.addEventListener("click", addTask);
