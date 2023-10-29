const completeCancellationOperation = document.getElementById("cancellation");
const percentageButton = document.getElementById("percentage");
const DisplayingCalculatiResultscreen = document.querySelector(".calculation_output");
const buttons = document.querySelectorAll('.user_button');
const clearEntryButton = document.querySelector(".user_button_CE");
const equalsButton = document.querySelector(".user_button");
const expressionText = document.getElementById("expressionText")

let currentExpression = '';
let percentageValue = null;

completeCancellationOperation.addEventListener('click', function() {
  DisplayingCalculatiResultscreen.textContent = '';
  currentExpression = '';
  percentageValue = null;
});

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const calculationSymbolandDigit = this.textContent;
    console.log(`Нажата кнопка с цифрой: ${calculationSymbolandDigit}`);

    if (calculationSymbolandDigit === '=') {
      try {
        if (percentageValue !== null && currentExpression) {
          const result = eval(currentExpression);
          const percentageResult = (percentageValue * result / 100).toString();
          DisplayingCalculatiResultscreen.textContent = `${percentageValue}% от ${currentExpression} = ${percentageResult}`;
          currentExpression = percentageResult;
        } else {
          DisplayingCalculatiResultscreen.textContent = 'Ошибка: Процент не установлен или отсутствует значение';
        }
      } catch (error) {
        DisplayingCalculatiResultscreen.textContent = 'Ошибка';
        currentExpression = '';
      }
    } else if (calculationSymbolandDigit === '%') {
      if (currentExpression) {
        if (percentageValue === null) {
          percentageValue = eval(currentExpression);
          DisplayingCalculatiResultscreen.textContent = `${percentageValue}%`;
          currentExpression = '';
        } else {
          DisplayingCalculatiResultscreen.textContent = 'Ошибка: Процент уже установлен';
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





// let currentExpression = '';
// let percentageValue = null;


// completeCancellationOperation.addEventListener('click', function() {
//   DisplayingCalculatiResultscreen.textContent = '';
//   currentExpression = '';
//   percentageValue = null;
// });

// buttons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     const calculationSymbolandDigit = this.textContent;

//     if (calculationSymbolandDigit === '=') {
//       try {
//         const result = eval(currentExpression);
//         if (result === Infinity || result === -Infinity) {
//             // Отобразить сообщение об ошибке при бесконечном результате
//             DisplayingCalculatiResultscreen.textContent = 'Ошибка: Деление на ноль';
//         } else {
//             DisplayingCalculatiResultscreen.textContent = `${currentExpression} = ${result}`;
//             currentExpression = result.toString();
//             console.log(result);
//         }
//       } catch (error) {
//         DisplayingCalculatiResultscreen.textContent = 'Ошибка';
//         currentExpression = '';
//         console.log(currentExpression);
//       }
//     } else if (calculationSymbolandDigit === '%') {
//       if (currentExpression) {
//         try {
//           if (percentageValue !== null) {
//             const result = eval(currentExpression);
//             const percentageResult = ((result / 100) * percentageValue).toString();
//             DisplayingCalculatiResultscreen.textContent = percentageResult;
//             currentExpression = percentageResult;
//           } else {
//             percentageValue = eval(currentExpression);
//             DisplayingCalculatiResultscreen.textContent = 'Процент установлен';
//           }
//           } catch (error) {
//           DisplayingCalculatiResultscreen.textContent = 'Ошибка';
//           currentExpression = '';
//           percentageValue = null;
//         }
//       }
//     } else {
//       currentExpression += calculationSymbolandDigit;
//       console.log(currentExpression);
//       DisplayingCalculatiResultscreen.textContent += calculationSymbolandDigit;
//     }
//   });
// });

// clearEntryButton.addEventListener('click', function() {
//     if (currentExpression.length > 0) {
//       currentExpression = currentExpression.slice(0, -1);
//       DisplayingCalculatiResultscreen.textContent = currentExpression;
//     }
//   });
      
      
      
      
      
      