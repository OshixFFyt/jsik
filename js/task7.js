{
    let number , sum , digit
    number = parseInt(prompt("введите число "))
    sum = 0;
    while(number>0){
        digit = number % 10
        if( digit > 5 ){
            sum += digit

        }
        number = Math.floor(number / 10 )  
    }
    alert("сумма чисел больше 5: " +number)

}