// Simple variables
export let welcome = "Hallo Welt";
export let pi = 3.14;
export let isCool = true;
// Simple Arrays
export let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
// Enums
var Day;
(function (Day) {
    Day[(Day["Monday"] = 0)] = "Monday";
    Day[(Day["Tuesday"] = 1)] = "Tuesday";
    Day[(Day["Wednesday"] = 2)] = "Wednesday";
    Day[(Day["Thursday"] = 3)] = "Thursday";
    Day[(Day["Friday"] = 4)] = "Friday";
    Day[(Day["Saturday"] = 5)] = "Saturday";
    Day[(Day["Sunday"] = 6)] = "Sunday";
})(Day || (Day = {}));
export let dayOfWeek = Day.Tuesday;
export let trainer = {
    firstName: "Andreas",
    lastName: "Kasch",
    age: 34,
};
export let someone = {
    firstName: "Lorem",
    lastName: "Ipsum",
};
// complex Arrays
export let persons = [trainer, someone];
// simple function
export function add(a, b) {
    return a + b;
}
export let sum = add(1, 2);
export function divide(a, b) {
    if (b === 0) return null;
    return a / b;
}
export let quotient = divide(6, 2);
// function with no return
export function log(message) {
    console.log(message);
}
// classes
export class Actor {
    firstName = "";
    lastName = "";
    age = 0;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
export let rowan = new Actor("Rowan", "Atkinson", 68);
persons.push(rowan);
export class PriorityQueue {
    #queuedItems = [];
    addItem(item, priority = 0) {
        let insertBefore = this.#queuedItems.findIndex(
            (queuedItem) => queuedItem.priority < priority
        );
        insertBefore = Math.max(insertBefore, 0);
        this.#queuedItems.splice(insertBefore, 0, { item, priority });
    }
    next() {
        if (this.#queuedItems.length) {
            const queuedItem = this.#queuedItems.shift();
            return queuedItem.item;
        }
        return null;
    }
}
export let todoQueue = new PriorityQueue();
todoQueue.addItem("Wash dishes", 0);
todoQueue.addItem("Prepare lunch", 10);
todoQueue.addItem("Eat lunch", 10);
todoQueue.addItem("Practice coding", 999);
export let shoppingList = new PriorityQueue();
shoppingList.addItem({ product: "Apples", amount: 5 }, 5);
shoppingList.addItem({ product: "Pears", amount: 2 }, 5);
shoppingList.addItem({ product: "Bananas", amount: 50 }, 10);
shoppingList.addItem({ product: "Toilet Paper", amount: 100 }, 999);
