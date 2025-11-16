// Using spread operator to copy an array
const array1 = [1, 2, 3];
const array2 = [...array1];

console.log(array2); // [1, 2, 3]
console.log(array1 === array2); // false

array2.push(4);
console.log("array1:", array1); // [1, 2, 3]
console.log("array2:", array2); // [1, 2, 3, 4]

// Using spread operator to combine arrays
const sum = (...numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

const result = sum(1, 2, 3, 4);
console.log("result:", result); // 10
