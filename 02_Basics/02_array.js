const marvel_heroes = ["Thor", "Hulk", "Spider-Man"];
const DC_heroes = ["Super-Man", "Batman", "Flash⚡️"];

// marvel_heroes.push(DC_heroes); //took array as an element 🥸

// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(DC_heroes)
// console.log(allHeroes);

const allNewHeroes = [...marvel_heroes, ...DC_heroes];
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.isArray("usman"));
console.log(Array.from({ name: "usman" })); //interesting case for interviews !

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// Homework study about .isArray .of .from 🖥️ 
