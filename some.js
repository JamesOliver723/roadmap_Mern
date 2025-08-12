// Generate a random number between 0 and 1
const generateRandomNumber = () => Math.random()

// Get the current timestamp as a Date object
const getCurrentDate = () => new Date()

// Values for equality comparison
const numberValue = 10
const stringValue = '10'

// Loose vs. strict equality
const isLooselyEqual = numberValue == stringValue   // true
const isStrictlyEqual = numberValue === stringValue // false

console.log('Loose equality:', isLooselyEqual)
console.log('Strict equality:', isStrictlyEqual)

// Example usage
console.log('Random Number:', generateRandomNumber())
console.log('Current Date:', getCurrentDate())
