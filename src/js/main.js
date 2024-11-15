const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');
const clear = document.getElementById('clear');


const caculator = () => {
    const calculate = (operator) => {
        const num1Value = Number(num1.value);
        const num2Value = Number(num2.value);
        let resultValue;

        switch (operator) {
            case '+':
                resultValue = num1Value + num2Value;
                break;
            case '-':
                resultValue = num1Value - num2Value;
                break;
            case '*':
                resultValue = num1Value * num2Value;
                break;
            case '/':
                resultValue = num1Value / num2Value;
                break;
            default:
                throw new Error(`Invalid operator: ${operator}`);
        }

        result.value = resultValue;
    };

    const checkEmpty = () => {
        if (num1.value === '' || num2.value === '') {
            alert("Please enter both numbers");
        }
    };

    document.getElementById('add').addEventListener('click', () => {
        checkEmpty();
        calculate('+');
    });

    document.getElementById('subtract').addEventListener('click', () => {
        checkEmpty();
        calculate('-');
    });

    document.getElementById('multiply').addEventListener('click', () => {
        checkEmpty();
        calculate('*');
    });

    document.getElementById('divide').addEventListener('click', () => {
        checkEmpty();
        calculate('/');
    });

    clear.addEventListener('click', () => {
        result.value = '';
        num1.value = '';
        num2.value = '';
    });
}

caculator();
