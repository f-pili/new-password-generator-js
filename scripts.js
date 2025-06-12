const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
    "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let firstOutputEl = document.querySelector("#firstOutput")
let secondOutputEl = document.querySelector("#secondOutput")
let firstPassword = ""
let secondPassword = ""

const btn = document.querySelector(".btn-generate");
btn.addEventListener("click", generatePassword);

function generatePassword() {
    firstPassword = ""
    secondPassword = ""
    
    for (let i = 0; i < 15; i++) {
    let firstIndex = Math.floor(Math.random() * characters.length)
    firstPassword += characters[firstIndex]
    }

    for (let i = 0; i < 15; i++) {
    let secondIndex = Math.floor(Math.random() * characters.length)
    secondPassword += characters[secondIndex]
    }

    firstOutputEl.textContent = firstPassword
    secondOutputEl.textContent = secondPassword 
}
