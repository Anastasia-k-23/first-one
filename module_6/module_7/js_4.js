//Задание 7.7.4

const person = {};                          
function setFullName(fullName){
  this.fullName = fullName;
}
const setPersonFullName = setFullName.bind(person);
setPersonFullName( "John Smith");
alert(person.fullName);
