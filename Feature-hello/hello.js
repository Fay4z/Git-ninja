const button = document.querySelector("button");
const greetings = document.querySelector(".greetings");

button.addEventListener("click", ()=>{
    greetings.textContent = "Have a nice day"
})