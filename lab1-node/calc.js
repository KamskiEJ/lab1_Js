const [operation, a, b] = process.argv.slice(2);
const x = Number(a);
const y = Number(b);

let result;

switch (operation) {
    case "add":
        result = x + y;
        break;
    case "sub":
        result = x - y;
        break;
    case "mul":
        result = x * y;
        break;
    case "div":
        result = x / y;
        break;
    default:
        console.log("Unknown operation");
        process.exit();
}

console.log(`Result = ${result}`);
