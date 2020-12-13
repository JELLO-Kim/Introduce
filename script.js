// style.js
const toDoForm = document.querySelector("#js-toDoForm"),
  toDoInput = doDoform.querySelector("input"),
  toDoList = document.querySelector("#js-toDoList");

const = TODO_LS = "toDo"

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X"
  const span = document.createElement("span");
  span.innerText = text;
  li.appendcChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event){
  event.preventDefault();
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loaedTodo() {
  const toDo = localStorage.getItem(TODO_LS);
  if(toDo !==null) {

  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
