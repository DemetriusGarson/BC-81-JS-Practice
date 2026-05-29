// ! ==============MODULE_3 TASK_1
//* Дано речення, порахувати кількість слів

// console.log(qauntityWords('Дано речення, порахувати кількість слів'));

// function qauntityWords(userString) {
//   const wordsArray = userString.split(' ');
//   return wordsArray.length;
// }

// ! ==============MODULE_3 TASK_2
//* Напиши функцію unique(arr), яка повертає новий масив без дублікатів. Наприклад: [1, 2, 2, 3, 3, 3] → [1, 2, 3].

// console.log(unique([1, 2, 2, 3, 3, 3]));
// function unique(array) {
//   const uniqeItems = [];

//   for (const item of array) {
//     if (!uniqeItems.includes(item)) {
//       uniqeItems.push(item);
//     }
//   }
//   return uniqeItems;
// }

//! мой вариант
// console.log(unique([1, 2, 2, 3, 3, 3, 4, 1, 2, 3]));
// function unique(array) {
//   const copyArray = array.slice();
//   const uniqueArray = [];

//   uniqueArray[0] = array[0];
//   let counter = 0;

//   for (let i = 1; i < array.length; i++) {
//     counter = 0;
//     for (let k = 0; k < uniqueArray.length; k++) {
//       if (array[i] === uniqueArray[k]) {
//         counter += 1;
//       }
//     }
//     if (counter === 0) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray;
// }

// ! ==============MODULE_3 TASK_3
//* Напиши функцію maxValue(arr), яка повертає найбільше число в масиві без використання Math.max.

// ! ==============MODULE_3 TASK_4
//* Напиши функцію groupByLength(words), яка приймає масив слів і повертає рядок де слова згруповані за довжиною. Наприклад: ["cat", "hi", "dog", "me"] → "2: hi, me | 3: cat, dog".

// function groupByLength(words) {
//     for
// }

// ! ==============MODULE_3 TASK_5
//* / Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// checkLogin(logins);
// function checkLogin(array) {
//   const userName = prompt('Enter your name');
//   if (name === '') {
//     alert('You dont enter name');
//     return;
//   }
//   if (name === null) {
//     alert('Cancel');
//     return;
//   }
//   for (let i = 0; i > array > length; i++) {
//     if (userName === array[i]) {
//       alert(`Welcome, ${userName}!`);
//       return;
//     } else {
//       alert('User not found');
//       return;
//     }
//   }
// }

// ! ==============MODULE_3 TASK_6
//* Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumTwoElements(someArr));

// function sumTwoElements(functionArray) {
//   const resultArray = [];
//   for (let i = 0; i < functionArray.length - 1; i++) {
//     resultArray.push(functionArray[i] + functionArray[i + 1]);
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_6
//* Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
// //   console.log(arguments);
// //   const argArray = Array.from(arguments);
// //   console.log(argArray);
//     console.log(args);
//       let argSum = 0;
//       let count = 0;
//     for (const arg of args) {
//       if (typeof arg === 'number') {
//           argSum += arg;
//           count += 1;
//         }
//     }
//     return argSum / count;
// }
// console.log(caclculateAverage(5, 10, 15, 'Hello'));

// ! ==============MODULE_3 TASK_6
//* Напиши функцію intersection(arr1, arr2), яка повертає масив елементів які є в обох масивах. Наприклад: [1, 2, 3] і [2, 3, 4] → [2, 3].

// console.log(intersection([1, 2, 3], [2, 3, 4]));
// function intersection(arr1, arr2) {
//   const resultArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let k = 0; k < arr2.length; k++) {
//       if (arr2[k] === arr1[i]) {
//         resultArray.push(arr2[k]);
//       }
//     }
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_7
//* Напиши функцію getOdd(arr), яка повертає новий масив тільки з непарними числами.

// console.log(getOdd([1, 2, 3, 10, 50, 49]));

// function getOdd(numbers) {
//   const resultArray = [];
//   for (const number of numbers) {
//     if (number % 2 !== 0) {
//       resultArray.push(number);
//     }
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_8
//* Напиши функцію multiplyAll(arr, n), яка повертає новий масив де кожен елемент помножений на n.

// console.log(multiplyAll([1, 2, 3, 10, 50, 49], 3));

// function multiplyAll(numbers, multiplayer) {
//   const resultArray = [];
//   for (const number of numbers) {
//     resultArray.push(number * multiplayer);
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_9
//* Напиши функцію moveTo(arr, value, position), яка переміщує всі входження value або на початок ("start") або в кінець ("end") масиву не змінюючи порядок решти елементів.
// ! ??
// console.log(moveTo([1, 2, 3, 10, 3, 50, 49], 3, 'start'));

// function moveTo(arr, value, position) {
//   const resultArray = [];
//   let index = arr.indexOf(value);

