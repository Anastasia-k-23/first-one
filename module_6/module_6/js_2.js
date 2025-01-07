const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet); 
console.log(uniqueArr);

Задание 6.6.3
let number = +prompt('Введите любое число');
if(!(number === undefined || number == null || isNaN(number))) {
  let array = [];
  for ( i=0; i < number; i+=1 ){
  array.push(i);
  }
  alert(array);
}
else{
  alert('Вы не ввели число');
}