// Simple variables
export let welcome: string = "Hallo Welt";
export let pi: number = 3.14;
export let isCool: boolean = true;

// Simple Arrays
export let days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

// Enums
enum Day {
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
}
export let dayOfWeek: Day = Day.Tuesday;

// Objects
interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}
export let trainer: Person = {
    firstName: "Andreas",
    lastName: "Kasch",
    age: 34,
};
export let someone: Person = {
    firstName: "Lorem",
    lastName: "Ipsum",
};

// complex Arrays
export let persons: Person[] = [trainer, someone];

// simple function
export function add(a: number, b: number): number {
    return a + b;
}
export let sum: number = add(1, 2);

// function with different return values (union type)
type NumOrNull = number | null;
export function divide(a: number, b: number): NumOrNull {
    if (b === 0) return null;
    return a / b;
}
export let quotient: NumOrNull = divide(6, 2);

// function with no return
export function log(message: string): void {
    console.log(message);
}

// classes
export class Actor implements Person {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge(): number {
        return this.age;
    }

    setAge(newAge: number): void {
        this.age = newAge;
    }
}

export let rowan = new Actor("Rowan", "Atkinson", 68);
persons.push(rowan);

// generic class
type Item<T> = { item: T; priority: number };
export class PriorityQueue<T> {
    #queuedItems: Item<T>[] = [];

    addItem(item: T, priority: number = 0): void {
        let insertBefore = this.#queuedItems.findIndex(
            (queuedItem: Item<T>): boolean => queuedItem.priority < priority
        );
        insertBefore = Math.max(insertBefore, 0);
        this.#queuedItems.splice(insertBefore, 0, { item, priority });
    }

    next(): T | null {
        if (this.#queuedItems.length) {
            const queuedItem = this.#queuedItems.shift();
            return queuedItem!.item;
        }

        return null;
    }
}

export let todoQueue = new PriorityQueue<string>();
todoQueue.addItem("Wash dishes", 0);
todoQueue.addItem("Prepare lunch", 10);
todoQueue.addItem("Eat lunch", 10);
todoQueue.addItem("Practice coding", 999);

type ShoppingItem = { product: string; amount: number };
export let shoppingList = new PriorityQueue<ShoppingItem>();
shoppingList.addItem({ product: "Apples", amount: 5 }, 5);
shoppingList.addItem({ product: "Pears", amount: 2 }, 5);
shoppingList.addItem({ product: "Bananas", amount: 50 }, 10);
shoppingList.addItem({ product: "Toilet Paper", amount: 100 }, 999);
