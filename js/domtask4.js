const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click", function(){
    btn.onclick = () => ball.style.bottom = "200px";
})