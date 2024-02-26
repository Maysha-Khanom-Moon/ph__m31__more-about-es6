const nums = [1, 5, 6, 4, 15];


/**
 * ---- forEach ----
 * ==> one kind of map, but don't return any thing
 */
const result = nums.forEach(n => console.log(n))
console.log(result); // undefined


/**
 * ----- filter ------
 * ==> select elements based on a condition and returns an array with the elements that fulfilled the condition
 */
const players = [75, 65, 67, 72, 55, 59, 72, 88];
const selected = players.filter(p => p % 2 === 0);
console.log(selected);


/**
 * ----- find -----
 * ==> works as like filter. But just returns 1st getting element
 * ==> if not founded then undefined
 */

const findSelected = players.find(n => n % 2 === 0);
console.log(findSelected);