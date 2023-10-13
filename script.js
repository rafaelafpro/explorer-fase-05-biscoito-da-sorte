const cookie = document.querySelector("#cookie");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const retryBtn = document.querySelector("button")
const msgElement = document.querySelector("#message")


const messages = ["Nada é tão ruim que não possa piorar", "Você só vai errar se tentar", "Não se preocupe com um dia ruim, dias piores virão"]


cookie.addEventListener("click", handleCookieClick)
retryBtn.addEventListener("click", handleCookieClick)

function handleCookieClick(){
    msgElement.innerText = sortMessage();
    toggleScreen();
}


function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function sortMessage(){
    let randomNumber = Math.round(Math.random() * 2);
    return messages[randomNumber];
}