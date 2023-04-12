const readLine=require('readline-sync');

let answers= [];
answers.push(readLine.question('noun: '));
answers.push(readLine.question('verb: '));
answers.push(readLine.question('verb ending in -ing: '));
answers.push(readLine.question('plural noun: '));

console.log(`Text ${answers[0]} text text ${answers[1]} text. Text text ${answers[2]}, text ${answers[3]} text text.`);
console.log(answers);