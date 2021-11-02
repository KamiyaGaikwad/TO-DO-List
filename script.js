//Selector
var todoInput = document.querySelector(".todo-input")
var todoButton = document.querySelector(".todo-button")
var todoList = document.querySelector(".todo-list")


//Event Listeners
todoButton.addEventListener("click",addTodo)


//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append List
    todoList.appendChild(todoDiv);
}