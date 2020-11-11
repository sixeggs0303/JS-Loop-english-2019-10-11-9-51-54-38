for(let i=1;i<10;i++){
    let display = "";
    for(var j=1;j<i;j++){
        display += i + "*" + j + "=" + i*j + " "
    }
    display += i + "*" + j + "=" + i*j
    console.log(display)
}