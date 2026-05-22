// ! ==============TASK 1

// Створи змінну з твоїм іменем, віком і чи є у тебе домашній улюбленець (true/false). Виведи всі три в консоль.

// const name = "Dmytro";

// const age = 34;

// const pet = false;

// console.log(name, age, pet);

// ! ==============TASK 2

// Створи змінну price зі значенням 150 і змінну discount зі значенням 20. Порахуй фінальну ціну і виведи результат.

// const price = 270;

// const discount = 5;

// const discauntValue = (price * discount) / 100;

// const totalPrice = price - discauntValue;

// console.log(totalPrice);

// ! ==============TASK 3

// Створи змінну з твоїм повним іменем. Виведи кількість символів у ньому.

// const fullName = 'Dmytro Havrysh';

// console.log(fullName.length);

// ! ==============TASK 4

//!Є рядок "  Привіт, світ!  ". Видали пробіли на початку і в кінці та виведи результат.

// const stringInput = '  Привіт, світ!  ';

// const stringOutput = stringInput.trim();

// console.log(stringOutput);

// ! ==============TASK 5

//! Створи змінну password = "myPass123".Перевір чи містить вона цифру "1" і чи починається з "my".Виведи обидва результати.

// const pasword = 'myPass123';

// const hasOne = pasword.includes('1');

// console.log(hasOne);

// const startsWithMy = pasword.startsWith('my');

// console.log(startsWithMy);

// const endsWith123 = pasword.endsWith('123');

// console.log(endsWith123);
// ! ==============PART 2 ==========================

// ! ==============TASK 6
//*Напиши функцію isLongPassword(password), яка повертає true якщо пароль довший за 8 символів.

// function isLongPassword(password) {
//   if (password.length > 8) {
//     return true;
//   }

//   return 'Пароль менший за 8 cимволiв';
// }

// const password = 123456;

// console.log(isLongPassword(password));
// ! ==============TASK 7
//* Напиши функцію getInitials(firstName, lastName), яка повертає ініціали. Наприклад: "Іван Франко" → "І.Ф.".

// function getInitials(firstName = '', lastName) {
//   const firstNameLetter = firstName[0];

//   const lastNameLetter = lastName[0];

//   return `${firstNameLetter}.${lastNameLetter}.`;
// }

// console.log(getInitials('Дмитро', 'Гавриш'));

// ! ==============TASK 8
// *Напиши функцію truncate(str, maxLength), яка обрізає рядок до maxLength символів і додає "..." в кінці якщо рядок був довшим.

// function truncate(str, maxLength) {
//   if (str.length > maxLength) {
//     return `${str.slice(0, maxLength)}...`;
//   }
//   return str;
// }
// console.log(truncate('яка обрізає рядок до maxLength', 5));

// ! ==============TASK 9
//* Напиши функцію trimAndLower(str), яка прибирає пробіли на початку і в кінці рядка та переводить його в нижній регістр.

// function trimAndLower(str = '') {
//   return str.trim().toLowerCase();

//   const trimStr = str.trim();

//   const toLowerCaseStr = trimStr.toLowerCase();

//   return toLowerCaseStr;
// }

// console.log(trimAndLower('   44ER3434FDFEFGGGFGFGFGF   '));

// ! ==============TASK 10
//* Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);

//   const modifiedHours = String(hours).padStart(2, 0);

//   const minutes = totalMinutes % 60;

//   const modifiedMinutes = String(minutes).padStart(2, 0);

//   return `${modifiedHours}:${modifiedMinutes}`;
// }

// const userValue = Number(prompt('Введите количество минут'));
// console.log(formatTime(userValue));
