// ! ==============MODULE_2 TASK_1
//* Напиши функцію season(month), яка приймає номер місяця (1-12) і повертає пору року українською.

// let month = 3;

// let result = season(month);

// function season(month) {
//   if (month === 12 || (month <= 2 && month > 0)) {
//     return 'Зима';
//   } else if (month >= 3 && month <= 5) {
//     return 'Весна';
//   } else if (month >= 6 && month <= 8) {
//     return 'Лiто';
//   } else if (month >= 9 && month <= 11) {
//     return 'Осiнь';
//   } else {
//     return 'Ви ввели неправильний номер мiсяця';
//   }
// }
// console.log(`seson:${result}`);

// //

// result = season2(month);

// function season2(month) {
//   switch (month) {
//     case 12:
//     case 1:
//     case 2:
//       return 'Зима';
//     case 3:
//     case 4:
//     case 5:
//       return 'Весна';
//     case 6:
//     case 7:
//     case 8:
//       return 'Лiто';
//     case 9:
//     case 10:
//     case 11:
//       return 'Осiнь';
//     default:
//       return 'Ви ввели неправильний номер мiсяця';
//   }
// }
// console.log(`seson2:${result}`);

// ! ==============MODULE_2 TASK_2
//* Напиши функцію ticketPrice(age), яка повертає ціну квитка: діти до 6 — безкоштовно, від 6 до 18 — 50 грн, від 18 до 60 — 100 грн, від 60 — 70 грн.

// let price = 0;
// let age = 40;
// price = ticketPrice(age);

// function ticketPrice(age) {
//   if (age < 6) {
//     return (price = 0);
//   } else if (age >= 6 && age < 18) {
//     return (price = 50);
//   } else if (age >= 18 && age < 60) {
//     return (price = 100);
//   } else if (age >= 60) {
//     return (price = 70);
//   }
// }
// console.log(price);

// ! ==============MODULE_2 TASK_3
//* Напиши функцію formatGreeting(name, timeOfDay), яка повертає привітання залежно від часу доби: "morning" → "Добрий ранок, [name]!", "afternoon" → "Добрий день, [name]!", "evening" → "Добрий вечір, [name]!", інакше → "Привіт, [name]!".

// const userName = 'Dmytro';

// const timeOfDay = 'afternoon454';

// const result = formatGreeting(userName, timeOfDay);

// function formatGreeting(name, timeOfDay) {
//   switch (timeOfDay.toLowerCase()) {
//     case 'morning':
//       return `Добрий ранок, ${userName}!`;
//     case 'afternoon':
//       return `Добрий день, ${userName}!`;
//     case 'evening':
//       return `Добрий вечір, ${userName}!`;
//     default:
//       return `Hello ${userName}`;
//   }
// }

// console.log(result);

// ! ==============MODULE_2 TASK_4
//* Напиши функцію calculator(a, b, operator), яка виконує операцію +, -, * або / над двома числами. Якщо оператор невідомий — повертає "Невідомий оператор". Якщо ділення на нуль — повертає "Ділення на нуль".

// const firstNumber = 10;
// const secondNumber = 2;
// const operator = '/';
// const result = calculator(firstNumber, secondNumber, operator);

// function calculator(a, b, operator) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Ви передали не числа';
//   }
//   if (operator === '/' && b === 0) {
//     return 'Ділення на нуль';
//   }
//   if (operator === '+') {
//     return a + b;
//   } else if (operator === '-') {
//     return a - b;
//   } else if (operator === '*') {
//     return a * b;
//   } else if (operator === '/') {
//     return a / b;
//   } else {
//     return 'Невідомий оператор';
//   }
// }

// console.log(result);

// ! ==============MODULE_2 TASK_5
//* Напиши функцію gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked), яка повертає результат гри: "Dead" якщо hp гравця 0 або менше, "Victory" якщо hp ворога 0 або менше І гравець живий, "Locked" якщо двері замкнені І немає ключа І обидва живі, "Low Mana" якщо мана менше 10 І обидва живі І двері не замкнені або є ключ, "Continue" в інших випадках.

// const playerHP = 1;
// const enemyHP = 0;
// const playerMana = 10;
// const doorLocked = true;
// const hasKey = true;

// const result = gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked);

