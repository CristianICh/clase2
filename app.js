const numero1 = document.getElementById('input1')
const numero2 = document.getElementById('input2')
const resultado = document.getElementById('resultado')


const suma = document.getElementById('sum')
const resta = document.getElementById('res')
const multiplicar = document.getElementById('mul')
const dividir = document.getElementById('div')

function add(a, b) {
    return a + b;
}
function sust(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}
function coc(a, b) {
    return a / b;
}

function sumar(e) {
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)
    resultado.textContent = add(num1, num2)

}
suma.addEventListener('click', sumar)

function sustraer(e) {
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)
    resultado.textContent = sust(num1, num2)

}
resta.addEventListener('click', sustraer)

function producto(e) {
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)
    resultado.textContent = mult(num1, num2)

}
multiplicar.addEventListener('click', producto)

function cociente(e) {
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)
    resultado.textContent = coc(num1, num2)

}
dividir.addEventListener('click', cociente)