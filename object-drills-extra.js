"use strict";

const loaf = {
  flour: 300,
  water: 210
};

// console.log(loaf.flour, loaf.water);
loaf.hydration = function() {
  return (this.water / this.flour) * 100;
};

// console.log(loaf.hydration());

const weirdObj = {
  foo: 42,
  bar: "xyz",
  fum: 7,
  quux: "abc",
  spam: "spam spam spam spam spam"
};

for (const key in weirdObj) {
  // console.log(key, weirdObj[key]);
}

const newObj = {
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "afternoon tea",
    "dinner",
    "supper"
  ]
};

// console.log(newObj.meals[3]);

function person(name, jobTitle) {
  return {
    name,
    jobTitle
  };
}

const person1 = person("Peter", "Software Engineer");
const person2 = person("Cody", "Owner");
const person3 = person("Ralph", "Salesman");

person1.boss = "Cody";
person3.boss = "Cody";

const personsArr = [person1, person2, person3];

personsArr.forEach(ele => {
  if (ele.boss) {
    console.log(`${ele.jobTitle} ${ele.name} reports to: ${ele.boss}`);
  } else {
    console.log(`${ele.jobTitle} ${ele.name} does not report to anyone`);
  }
});
