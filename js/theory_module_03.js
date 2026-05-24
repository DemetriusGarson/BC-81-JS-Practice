//! ============ TEST 1
/* Проверка массивов */

let array1 = [1, 2, 3];
let array2 = array1;

console.log(`array1: ${array1}`);
console.log(`array2 = array1; array2: ${array2}`);
console.log(`array1 === array2: ${array1 === array2}`);

const array4 = [1, 2, 3];
console.log(`array4: ${array4}`);

array4[0] = 0;
console.log(`array4[0] = 0; array4: ${array4}`);
