const par = document.getElementById("demo");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = Math.floor(Math.random()*10000) +1;
})