// 1 - printGreeting

function printGreeting(name) {
  return `Mulder, it's ${name}`
}
// console.log(printGreeting('Scully'))

// 2- reverseWordOrder

function reverseWordOrder(string) {
  return string.split(' ').reverse().join(' ')
}
// console.log(reverseWordOrder("me is it Mulder"))
// console.log(reverseWordOrder("Sure Fine Whatever"))

// 3 - calculate

function calculate(num1, num2, operation) {
  if (operation === 'add') {
    return num1 + num2
  }
  if (operation === 'sub') {
    return num1 - num2
  }
  if (operation === 'mult') {
    return num1 * num2
  }
  if (operation === 'div') {
    return num1 / num2
  }
  if (operation === 'exp') {
    return num1 ** num2
  }
}
// console.log(calculate(4, 3, "add"))
// console.log(calculate(4, 3, "sub"))
// console.log(calculate(4, 3, "mult"))
// console.log(calculate(4, 2, "div"))
// console.log(calculate(4, 3, "exp"))

// 4 - printConsecutives


// 5 - letterReverse


// 6 - calculateCube


// 7 - isAVowel


// 8 - getTwoLengths


// 9 - getMultipleLengths


// 10 - maxOfThree


// 11 - printLongestWord


// 12 - transmogrify


// 13 - Project Euler Problem 2


// 14 - A Needle in the Haystack


// 15 - Sum the Positive


