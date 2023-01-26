const taskInput = document.querySelector(".input-area");
const add = document.querySelector(".plus-button");
let taskList = [];
let contents = document.querySelector(".contents__row");

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
  for (i = 0; i < taskList.length; i++) {
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

// 렌더링해주는 메서드
const render = () => {
  let result = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete === true) {
      result += `<div class="contents">
      <div class="task__contents" style="text-decoration:line-through;">${taskList[i].taskContents}</div>
      <div class="button">
        <button onclick="toggleCheck('${taskList[i].id}')">check</button>
        <button onclick="deleteButton('${taskList[i].id}')">delete</button>
      </div>
    </div>`;
    } else {
      result += `<div class="contents">
    <div class="task__contents">${taskList[i].taskContents}</div>
    <div class="button">
      <button onclick="toggleCheck('${taskList[i].id}')">check</button>
      <button onclick="deleteButton('${taskList[i].id}')">delete</button>
    </div>
  </div>`;
    }
  }

  contents.innerHTML = result;
};

add.addEventListener("click", addTask);
