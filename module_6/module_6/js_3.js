
let number = +prompt('Введите любое число');
if(!(number === undefined || isNaN(number))) {
  let array = [];
  for ( i=0; i < number; i+=1 ){
  array.push(i);
  }
  alert(array);
}
else{
  alert('Вы не ввели число');
}
