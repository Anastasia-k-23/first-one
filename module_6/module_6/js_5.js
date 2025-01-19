let obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
  };
  let arrValues = [];
  
  if (Array.isArray(arrValues)){
  for (let key in obj){
  arrValues.push(obj[key])
    };
    alert(arrValues);
  };