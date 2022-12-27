const tel = document.querySelector(".tel")
const btn = document.querySelector(".tel")
console.log(tel);

let numbers = [
    "+998 91 347 0410",
    "+7 961 115 11 24",
    "+998 91 359 52 62",
    "+998 90 690 52 62",
    "+998 90 599 14 11",
    "+998 91 366 34 36",
]

function omad() {
    btn.getElementsByClassName.display = "none"
   let interval = setInterval(()=>{
        let index = Math.floor( Math.random() * numbers.length)
        
        tel.innerHTML = numbers[index]
    }, 200) 
    setTimeout(()=>{
        clearInterval(interval)
        btn.style.display = "lnline"
        tel.innerHTML = "+998 91 347 0410"
    },2500)
}