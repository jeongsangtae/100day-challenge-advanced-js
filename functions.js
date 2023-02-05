function greetuser(greetingPrefix, userName = "user") {
  // console.log(greetingPrefix + " " + userName + "!");
  console.log(`${greetingPrefix} ${userName}!`);
}

greetuser("Hi", "Jeong");
greetuser("Hello");

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }
  return result;
}

const inputNumbers = [1, 5, 5, 10];

console.log(sumUp(inputNumbers));

console.log(sumUp);