// function gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked) {
//   if (playerHP <= 0) {
//     return 'Dead';
//   }

//   if (enemyHP <= 0 && playerHP > 0) {
//     return 'Victory';
//   }

//   if (doorLocked && !hasKey && enemyHP > 0 && playerHP > 0) {
//     return 'Locked';
//   }

//   if (
//     playerMana < 10 &&
//     enemyHP > 0 &&
//     playerHP > 0 &&
//     (!doorLocked || hasKey)
//   ) {
//     return 'Low Mana';
//   }

//   return 'Continue';
// }

// console.log(result);

// ! ==============MODULE_2 TASK_6
//* Напиши функцію trafficLight(color, isEmergency, isPedestrianCrossing, timeOfDay), яка повертає дію водія: якщо є екстрена служба — "Pull over", якщо зелений І немає пішоходів — "Go", якщо жовтий АБО є пішоходи — "Slow down", якщо червоний — "Stop", якщо нічний час (22:00-06:00) І червоний І немає пішоходів — "Stop and check", інакше — "Unknown".

// console.log(trafficLight('green', false, false, 'night'));

// function trafficLight(color, isEmergency, isPedestrianCrossing, timeOfDay) {
//   if (isEmergency) {
//     return 'Pull over';
//   }

//   if (color === 'green' && !isPedestrianCrossing) {
//     return 'Go';
//   }

//   if (color === 'red') {
//     return 'Stop';
//   }

//   if (color === 'yellow' || isPedestrianCrossing) {
//     return 'Slow down';
//   }

//   if (timeOfDay === 'night' && color === 'red' && !isPedestrianCrossing) {
//     return 'Stop and check';
//   }

//   return 'Unknown';
// }

// ! ==============MODULE_2 TASK_7
//* / Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// const min = 1;
// const max = 5;
// const result = getNumbers(min, max);
// console.log(result);

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// ! ==============MODULE_2 TASK_8
//* Напиши функцію calculateAverage(a, b), яка приймає два числа і повертає їхнє середнє арифметичне. Додай перевірку: якщо хоча б один аргумент не є числом, повертай 'Помилка: введіть числа'.

// function calculateAverage(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Помилка: введіть числа';
//   }
//   return (a + b) / 2;
// }

// console.log(calculateAverage(2, 3));

// ! ==============MODULE_2 TASK_9
//*Напиши функцію countDown(n), яка повертає рядок з відліком від n до 0 через пробіл. Наприклад: countDown(5) → "5 4 3 2 1 0".

// console.log(countDown(5));

// function countDown(n) {
//   let countdownString = '';
//   for (let i = n; i >= 0; i--) {
//     countdownString += i + ' ';
//   }
//   return countdownString.trim();
// }

// ! ==============MODULE_2 TASK_10?
//* Напиши функцію longestWord(sentence), яка повертає найдовше слово в реченні.

// longestWord('яка повертає найдовше слово в реченні');

// function longestWord(sentence) {}

// ! ==============MODULE_2 TASK_10
//* Напиши функцію fizzbuzz(n), яка повертає рядок з числами від 1 до n де замість кратних 3 стоїть "Fizz", кратних 5 — "Buzz", кратних обом — "FizzBuzz".

// console.log(fizzbuzz(15));
// function fizzbuzz(n) {
//   let resultString = '';
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       resultString += 'FizzBuzz ';
//     } else if (i % 3 === 0) {
//       resultString += 'Fizz ';
//     } else if (i % 5 === 0) {
//       resultString += 'Buzz ';
//     } else {
//       resultString += i + ' ';
//     }
//   }
//   return resultString.trim();
// }

// ! ==============MODULE_2 TASK_11
//* Напиши функцію longestWord(sentence), яка повертає найдовше слово в реченні.

console.log(
  longestWord('яка повертає найдовше слово в реченніr4r543543543345')
);

function longestWord(sentence) {
  let longestWord = '';
  let currentWord = '';

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      currentWord += sentence[i];
    } else {
      if (currentWord.length >= longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = '';
    }
  }

  if (currentWord.length >= longestWord.length) {
    longestWord = currentWord;
  }

  return longestWord;
}

function longestWord(sentence) {
  const words = sentence.split(' ');

  let longestWord = '';

  for (const word of words) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
