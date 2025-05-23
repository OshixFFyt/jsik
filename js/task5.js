{
    let a , chislo, n
     a = parseInt(prompt("введите число а " , 1))

    if ( a >= 1 && a <= 20){
        chislo = 1;
        for (n = a; n<=20; n++){
            chislo *=n;
            
        }
        alert("произвидение чисел от " +a+ " равно " + chislo)

    }
    else{
        alert("число должно быть от 1 до 20")
    }
}