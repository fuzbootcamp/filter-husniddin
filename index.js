let links = document.querySelector('.center')

function toggle() {

    links.classList.toggle('active')

    
}


let img = document.querySelector('.h-main img')

function f1(){

    img.style.filter = "blur(3px)"
}

function f2(){

    img.style.filter = "contrast(20%)"
}

function f3(){

    img.style.filter = "grayscale(80%)"
}

function f4(){

    img.style.filter = "opacity(30%)"
}

function f5(){

    img.style.filter = "sepia(80%)"
}


function b1() {

    img.style.border = '15px solid dodgerblue'
}

function b2() {

    img.style.border = '15px double red'
}

function b3() {

    img.style.border = '15px dashed black'
}

function b4() {

    img.style.border = '15px dotted black'
}

