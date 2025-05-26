const link = document.createElement("a");
link.setAttribute("href" , "https://midis.ru/")
link.setAttribute("target" , "_blank")
link.textContent = "Ссылка на сайт"
document.body.append(link);
link.onmousecenter = () =>{
    link.style.color = "cyan";
}
link.onmouseleave = () => {
    link.style.color = "green";
}