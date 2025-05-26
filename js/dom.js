// выбрать элемент (тег) на страничке
//1.1 выбор элемента по айди
const h1 = document.getElementById("title");
console.log(h1);
//1.2 выбор элемента по селектору
const menu = document.querySelector(".menu")
console.log(menu);
//1.3 выбор нескольких элементов
const links = document.querySelectorAll("a")
console.log(links);

//2. работа с контентом (поддержка тегов)
console.log(h1.textContent); //чтение содержимого без тегов
console.log(h1.innerHTML); //чтение содержимого с тегом
console.log(h1.innerText);
console.log(h1.outerHTML);
console.log(h1.outerText);
h1.innerHTML = "новый заголовок <img src = 'images/1.svg' alt = 'logo''>"; //измненить содержимое

//работа со стилями (атрибут style)
menu.style.background = "black";
menu.style.border = "2px black solid"

//работа с классами (атрибус class)
const block = document.getElementById("block");
block.classList.add("border")
block.classList.add("large")// Добавление
block.classList.remove("large"); // удаление
console.log(block.classList.contains("large"))//проверка на наличие класса

//работа с атрибутами
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://icons.getbootstrap.com/icons/airplane-engines/") // установка и изменеие атрибута
link.removeAttribute("href"); //удалить

//создание нового элемента
const image = document.createElement("img")
//создаю тег
image.setAttribute("src", "images/2.png");
image.setAttribute("alt", "тигр");
block.append(image);
// работа с потомками
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"))
//работа с предками
const lastlink = document.querySelector(".menu li:last-child a")
console.log(lastlink)
const perant = lastlink.closest(".menu"); //взять билжайшего предка с заданным селектором
console.log(perant)
//работа с событиями
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click", function(){
    circle.style.transform = "translateX(600px)"
})