"use strict";

// Problem #1
function createMyObject() {
  return {
    foo: "bar",
    answerToUniverse: 42,
    "olly olly": "oxen free",
    sayHello: function() {
      return "hello";
    }
  };
}

//console.log(createMyObject());

// Problem #2
function updateObject(obj) {
  obj.foo = "foo";
  obj.bar = "bar";
  obj.bizz = "bizz";
  obj.bang = "bang";
  return obj;
}

// console.log(updateObject({a: 'xyz', b: 'kjd'}));

// Problem #3
function personMaker(first, last) {
  return {
    first,
    last,
    fullname: function() {
      return `${this.first} ${this.last}`;
    }
  };
}

// const person = personMaker("q", "b");
// console.log(person.fullname());

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

// console.log(keyDeleter({a: 5, foo: 'abc', bar: 'def'}));
