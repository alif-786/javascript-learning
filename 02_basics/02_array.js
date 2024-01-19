let marvelHeroes = ['iron man ', 'thor', 'hulk', 'loki', 'captain America', 'hawkeye']
let DcHeroes = ['Super man ', 'Batman', 'Wonder woman', 'Flash']

// concat function 
// let allHeroes = marvelHeroes.concat(DcHeroes)
// console.log(allHeroes);
// this will also do the same job but it not recomended 

let allNewHeroes = [...DcHeroes, ...marvelHeroes];
console.log(allNewHeroes);

let real_another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13, 14, [15, 16, 17, 18]]]]
let b = real_another_array.flat(Infinity);
console.log(b);

console.log(`is array: ${Array.isArray("Alif")}`);
console.log(Array.from("Alif"))

let score1 = 100;
let score2 = 200;
let score3 = 300;

let allScore = Array.of(score1, score2, score3);
console.log(`The all scores: ${allScore}`)
