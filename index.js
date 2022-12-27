const tel = document.querySelector(".tel")
const btn = document.querySelector(".tel")
console.log(tel);

let numbers = [
    "+998 91 343 0668",
    "+998 99 540 2221",
    "+998 91 347 0410",
    "+998 94 598 3531",
    "+998 33 618 0507",
    "+998 33 008 2700",
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