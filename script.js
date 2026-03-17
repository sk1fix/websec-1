const button = document.getElementById('calcBtn');
const resultDiv = document.getElementById('result');

button.addEventListener('click', calculate);

function calculate() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Введите числа!";
        return;
    }

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.innerHTML = "Деление на 0 невозможно!";
                return;
            }
            result = num1 / num2;
            break;
    }

    resultDiv.innerHTML = `${num1} ${operation} ${num2} = ${result}`;
}