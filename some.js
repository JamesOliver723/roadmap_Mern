// Utility to generate a random number between 0 and 1
function generateRandomNumber() {
  return Math.random();
}

// Utility to return the current timestamp
function getCurrentDate() {
  return new Date();
}

// Comparison logic with strict equality (best practice)
const numberValue = 10;
const stringValue = '10';

const isLooselyEqual = numberValue == stringValue;   // true
const isStrictlyEqual = numberValue === stringValue; // false

console.log('Loose equality:', isLooselyEqual);
console.log('Strict equality:', isStrictlyEqual);

// Example usage
console.log('Random Number:', generateRandomNumber());
console.log('Current Date:', getCurrentDate());

