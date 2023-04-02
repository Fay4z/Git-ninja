const button = document.querySelector("button");
const date = document.querySelector(".date");

const now = new Date();
const formatter = new Intl.DateTimeFormat("en-in", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

console.log(formatter.format(now))

button.addEventListener("click", ()=>{
    const fullDate = formatter.format(now);
    date.textContent = fullDate;
})
