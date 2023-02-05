const hobbies = ["Sports", "Cooking"]; // a pointer to the array is stored
const age = 32; //the value itself is stored

hobbies.push("Reading"); // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping'] // not allowed! new address is stored

console.log(hobbies);

// Primitive values(원시 값): numbers, strings, booleans & more (undefined)
// Reference values(참조 값): Objencts 여기에 Arrays, Functions도 포함(Array와 Function도 객체이기 때문이다.)

// ... 사용한 방법
const person1 = {
  age: 32,
};

function getAdultYears1(p) {
  console.log(person1);
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}
// console.log(getAdultYears(person));
// console.log(getAdultYears({ age: person.age }));
console.log(getAdultYears1({ ...person1 }));
console.log(person1);

// key가져와서 사용
const person2 = {
  age: 32,
};

function getAdultYears2(p) {
  console.log(person2);
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}
// console.log(getAdultYears(person));
console.log(getAdultYears2({ age: person2.age }));
// console.log(getAdultYears2({ ...person2 }));
console.log(person2);

// 정해진 값만 빼고 끝
const person3 = {
  age: 32,
};

function getAdultYears3(p) {
  console.log(person3);
  // p.age -= 18;
  // return p.age;
  return p.age - 18;
}
console.log(getAdultYears3(person3));
// console.log(getAdultYears({ age: person.age }));
// console.log(getAdultYears3({ ...person3 }));
console.log(person3);

// 위 세 가지 결과는 모두 동일
