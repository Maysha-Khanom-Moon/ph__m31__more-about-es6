const nums = [4, 5, 7, 1, 2, 66];
const total = nums.reduce((previous, current) => previous + current, 0)

const subtract = nums.reduce((first, current) => first - current);

console.log(total);
console.log(subtract);