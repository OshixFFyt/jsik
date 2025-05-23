{
    let number , d1 , d2 , d3 , d4;
number = parseInt(prompt("Введите число "))
d1 = Math.floor(number / 1) % 10
d2 = Math.floor(number / 10) % 10
d3 = Math.floor(number / 100) % 10
d4 = d1 + d2 + d3;
alert(d4)
}