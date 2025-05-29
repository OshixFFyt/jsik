const container = document.querySelector(".container");
const btnCreate = document.getElementById("btn");
const newTask = document.getElementById("new-task")
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnImmedient = document.getElementById("immedient")
const immedient = document.querySelectorAll ("immedient")

function localcompare(a , b){
    const aText = a.querySelector("span").innerHTML;
    const bText = b.querySelector("span").innerHTML;
    if (aText > bText) return 1;
    if (aText < bText) return -1;
    return 0;

}
btnUp.addEventListener("click", function(){
    let newTask = [...tasks].sort(localcompare)
    for (let i in newTask){
        container.append(...newTask);
    }
    
})

function localcompareReverse(b , a){
    const aText = b.querySelector("span").innerHTML;
    const bText = a.querySelector("span").innerHTML;
    if (bText > aText) return 1;
    if (bText < aText) return -1;
    return 0;

}
btnDown.addEventListener("click", function(){
    let newTask = [...tasks].sort(localcompareReverse)
    for (let i in newTask){
        container.append(...newTask);
    }
    
})
function localcompareClasses(a , b){
    const aimmedient = b.querySelector("span").innerHTML;
    const bImmedient= a.querySelector("span").innerHTML;
    if (aimmedient > bImmedient) return 1;
    else{
        container.innerHTML = ""
    }
    if (bImmedient < aimmedient) return -1;
    
    return 0;

}

btnImmedient.addEventListener("click", function(){
    let newTask = [...tasks].sort(localcompareClasses)
    for (let i in newTask){
        container.append(...newTask);
    }
    
})

    


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


