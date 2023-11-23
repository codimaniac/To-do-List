const form = document.querySelector(".form");
const addTask = document.querySelector("#add-task");
const newTask = document.querySelector("#task");
const tasks = document.querySelector(".tasks");
const defaultMessage = document.querySelector("#default")

// Managing the states of task(s) available

let checkSquares = document.querySelectorAll(".checkSquare");

let manageCheckState = () => {
  checkSquares = document.querySelectorAll(".checkSquare");

  checkSquares.forEach((checkSquare, index) => {
    if (index === checkSquares.length - 1) {
      checkSquare.addEventListener("click", () => {
        if (checkSquare.classList.contains("unchecked")) {
          checkSquare.src = "./check-square-fill.svg";
          checkSquare.classList.remove("unchecked");
          checkSquare.classList.add("checked");
          // console.log("checked");
        }
        
        // The else statement helps to uncheck the task

        // else {
        //   checkSquare.src = "./square.svg";
        //   checkSquare.classList.remove("checked");
        //   checkSquare.classList.add("unchecked");
        //   console.log("unchecked");
        // }
      });
    }
  });

  // console.log(checkSquares.length)
};

let deleteIcons = document.querySelectorAll(".deleteTask")

function manageDeleteState() {
  deleteIcons = document.querySelectorAll(".deleteTask");

  deleteIcons.forEach((deleteIcon, index) => {
    if (index === deleteIcons.length - 1) {
      deleteIcon.addEventListener("click", () => {
        
        deleteIcon.parentElement.remove()

        removeDefaultMessage()
      })
    }
  })
  
}

function removeDefaultMessage() {
  // Removing default message if a task is available

  console.log(tasks.children.length)

  if (tasks.children.length === 1) {
    defaultMessage.style.display = "block";
  } else {
    defaultMessage.style.display = "none";
  }
}

// Creating a new task 

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  const taskItem = document.createElement("span");
  taskItem.classList.add("task-item");

  const checkBox = document.createElement("img");
  checkBox.classList.add("checkSquare", "unchecked");
  checkBox.setAttribute("src", "./square.svg");
  checkBox.setAttribute("alt", "check square");
  taskItem.appendChild(checkBox);

  const task = document.createElement("span");
  task.textContent = newTask.value;
  taskItem.appendChild(task);

  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteTask");
  deleteIcon.setAttribute("src", "./x.svg");
  deleteIcon.setAttribute("alt", "delete");
  taskItem.appendChild(deleteIcon);

  tasks.appendChild(taskItem);

  removeDefaultMessage();

  newTask.value = "";

  manageCheckState();

  manageDeleteState();
});

