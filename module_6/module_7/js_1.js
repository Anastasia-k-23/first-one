    //Задание 7.7.1
function printInfo(){
    console.log(`Name:${this.name}; Age:${this.age}`)
  }
  const person = {
      name: "John",
      age: 33
    };
console.log(printInfo.call(person));

//Не понимаю, что нужно сделать, чтобы вывести результат на экран...  