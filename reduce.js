const nums = [4, 5, 7, 1, 2, 66];

/**
 * ==> initial value of previous: 0 / which we want to give
 * ==> then, current value will be: 1st element
 */
const total = nums.reduce((previous, current) => previous + current, 0)

/**
 * ==> initial value of previous: 1st element
 * ==> then, current value will be: 2nd element
 */
const subtract = nums.reduce((first, current) => current - 2);

console.log(total);
console.log(subtract);

const n = [];
const nnn = n.reduce((p, r) => p+4, 0);
console.log(nnn);