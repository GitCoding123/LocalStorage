// console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setITem("key", "value");

window.localStorage.setItem("firstName", "Brian");
localStorage.setItem("lastName", "Gerkens");

const person = {
    fullName: "Brian Gerkens",
    location: "Florida",
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pineapple", "Mango", "Pawpaw"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// GET ITEM FROM LOCAL STORAGE
// console.log(localStorage.getItem("firstName"))

// REMOVE ITEM FROM LOCAL STORAGE
localStorage.removeItem("fruits");

// CLEAR LOCAL STORAGE
localStorage.clear();

localStorage.setItem("name", "Brian");
localStorage.setItem("age", "28");

console.log(localStorage.key(0));