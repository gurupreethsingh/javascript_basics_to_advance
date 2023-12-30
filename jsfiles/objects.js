// console.log("objects in javascript / json type of data.");

// key -  value

// let student =
// {
//   name: "Amrutha",
//   age: 20,
//   subject: ["English", "hindi", "kannada"],
//   intro: function () {
//     console.log(this.name + " " + this.age + " " + this.subject);
//   },
// };

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.subject);
// student.intro();
// console.log(student["name"]);

// // change any values using the key

// student["name"] = "Amrutha Naidu";
// console.log(student.name);

let allstudents = [
  {
    name: "Amrutha",
    age: 20,
    subject: ["English", "hindi", "kannada"],
    intro: function () {
      console.log(this.name + " " + this.age + " " + this.subject);
    },
  },
  {
    name: "Suresh",
    age: 25,
    subject: ["Java", "hindi", "kannada"],
    intro: function () {
      console.log(this.name + " " + this.age + " " + this.subject);
    },
  },
  {
    name: "Mahesh",
    age: 30,
    subject: ["Java", "python", "kannada"],
    intro: function () {
      console.log(this.name + " " + this.age + " " + this.subject);
    },
  },
];

// console.log(allstudents);
// console.log(allstudents[1].name);
// allstudents[1].intro();

// map() function.

let studentdb = allstudents.map((eachstudent) => {
  return eachstudent.name;
});

console.log(studentdb);

class Sample {
  constructor() {
    console.log(
      "A am default constructor . ill run automatically no need to call me."
    );
  }

  multiply() {
    var a = 10;
    var b = 20;
    return a * b;
  }
}

var s = new Sample();
var result = s.multiply();

console.log(result);
