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

//! ??
// console.log(unique([1, 2, 2, 3, 3, 3]));
// function unique(array) {
//     const copyArray = array.slice()
//     const uniqueArray = [];

//     // uniqueArray[0] = array[0]

//     for (let i = 0; i <= array.length; i++){
//         for(let k =)
//     }
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
