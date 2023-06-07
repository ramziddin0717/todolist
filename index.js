let setCount = document.getElementById("count");
let setBtn = document.getElementById("btn")
let setBtn2 = document.getElementById("btn2")
let setNight = document.getElementById("night")

setBtn.addEventListener("click", function(){
    setCount.innerHTML++;
})

setBtn2.addEventListener("click", function(){
    setCount.innerHTML--;
})

setNight.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})

