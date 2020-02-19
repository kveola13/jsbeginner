let person = {
    name: 'Ola',
    age: 27
};

person['age'] = 27;

console.log(person.name);
console.log(person.age)

let cards = ['Geralt of Rivia', 'Ogre'];
console.log(cards[0]);

let archerCard = {
    name: 'Archer',
    strength: 2,
    provision: 5
};

let bowmanCard = {
    name: 'Bowman',
    strength: 3,
    provision: 4
};

let soldier = {
    name: 'Soldier',
    strength: 5,
    provision: 6
};

console.table({archerCard, bowmanCard, soldier})