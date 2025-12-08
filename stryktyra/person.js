const persons = [
    { name: "John", age: 23, city: "Boston" },
    { name: "Anna", age: 19, city: "Paris" },
    { name: "Max", age: 30, city: "Berlin" },
    { name: "Kate", age: 25, city: "Rome" },
    { name: "Leo", age: 21, city: "Kyiv" }
];

persons.groupName = "A";
persons.teacher = "Joan Doe";
persons.year = "2023";

console.log("=== Завдання 1: вивід елементів масиву різними циклами ===");

console.log("--- for ---");
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}

console.log("--- for...of ---");
for (const p of persons) {
    console.log(p);
}

console.log("--- for...in (індекси і додаткові властивості масиву) ---");
for (const key in persons) {
    console.log(key, "=>", persons[key]);
}


console.log("\n=== Завдання 2: об'єднання об'єктів ===");

const defaults = { mode: "test", debugLevel: "error", logFolder: "root" };
const userSetting = { mode: "production", debugLevel: "trace" };

const merged1 = { ...defaults, ...userSetting };
console.log("Merged (spread):", merged1);

const merged2 = Object.assign({}, defaults, userSetting);
console.log("Merged (Object.assign):", merged2);

function mergeObjects(a, b) {
    const result = {};
    for (const key in a) {
        result[key] = a[key];
    }
    for (const key in b) {
        result[key] = b[key];
    }
    return result;
}

const merged3 = mergeObjects(defaults, userSetting);
console.log("Merged (manual):", merged3);


console.log("\n=== Завдання 3: геттер birthYear для person (persons[0]) ===");

Object.defineProperty(persons[0], "birthYear", {
    get() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    },
    enumerable: true
});

console.log("Person:", persons[0]);
console.log("birthYear (тільки читання):", persons[0].birthYear);


console.log("\n=== Завдання 4: об'єднання масивів ===");

const arr1 = [1, 2];
const arr2 = [3, 4];

const combined1 = arr1.concat(arr2);
console.log("concat:", combined1);

const combined2 = [...arr1, ...arr2];
console.log("spread:", combined2);

const combined3 = [];
for (const x of arr1) combined3.push(x);
for (const x of arr2) combined3.push(x);
console.log("manual push:", combined3);


console.log("\n=== Завдання 5: перетворення persons у масив текстів ===");

const personsText = persons.map(p => {
    const birthYear = 2023 - p.age; // фіксований рік, як в умові
    return `${p.name} from ${p.city} born in ${birthYear}`;
});

console.log(personsText);


console.log("\n=== Завдання 6: фільтр людей старше 20 років ===");

const olderThan20 = persons.filter(p => p.age > 20);
console.log(olderThan20);


console.log("\n=== Завдання 7: деструктуризація ===");

const person = persons[0];
const { name, city } = person;
console.log("name:", name, "city:", city);

const [firstPerson] = persons;
console.log("firstPerson:", firstPerson);


console.log("\n=== Завдання 8: getUserData + showUserInfo ===");

function getUserData(username) {
    const user = persons.find(p => p.name === username);
    if (!user) {
        throw new Error("Unable to find user");
    }
    return user;
}

function showUserInfo(username) {
    console.log(`showUserInfo("${username}")`);
    console.log("Loading");
    try {
        const user = getUserData(username);
        console.log("User data:", user);
        console.log("Loading finished");
    } catch (err) {
        console.log("Error:", err.message);
        console.log("Loading finished");
    }
}

showUserInfo("John"); // існує
showUserInfo("Bob");  // не існує


console.log("\n=== Завдання 9: текст -> масив букв ===");

function toLetters(str) {
    return [...str]; // або str.split("")
}

console.log(toLetters("Hello"));

console.log("\n=== Завдання 10: реверс слова ===");

function reverseWord(word) {
    return word.split("").reverse().join("");
}

console.log(reverseWord("JavaScript"));


console.log("\n=== Завдання 11: перевірка .js файлу ===");

function isJS(filename) {
    return filename.endsWith(".js");
}

console.log("test.js ->", isJS("test.js"));
console.log("image.png ->", isJS("image.png"));


console.log("\n=== Завдання 12: речення -> масив слів ===");

function sentenceToWords(sentence) {
    return sentence.split(" ");
}

console.log(sentenceToWords("Hello world this is JS"));


console.log("\n=== Завдання 13: заміна слова у тексті ===");

function replaceWord(text, oldWord, newWord) {
    return text.replace(oldWord, newWord);
}

console.log(replaceWord("Hello world", "world", "brother"));
console.log(replaceWord("I like JS. JS is cool.", "JS", "JavaScript"));
