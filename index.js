const numbers = document.querySelectorAll(".numbers")
const result = document.querySelector(".result span")
const signs = document.querySelectorAll(".sign")
const equals = document.querySelector("equals")
const clear = document.querySelector('.clear')
const negative = document.querySelector(".negative")
const percent = document.querySelector(".percent")
const comma = document.querySelector("comma")

let firstValue = ""
let isfirstValue = false
let secondValue = ""
let issecondValue = false
let sign = ""
let resultValue = 0

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',(e) =>{
        let atr = e.target.getAttribute('value')
        if(isfirstValue === false){
            getFirstValue(atr)
        }
        if(issecondValue === false){
            getSecondValue(atr)
        }
    })
}


function getFirstValue(el){
    result.innerHTML = ""
    firstValue += el
    result.innerHTML = firstValue
    firstValue = +firstValue
}

function getSecondValue(el){
    if (firstValue != "" && sign != ""){
        secondValue += el
        result.innerHTML = secondValue
        secondValue = + secondValue
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener("click", (e) =>{
            sign = e.target.getAttribute("value")
            isfirstValue = true
        })
    }
}

getSign()

function equals_click(){
    result.innerHTML = ""
    if(sign === "+") {
        resultValue = firstValue + secondValue
    } else if(sign === "-") {
        resultValue = firstValue - secondValue
    } else if(sign === "x") {
        resultValue = firstValue * secondValue
    } else if(sign === "/") {
        resultValue = firstValue / secondValue
    }
    result.innerHTML = resultValue

    firstValue = resultValue
    secondValue = ""
    checkResultLength()
}


function checkResultLength(){
    resultValue = JSON.stringify(resultValue)

    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue)
        result.innerHTML = resultValue.toFixed(5)
    }
}

clear.addEventListener("click",()=>{
    result.innerHTML = 0
    resultValue = 0
    isfirstValue = false
    issecondValue = false
    sign = ""
    secondValue = ""
    firstValue = ""
})

negative.addEventListener("click",()=>{
    result.innerHTML = ""
    if(firstValue != ""){
        resultValue = -firstValue
        firstValue = resultValue
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue
    }
    result.innerHTML = resultValue
})

percent.addEventListener("click",()=>{
    result.innerHTML = ""
    if(firstValue != ""){
        resultValue = firstValue / 100
        firstValue = resultValue
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100
    }
    result.innerHTML = resultValue
})