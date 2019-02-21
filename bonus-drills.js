'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' }
];

function findOne(arr, query) {
  for (let i = 0; i < arr.length; i++) {
    if (singleQuery(arr[i], query)) {
      return arr[i];
    }
  }
  return null;
}

function singleQuery(hero, query) {
  for (const key in query) {
    if (!(key in hero)) {
      return false;
    }
    if (query[key] !== hero[key]) {
      return false;
    }
  }
  return true;
}
console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));
