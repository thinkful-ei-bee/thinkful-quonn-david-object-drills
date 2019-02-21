'use strict';

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
  bar: 'xyz',
  fum: 7,
  quux: 'abc',
  spam: 'spam spam spam spam spam'
};

for (const key in weirdObj) {
  // console.log(key, weirdObj[key]);
}

