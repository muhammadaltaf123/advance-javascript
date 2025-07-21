// 1) Check Even or Odd
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2) Voting Eligibility
let age = 17;
console.log(age >= 18 ? "Eligible to vote" : "Not eligible");

// 3) Print 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4) Even numbers between 1 to 20 using while loop
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// 5) Reverse a string using for loop
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// 6) Function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// 7) Factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

// 8) Palindrome check
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));

// 9) Create student object
let student = {
    name: "Ali",
    rollNo: 101,
    marks: 85,
    isPassed: true
};

// 10) Access properties
console.log(student.name);
console.log(student["marks"]);

// 11) Add method to object
student.sayHello = function () {
    console.log(`Hello, I am ${this.name}`);
};
student.sayHello();

// 12) Print object keys and values
function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
printObject(student);

// 13) Array of fruits
let fruits = ["apple", "mango", "banana"];

// 14) Add new fruit
fruits.push("orange");

// 15) Remove last fruit
fruits.pop();

// 16) Check if banana is in array
console.log(fruits.includes("banana"));

// 17) Multiply array values by 2
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled);

// 18) Ages 18 or older
let ages = [15, 22, 17, 19];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// 19) Find first number > 10
let numbers = [5, 8, 12, 3];
let result = numbers.find(num => num > 10);
console.log(result);

// 20) Print names using forEach
let names = ["Ali", "Zara", "Umar"];
names.forEach(name => console.log(name));

// 21) Map student names
const students = [
    { name: "Ali", marks: 80 },
    { name: "Zara", marks: 95 },
    { name: "Umar", marks: 45 }
];
let namesList = students.map(s => s.name);
console.log(namesList);

// 22) Filter students > 50
let passed = students.filter(s => s.marks > 50);
console.log(passed);

// 23) Find Zara
let zara = students.find(s => s.name === "Zara");
console.log(zara);

// 24) Print each student name and marks
students.forEach(s => {
    console.log(`${s.name}: ${s.marks}`);
});

// 25) Square numbers
let arr = [2, 4, 6, 8];
let squared = arr.map(n => n * n);
console.log(squared);

// 26) Display each name
let people = ["Ali", "Zara", "Umar", "Ahmed"];
people.forEach(name => console.log(name));

// 27) Ages > 18
let agesList = [12, 25, 17, 20, 16, 30];
let above18 = agesList.filter(age => age > 18);
console.log(above18);

// 28) Check if apple exists
let fruitsArr = ["banana", "mango", "grapes", "apple"];
console.log(fruitsArr.includes("apple"));

// 29) Find student > 90 marks
let resultStudent = [
    { name: "Ali", marks: 75 },
    { name: "Zara", marks: 92 },
    { name: "Umar", marks: 85 }
].find(s => s.marks > 90);
console.log(resultStudent);

// 30) Total sum
let total = [200, 150, 300, 100].reduce((sum, val) => sum + val, 0);
console.log(total);

// 31) Return usernames
let users = [
    { id: 1, username: "ali123" },
    { id: 2, username: "zara88" },
    { id: 3, username: "umar_01" }
];
let usernames = users.map(u => u.username);
console.log(usernames);

// 32) Odd numbers only
let allNums = [1, 2, 3, 4, 5, 6];
let odds = allNums.filter(n => n % 2 !== 0);
console.log(odds);

// 33) Count vowels in "javascript"
let text = "javascript";
let vowels = text.match(/[aeiou]/gi);
console.log(vowels ? vowels.length : 0);

// 34) Task status
let tasks = [
    { task: "Assignment", completed: true },
    { task: "Homework", completed: false }
];
tasks.forEach(t => {
    console.log(`Task: ${t.task} - Status: ${t.completed ? "Completed" : "Incomplete"}`);
});

// 35) Add "status": "active" to employees
let employees = [
    { name: "Ali" },
    { name: "Zara" }
];
let updated = employees.map(e => ({ ...e, status: "active" }));
console.log(updated);
