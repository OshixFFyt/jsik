{
    let n1 , n2 , n3 , sum , number
    number = Math.floor(prompt("введтие 3 значное число"))
    n1 = Math.floor(number / 100)
    n2 = Math.floor((number % 100 ) / 10)
    n3 = Math.floor(number % 10)
    sum = n1 + n2 + n3
    if ( sum >= 10 && sum <= 99){
        alert("сумма чисел является двухзначным числом")

    }
    else{
        alert("сумма чисел  не является двухзначным числом")
    }


}