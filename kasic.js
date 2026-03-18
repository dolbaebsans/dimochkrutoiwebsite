let balance = 1000;
let balance_text = document.getElementById("balance")

let border = 0.55
let successfull_border = 0.50
let continue_dep = 0.25

let resultat = document.getElementById("resultat")
let success_text = "Маладец, заработал "
let fail_text = "хавхах туда -"
let no_money_text = "ХАХЫАВХВАПЫАХВОЛЩХЗПУКЙ3УКОЩКП3ОКОКПОУ ЛОХ НЕТ ДЕНЕГ ЙЩШЗРУК РЩШПКЕЙОР ШЩК ППЙУОЩЗУК ЕПОЩЙУКЕПОЩЛЩПОУЗКПЩУП"
let not_enough_money_text = "Недостаточно средств"


function successfull(successfull_value) {
    successfull_border += continue_dep
    balance += successfull_value * 2

    console.log("yay", successfull_border)
    resultat.textContent = success_text + successfull_value * 2 + "👍"
}

function failure(failure_value) {
    successfull_border = border
    border += 0.01
    balance -= failure_value
    console.log("loh", successfull_border)
    resultat.textContent = fail_text + failure_value + "💀"
}

function no_money() {
    console.log("ahahahaha log net deneg")
    resultat.textContent = no_money_text
}

function no_ENOUGH_money() {
    console.log("ahahahaha log net deneg")
    resultat.textContent = not_enough_money_text
}

function krutit_baraban() {
    if (balance <= 0) {
        no_money()
        return
    }

    if (balance < document.getElementById("dep").value) {
        no_ENOUGH_money()
        return
    }

    let random = Math.random()

    if (random >= successfull_border) {
        successfull(document.getElementById("dep").value)
    } else {
        failure(document.getElementById("dep").value)
    }
    balance_text.textContent = "Баланс: " + balance
}

document.getElementById("depnut").addEventListener("submit", function(event) {
    event.preventDefault()

    krutit_baraban()
})