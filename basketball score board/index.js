let home = document.getElementById("home")
let guest = document.getElementById("guest")
let homes = 0
let guests = 0

function inc1(){
    homes += 1
    home.innerText = homes   
}

function inc2(){
    homes += 2
    home.innerText = homes   
}

function inc3(){
    homes += 3
    home.innerText = homes   
}

function inc1g(){
    guests += 1
    guest.innerText = guests 
    console.log(guests)  
}

function inc2g(){
    guests += 2
    guest.innerText = guests   
}

function inc3g(){
    guests += 3
    guest.innerText = guests  
}

function reset(){
    guests = 0;
    homes = 0;
    home.innerText = 0;
    guest.innerText = 0;    
}