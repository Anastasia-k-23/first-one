//Задание 7.7.5

function sortedArr(arr){
  return arr.sort((a, b) => a - b);
}
function uniqArr (arr){
  return arr.filter((item, index) => index === arr.indexOf(item));
}
function uniqSortedArr(arr){
  return sortedArr(uniqArr(arr))
}
const numbers = [1, 13, 28, 4, 1, 3, 2, 13, 57];
const newArray = uniqSortedArr(numbers);

alert(newArray);