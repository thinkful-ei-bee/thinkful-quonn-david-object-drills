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

const newObj = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

// console.log(newObj.meals[3]);

function person(name, jobTitle) {
  return {
    name,
    jobTitle
  };
}

const person1 = person('Peter', 'Software Engineer');
const person2 = person('Cody', 'Owner');
const person3 = person('Ralph', 'Salesman');

person1.boss = 'Cody';
person3.boss = 'Cody';

const personsArr = [person1, person2, person3];

personsArr.forEach(ele => {
  if (ele.boss) {
    // console.log(`${ele.jobTitle} ${ele.name} reports to: ${ele.boss}`);
  } else {
    // console.log(`${ele.jobTitle} ${ele.name} does not report to anyone`);
  }
});

const codeKey = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(word) {
  const letter = word[0];
  return codeKey[letter] ? word[codeKey[letter] - 1] : ' ';
}

function decodeWords(words) {
  const arr = words.split(' ');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(decode(arr[i]));
  }
  return newArr.join('');
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(charcter) {
      let yourDamage = this.attack - charcter.defense;
      let thierDamage = charcter.attack - this.defense;
      if (yourDamage < 0) {
        yourDamage = 0;
      } else if (thierDamage < 0) {
        thierDamage = 0;
      }
      return `Your opponent takes ${thierDamage} and you receive ${yourDamage}.`;
    }
  };
}
const characters = [
  createCharacter(
    'Gandalf the White',
    'gandalf',
    'Wizard',
    'Middle Earth',
    10,
    6
  ),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 7)
);

characters
  .find(function(char) {
    return char.nickname === 'aragorn';
  })
  .describe();

const hobbits = characters.filter(char => char.race === 'Hobbit');

const highdamage = characters.filter(char => char.attack > 5);
