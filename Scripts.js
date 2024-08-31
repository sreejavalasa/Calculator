const calculatorScreen = document.getElementById('calculator-screen');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const action = key.getAttribute('data-action');

        if (action === 'clear') {
            calculatorScreen.value = '';
        } else if (action === '=') {
            try {
                calculatorScreen.value = eval(calculatorScreen.value.replace('×', '*').replace('÷', '/'));
            } catch {
                calculatorScreen.value = 'Error';
            }
        } else {
            calculatorScreen.value += action;
        }
    });
});
