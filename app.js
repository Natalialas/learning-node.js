const fs = require('fs');

const genders = ['M', 'F']

const maleNames = ["James", "John", "Robert", "Michael", "William", "David", "Joseph", "Daniel", "Richard", "Charles"];

const femaleNames = ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen", "Nancy"];

const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris"];

function randChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const people = []

for (let i = 0; i < 20; i++) {
    const person = {};

    const gender = randChoice(genders);
    person.gender = gender;

    if (gender === 'M') {
        person.firstName = randChoice(maleNames);
    } else {
        person.firstName = randChoice(femaleNames);
    }

    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.lastName = lastName;

    person.age = Math.floor(Math.random() * 61) + 18;

    people.push(person);
}

const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) {
        console.error('Something went wrong', err);
    } else {
        console.log('File has been successfully generated! Check people.json');
    }
});