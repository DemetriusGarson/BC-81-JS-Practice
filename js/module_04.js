// ! ==============MODULE_4 TASK_1

//* Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';

// user.mood = 'skydiving';

// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ! ==============MODULE_4 TASK_2

// * Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function calculateAverageSalaries(salaries) {
//   let totalSum = 0;
//   const salariesArray = Object.values(salaries);
//   if (salariesArray.length === 0) {
//     return 0;
//   }
//   for (const salary of salariesArray) {
//     totalSum += salary;
//   }
//   return totalSum / salariesArray.length;
// }
// console.log(calculateAverageSalaries(salaries));

// ! ==============MODULE_4 TASK_3

//* Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a; //undefiend
//     this.b = b; //undefiend
//   },
//   exist() {
//     return typeof this.a === 'number' && typeof this.b === 'number';
//   },
//   sum() {
//     if (!this.exist()) {
//       return 'No such propeties';
//     }
//     return this.a + this.b;
//   },
//   mult() {
//     if (!this.exist()) {
//       return 'No such propeties';
//     }
//     return this.a * this.b;
//   },
// };

// console.log('c' in calculator);
// calculator.exist();
// console.log(calculator);

// calculator.read(2, 4);
// console.log(calculator.sum());
// console.log(calculator.mult());

// ! ==============MODULE_4 TASK_4

//* Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   for (let fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calcTotalPrice(fruits, 'Банан'));
