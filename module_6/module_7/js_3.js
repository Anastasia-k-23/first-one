//Задание 7.7.3

const users = [
        { name: "John", age: 13 },
        { name: "Jane", age: 25 },
        { name: "Bob", age: 40 },
        { name: "Alice", age: 18 },
    ];
const adults = users.filter((user) =>{
  if (user.age>=18){
    return user
  }
})
alert(adults);

const usersNames = adults.map((names)=>{
  return names.name
});
alert(usersNames);