//   if (position === 'start') {
//     resultArray.push(
//       arr[arr.indexOf(value)],
//       ...arr.slice(0, arr.indexOf(value)),
//       ...arr.slice(arr.indexOf(value) + 1)
//     );
//   }
//   if (position === 'end') {
//     resultArray.push(
//       ...arr.slice(0, arr.indexOf(value)),
//       ...arr.slice(arr.indexOf(value) + 1),
//       arr[arr.indexOf(value)]
//     );
//   }

//   return resultArray;
// }
// variant 2
// function moveTo(arr, value, position) {
//   let result = [];

//   if (position === 'start') {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) {
//         result.push(arr[i]);
//       }
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== value) {
//         result.push(arr[i]);
//       }
//     }
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== value) {
//         result.push(arr[i]);
//       }
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) {
//         result.push(arr[i]);
//       }
//     }
//   }

//   return result;
// }
//  variant 3
// function moveTo(arr, value, position) {
//   const targets = [];
//   const otherElements = [];

//   for (const item of arr) {
//     if (item === value) {
//       targets.push(item);
//     } else {
//       otherElements.push(item);
//     }
//   }

//   if (position === 'start') {
//     // return targets.concat(otherElements);
//     return [...targets, ...otherElements];
//   }
//   if (position === 'end') {
//     return otherElements.concat(targets);
//   }
// }
// console.log(moveTo(['a', 'b', 'a', 'c'], 'a', 'end'));
// console.log(moveTo(['a', 'b', 'a', 'c'], 'c', 'start'));

// ! ==============MODULE_3 TASK_10
// * Напиши функцію boardGame(board, moves), яка симулює просту гру. board — масив рядків де "X" — стіна, " " — порожньо, "E" — вихід. moves — масив напрямків "left", "right". Гравець починає з індексу 0. Повертає "Exit" якщо гравець дійшов до виходу, "Wall" якщо врізався в стіну, "Out" якщо вийшов за межі масиву, "Stuck" якщо пройшов всі ходи і не досяг виходу.

// const board = [' ', ' ', 'E', ' ', 'X'];
// const moves = ['right', 'right', 'right', 'right', 'right'];
// console.log(boardGame(board, moves));

// function boardGame(board, moves) {
//   let movementIndex = 0;

//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i] === 'right') {
//       movementIndex += 1;
//     } else {
//       movementIndex -= 1;
//     }
//   }

//   if (movementIndex > board.length - 1 || movementIndex < 0) {
//     return 'Out';
//   }

//   if (board[movementIndex] === 'X') {
//     return 'Wall';
//   }

//   if (board[movementIndex] === 'E') {
//     return 'Exit';
//   }
//   return 'Stuck';
// }

// ! ==============MODULE_3 TASK_11
//* Напиши функцію sumByIndex(arr1, arr2), яка повертає новий масив де кожен елемент — сума елементів з однаковим індексом. Якщо масиви різної довжини — для відсутніх елементів використовуй 0. Наприклад: [1,2,3] і [4,5] → [5,7,3].

// console.log(sumByIndex([1, 2, 3], [4, 5]));
// function sumByIndex(arr1, arr2) {
//   const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
//   const resultArray = [];
//   for (let i = 0; i < maxLength; i++) {
//     let a = arr1[i] !== undefined ? arr1[i] : 0;
//     let b = arr2[i] !== undefined ? arr2[i] : 0;
//     resultArray.push(a + b);
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_12
//*Напиши функцію replaceNegative(arr), яка замінює всі від'ємні числа на 0 і повертає новий масив.

// console.log(replaceNegative([1, -1, 2, 3, -4]));
// function replaceNegative(numbers) {
//   const resultArray = [];
//   for (let number of numbers) {
//     if (number < 0) {
//       resultArray.push(0);
//     } else {
//       resultArray.push(number);
//     }
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_13
//* Напиши функцію everyOther(arr), яка повертає кожен другий елемент масиву починаючи з першого. Наприклад: [1,2,3,4,5] → [1,3,5].

// console.log(everyOther([1, 2, 3, 4, 5]));
// function everyOther(arr) {
//   const resultArray = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     resultArray.push(arr[i]);
//   }
//   return resultArray;
// }

// ! ==============MODULE_3 TASK_14
//* Напиши функцію splitByCondition(arr), яка розбиває масив чисел на два масиви: перший з парними, другий з непарними. Повертає масив з двох масивів.

// console.log(splitByCondition([1, 2, 3, 4, 5]));

// function splitByCondition(arr) {
//   const evenArray = [];
//   const oddArray = [];
//   const resultArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArray.push(arr[i]);
//     } else {
//       oddArray.push(arr[i]);
//     }
//   }
//   resultArray.push(evenArray.slice(), oddArray.slice());
//   return resultArray;
// }
