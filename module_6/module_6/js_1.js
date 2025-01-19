let word = prompt('');
const reverseWord = word.toLowerCase().replaceAll(" ", '').split('').reverse().join('');
if (word.toLowerCase().replaceAll(" ", '') === reverseWord){
  alert(`Слово ${word} является палиндромом`);
}
else {
  alert(`Слово ${word} не является палиндромом`);
}