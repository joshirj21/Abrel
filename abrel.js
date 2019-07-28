// var index = document.querySelector(".spinner img");
var bck = document.querySelector(".bground")
var btn1 = document.querySelector(".btnc1");
var btn2 = document.querySelector(".btnc2");
var info = document.querySelector(".info")
var spinner = document.querySelector("zIndex")

btn1.addEventListener("mouseenter", function () {
    btn1.classList.add("btnch1")
})
btn1.addEventListener("mouseleave", function () {
    btn1.classList.remove("btnch1")
})
btn2.addEventListener("mouseenter", function () {
    btn2.classList.add("btnch2")
})
btn2.addEventListener("mouseenter", function () {
    btn2.classList.remove("btnch2")
})


setTimeout(function () {
    spinner.classList.add("gif");
    // index.setAttribute("src", "/");
}, 1000)
setTimeout(function () {
    bck.classList.remove("bground")
    bck.classList.add("bg")
    info.classList.remove("info")
    // bck.classList.add("bc")
}, 1000)


// bck.style.transition = "all 2s";



