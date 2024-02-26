// simple
const nums = [4, 5, 2, 8, 10];

const doubled = [];
for (const i of nums) {
    doubled.push(i*2);
}
console.log(doubled);


/**
 * ------- map --------
 * ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
 */
const add = num => {
    console.log('num now:', num);
    return num + 5;
}

const result = nums.map(add);
console.log(result);


const doubleResult = result.map(num => num * 2);
console.log(doubleResult);