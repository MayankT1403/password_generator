const password = document.getElementById("pass");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const btn = document.getElementById("btn");
const lengthInput = document.getElementById("len");

const Uppernum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowernum = "abcdefghijklmnopqrstuvwxyz";
const digit = "1234567890";
const symbolnum = "!@#$%^&*()_+~`|}{[]:;<>?,./";

function addPass() {
    password.value = ""; 
    let passwordCharacters = ""; 

    if (upper.checked) {
        passwordCharacters += Uppernum;
    }
    if (lower.checked) {
        passwordCharacters += Lowernum;
    }
    if (number.checked) {
        passwordCharacters += digit;
    }
    if (symbol.checked) {
        passwordCharacters += symbolnum;
    }

    const passLength = parseInt(lengthInput.value);

    if (passwordCharacters.length === 0) {
        password.value = "Please select at least one option!";
        return;
    }

    for (let i = 0; i < passLength; i++) {
        password.value += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
}

btn.addEventListener("click", addPass);
