const numbers = process.argv.slice(2).map(Number);

const sum = numbers.reduce((a, b) => a + b, 0);

console.log(`Sum = ${sum}`);
