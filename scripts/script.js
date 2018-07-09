var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randombutton = document.querySelector(".random");

function genRandomDigits(length) {
    var n = ""; 
    for (var i = 0; i < length; i++){
        //random number 0 to 9; 
        n += Math.floor(Math.random()*9); 
    }
    var i = 0; 
    return n; 
}

function setRandomColors(){
    
    var rand1 = genRandomDigits(6); 
    var rand2 = genRandomDigits(6);
    
    body.style.background = "linear-gradient(to right, " 
                        + "#" + rand1
                        + ", " 
                        + "#" + rand2
                        +")";     
    css.textContent = body.style.background + ";";  
    color1.value = "#"+rand1; 
    color2.value = "#"+rand2;
}

function setcolors() {    
  body.style.background = "linear-gradient(to right, " 
                        + color1.value 
                        + ", " 
                        + color2.value 
                        +")";     
    css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setcolors);

color2.addEventListener("input", setcolors); 

randombutton.addEventListener("click",setRandomColors);  

setcolors(); 
