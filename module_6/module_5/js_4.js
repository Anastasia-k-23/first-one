const name = prompt('Введите ваше имя');
const year = 2024
const dateOfBirth= prompt(`Введите год`)
if (!(name === undefined || name == null || (name.trim() == ""))&&!(dateOfBirth === undefined || dateOfBirth == null || isNaN(dateOfBirth) || (dateOfBirth.trim() == ""))){
  const personalInfo= (`${year-dateOfBirth}`)
  switch(personalInfo%10){
    case 1:
    alert(`${name}: ${personalInfo} год`);
    break;
    case 2:
    alert(`${name}: ${personalInfo} года`);
    break;
    case 3:
    alert(`${name}: ${personalInfo} года`);
    break;
    case 4:
    alert(`${name}: ${personalInfo} года`);
    break;
    default:
    alert(`${name}: ${personalInfo} лет`);
    break;
    }}
else {
      alert('Год должен быть числом или пустое имя');}