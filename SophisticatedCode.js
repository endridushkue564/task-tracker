/* 
   Filename: SophisticatedCode.js
   Description: Complex and elaborate JavaScript code example
*/

// Importing external libraries
const lodash = require('lodash');
const moment = require('moment');
const axios = require('axios');
const express = require('express');

// Function to fetch data from a REST API
async function fetchData() {
   try {
      const response = await axios.get('https://api.example.com/data');
      return response.data;
   } catch (error) {
      throw new Error('Error fetching data from API');
   }
}

// Class definition for a Person
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   getDetails() {
      return `${this.name} is ${this.age} years old.`;
   }
}

// Function to calculate the factorial of a number
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

// Async function to perform some complex computations
async function complexComputation() {
   const data = await fetchData();
   const filteredData = lodash.filter(data, { active: true });
   const sortedData = lodash.sortBy(filteredData, 'timestamp');

   const sum = lodash.sumBy(sortedData, 'value');
   const average = lodash.meanBy(sortedData, 'value');

   console.log(`Sum: ${sum}`);
   console.log(`Average: ${average}`);
}

// Function to generate a random string of desired length
function generateRandomString(length) {
   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   let result = '';
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

// Express app setup
const app = express();

app.get('/', (req, res) => {
   res.send('Hello, this is a sophisticated code example!');
});

app.listen(3000, () => {
   console.log('Server started at http://localhost:3000');
});

// Execution starts here
const currentDate = moment().format('YYYY-MM-DD');
console.log(`Current Date: ${currentDate}`);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = lodash.map(numbers, (num) => num * 2);
console.log(`Doubled Numbers: ${doubledNumbers}`);

const john = new Person('John Doe', 30);
console.log(john.getDetails());

console.log(`Factorial of 5: ${factorial(5)}`);

complexComputation();

console.log(`Random String: ${generateRandomString(10)}`);
