const persons = [
    { name: "Korchuk", age: 19, city: "Lanivtsi" },
    { name: "Andriy", age: 19, city: "Lanivtsi" },
    { name: "Max", age: 19, city: "Wroclaw" },
    { name: "Sofia", age: 25, city: "Lviv" },
    { name: "Nikita", age: 21, city: "Kyiv" }
];

persons.groupName = "A";
persons.teacher = "Joan Doe";
persons.year = "2023";


console.log("=== for ===");
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}

console.log("=== for...of ===");
for (const p of persons) {
    console.log(p);
}

console.log("=== for...in (властивості масиву) ===");
for (const key in persons) {
    console.log(key, persons[key]);
}