const numero1 = document.getElementById('input1')
const numero2 = document.getElementById('input2')
const resultado = document.getElementById('resultado')

const operacion = document.getElementById('operacion')
console.log(operacion);

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

function opera(e) {
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)

    switch (e.target.textContent) {
        case '+':
            console.log('suma');
            resultado.textContent = add(num1, num2);
            resultado.style.backgroundColor="#9FC131"
            break;
        case '-':
            console.log('resta');
            resultado.textContent = sust(num1, num2);
            resultado.style.backgroundColor="#9FC131"
            break;
        case '*':
            console.log('multiplicacion');
            resultado.textContent = mult(num1, num2);
            resultado.style.backgroundColor="#9FC131"

            break;
        case '/':
            console.log('div');
            resultado.textContent = coc(num1, num2);
            resultado.style.backgroundColor="#9FC131"

            break;
        
    }
}
operacion.addEventListener('click', opera)