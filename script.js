function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultBox = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || operator === "") {
        resultBox.textContent = "Result: Please fill all fields!";
        return;
    }

    let result;
    switch (operator) {
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
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }

    resultBox.textContent = `Result: ${result}`;
}

function resetForm() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').value = "";
    document.getElementById('result').textContent = "Result:";
}
