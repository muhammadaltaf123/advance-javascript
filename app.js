// 1. Unique Words Counter
const text = "JavaScript is great and JavaScript is powerful";
function countUniqueWords(str) {
    const words = str.toLowerCase().split(/\s+/);
    const result = {};
    for (let word of words) {
        result[word] = (result[word] || 0) + 1;
    }
    return result;
}
console.log("1. Unique Words Count:", countUniqueWords(text));

// 2. Group Students by Class
const students = [
    { name: "Ali", class: "10th" },
    { name: "ahad", class: "9th" },
    { name: "Ahmed", class: "10th" },
    { name: "kashif", class: "9th" }
];
function groupByClass(students) {
    return students.reduce((acc, student) => {
        const className = student.class;
        if (!acc[className]) acc[className] = [];
        acc[className].push(student.name);
        return acc;
    }, {});
}
console.log("2. Grouped Students:", groupByClass(students));

// 3. Filter Products by Price Range
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 20 },
    { name: "Phone", price: 500 },
];
function filterByPrice(products, min, max) {
    return products.filter(p => p.price >= min && p.price <= max);
}
console.log("3. Filtered Products:", filterByPrice(products, 100, 600));

// 4. Check Palindrome Using Function
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log("4. Is Palindrome (madam):", isPalindrome("madam"));

// 5. Flatten Array
const nestedArray = [1, [2, [3, 4]], 5];
function flatten(arr) {
    return arr.flat(Infinity);
}
console.log("5. Flattened Array:", flatten(nestedArray));

// 6. Total Salary Calculation (Using Reduce)
const employees = [
    { name: "Ali", salary: 1000 },
    { name: "yousuf", salary: 1500 },
    { name: "Ahmed", salary: 1200 },
];
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("6. Total Salary:", totalSalary);

// 10. Sum of All Even Numbers in Nested Array
const data = [1, 2, [4, 5, [6, 8]], 10];
function sumEvenNumbers(arr) {
    return arr.flat(Infinity)
        .filter(num => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
}
console.log("10. Sum of All Even Numbers:", sumEvenNumbers(data));

// 11. Rest Operator in Function
function average(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length ? sum / numbers.length : 0;
}
console.log("11. Average:", average(10, 20, 30));

// 12. Frequency Count with Spread
const arr = ['apple', 'banana', 'mango', 'orange', 'banana', 'apple'];
const frequency = [...arr].reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log("12. Frequency Count:", frequency);

// 13. Toggle Status
const tasks = [
    { id: 1, name: "Code", done: false },
    { id: 2, name: "Eat", done: true },
];
function toggleTaskStatus(tasks, id) {
    return tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
    );
}
console.log("13. Toggled Task:", toggleTaskStatus(tasks, 1));

// 14. Sort by Name Length
const names = ["Ali", "asif", "yousuf", "Usman"];
const sortedNames = names.sort((a, b) => a.length - b.length);
console.log("14. Sorted by Name Length:", sortedNames);
