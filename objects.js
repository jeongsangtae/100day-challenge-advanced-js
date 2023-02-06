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
}

const developer = new Job("Developer", "seoul", 300);
const cook = new Job("Cook", "seoul", 400);
console.log(developer);
