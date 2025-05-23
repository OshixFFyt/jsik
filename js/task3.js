{
    let mass, destyni, mass1 , destyni1, volume, volume1
    mass = parseFloat(prompt("введите массу 1 тела"))
    volume = parseFloat(prompt("введите объем 1 тела"))
    mass1 = parseFloat(prompt("введите массу 2 тела"))
    volume1 = parseFloat(prompt("введите объем 2 тела"))
    destyni = parseFloat(mass/ volume)
    destyni1 = parseFloat(mass1/volume1)
    if(destyni<destyni1){
        alert("материал 1 имеет большую плотность")
    }
    if(destyni>destyni1){
        alert("Материал 2 тела имеет большую плотность")
    }
    if(destyni==destyni1){
        alert("плотность одинаковая ")
    }

}