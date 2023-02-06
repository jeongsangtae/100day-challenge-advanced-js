// const job = {
//   title: "Developer",
//   location: "Seoul",
//   salary: 300,
// };

// console.log(new Date().toISOString());

// const job2 = {
//   title: "Cook",
//   location: "Seoul",
//   salary: 400,
// }

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "seoul", 300);
const cook = new Job("Cook", "seoul", 400);

console.log(developer);
developer.describe();
cook.describe();
