//Задание 7.7.2

function calculate (a, b, operator){
  if (operator === '+'){
      return a + b
      }
  else if (operator === '-'){
           return a - b
           }
  else {
    return a / b
  }
}
const array = [2, 3, "+"];
const sum = calculate.apply(null, array);
alert(sum);