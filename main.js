const completeCancellationOperation = document.getElementById("cancellation");
const percentageButton = document.getElementById("percentage");
const DisplayingCalculatiResultscreen = document.querySelector(".calculation_output");
const buttons = document.querySelectorAll('.user_button');
const clearEntryButton = document.querySelector(".user_button_CE");
const equalsButton = document.querySelector(".user_button");
const expressionText = document.getElementById("expressionText")
let currentExpression = '';

completeCancellationOperation.addEventListener('click', function() {
  DisplayingCalculatiResultscreen.textContent = '';
  currentExpression = '';
});

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const calculationSymbolandDigit = this.textContent;
    console.log(`Нажата кнопка с цифрой: ${calculationSymbolandDigit}`);

    if (calculationSymbolandDigit === '=') {
      try {
        const result = eval(currentExpression);
        if (result === Infinity || result === -Infinity) {
            // Отобразить сообщение об ошибке при бесконечном результате
            DisplayingCalculatiResultscreen.textContent = 'Ошибка: Деление на ноль';
        } else {
            DisplayingCalculatiResultscreen.textContent = `${currentExpression} = ${result}`;
            currentExpression = result.toString();
            console.log(result);
        }
      } catch (error) {
        DisplayingCalculatiResultscreen.textContent = 'Ошибка';
        currentExpression = '';
        console.log(currentExpression);
      }
    } else if (calculationSymbolandDigit === '%') {
      if (currentExpression) {
        try {
          const result = eval(currentExpression);
          const percentageResult = (result / 100).toString();
          DisplayingCalculatiResultscreen.textContent = percentageResult;
          currentExpression = percentageResult;
        } catch (error) {
          DisplayingCalculatiResultscreen.textContent = 'Ошибка';
          currentExpression = '';
        }
      }
    } else {
      currentExpression += calculationSymbolandDigit;
      console.log(currentExpression);
      DisplayingCalculatiResultscreen.textContent += calculationSymbolandDigit;
    }
  });
});

clearEntryButton.addEventListener('click', function() {
    if (currentExpression.length > 0) {
      currentExpression = currentExpression.slice(0, -1);
      DisplayingCalculatiResultscreen.textContent = currentExpression;
    }
  });
      
      
      
      
      
      