const container = document.querySelector(".container");
const btnCreate = document.getElementById("btn");
const newTask = document.getElementById("new-task")


let tasks = document.querySelectorAll(".task");


[...tasks].map(function(item){
    console.log(item.textContent);
    return item +"!";
});

//добавление новой задачи
btnCreate.addEventListener("click" , function(event){
    event.preventDefault();
    let text = newTask.value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${text}</span>`
    container.append(task);
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})

//очистка доски
const btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function(){
container.innerHTML = "";
tasks = document.querySelectorAll(".task");
console.log(tasks);
});


