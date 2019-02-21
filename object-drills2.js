'use strict';

// Problem # 1
function makeStudentReports(data) {
  return data.map(function(element) {
    return `${element.name} : ${element.grade}`;
  });
}

//console.log(
//  makeStudentReports([{ name: 'J', grade: 72 }, { name: 'P', grade: 100 }])
//);

function enrollInSummerSchool(students) {
  students.forEach(element => {
    element.status = 'In Summer school';
  });
  return students;
}

const test = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

// console.log(enrollInSummerSchool(test));
// const data = [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bizz' }];

function findById(items, idNum) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}

// console.log(findById(data, 2));

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  for (let i = 0; i < expectedKeys.length; i++) {
    if (Object.keys(object).indexOf(expectedKeys[i]) === -1) {
      return false;
    } 
  }
  return true;
}

const testobj = {a: 42, b: 36, c: 34};
const testobj2 = {a: 42, b: 37, x: 22};

console.log(validateKeys(testobj, ['a', 'b', 'c']));
console.log(validateKeys(testobj2, ['a', 'b', 'c']));
