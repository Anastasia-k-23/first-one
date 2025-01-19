const name = prompt('Введите ваше имя');
const dateOfBirth = prompt('Введите год рождения');
const year = 2024;

if (!(dateOfBirth === undefined || dateOfBirth == null || isNaN(dateOfBirth) || (dateOfBirth.trim() == ""))){
    const personalInfo = `${name}: ${year - dateOfBirth}`;
    alert(`${personalInfo}`);
}
else {
  alert('Год должен быть числом');
}