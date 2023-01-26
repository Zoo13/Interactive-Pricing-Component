let totalAmount = document.getElementById('amount')
let totalAmountValue = 16

let viewers = document.getElementById('views')
let range = document.getElementById('rangeinput')
let turn = document.getElementById('turn')
let turncontainer = document.getElementById('on-off')
let turn25 = false

turncontainer.addEventListener('click' , ()=> {
    if(turn25 == false){
        turn.style.transform = 'translateX(135%)'
        turn25 = true
        turncontainer.style.backgroundColor = '#7AEADF'
    } else {
        turn.style.transform = 'translateX(0%)'
        turn25 = false
        turncontainer.style.backgroundColor = '#CFD8EF'
    }
    calculate(totalAmountValue)
})
function toggleSteps(element) {
    let amount = parseInt(element.value);
    if(amount == 1){
        totalAmountValue = 8
        viewers.innerHTML = '10K PAGEWIEVS'
    }else if (amount == 2 ){
        totalAmountValue = 12
        viewers.innerHTML = '50K PAGEWIEVS'
    } else if (amount == 3){
        totalAmountValue = 16
        viewers.innerHTML = '100K PAGEWIEVS'
    } else if (amount == 4){
        totalAmountValue = 24
        viewers.innerHTML = '500K PAGEWIEVS'
    } else if (amount == 5){
        totalAmountValue = 36
        viewers.innerHTML = '1M PAGEWIEVS'
    }
    calculate(totalAmountValue)

    
}
range.addEventListener('mousemove' , ()=> {
    let x = range.value*20-10
    let color = "linear-gradient(90deg, rgba(164, 243, 235, 1) "+ x + "% ," + "rgba(236, 240, 251, 1) " +
    x + "%)"
    range.style.background = color
})

function calculate(x){
    if(turn25== false){
        totalAmount.innerHTML = "$ " + x.toFixed(2)
    } else {
        x = x * 12
        x = x - (x*25/100)
        totalAmount.innerHTML = "$ " + x.toFixed(2)
    }
}
