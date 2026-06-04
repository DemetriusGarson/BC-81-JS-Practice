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

// ! ==============MODULE_4 TASK_5

//* Створи масив, у який потраплять тільки ті товари, в назві яких є слово "iPhone".
// const products = [
//   { name: 'Samsung J5 2017', screen: 5.2, price: 5400, weight: 160 },
//   { name: 'iPhone X', screen: 5.8, price: 25000, weight: 170 },
//   { name: 'Xiaomi Mi 4', screen: 5.5, price: 4999, weight: 150 },
//   { name: 'Nokia 3310 2018', screen: 2.4, price: 999, weight: 60 },
//   { name: 'iPhone 7', screen: 4.7, price: 9999, weight: 140 },
// ];

// function productFinder(products, needProduct) {
//   const findArray = [];
//   for (const product of products) {
//     if (product.name.includes(needProduct)) {
//       findArray.push(product);
//     }
//   }
//   return findArray;
// }

// console.log(productFinder(products, 'iPhone'));

// ! ==============MODULE_4 TASK_6

//* Кошик: додати товар, порахувати суму, знайти товар
// Дано
// const cart = {
//   owner: 'Anna',
//   items: [
//     { name: 'phone', price: 12000, quantity: 1 },
//     { name: 'case', price: 500, quantity: 2 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addItem(product) {
//     this.items.push(product);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const item of this.items) {
//       totalPrice += item.price * item.quantity;
//     }
//     return totalPrice;
//   },
//   findItem(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         return item;
//       }
//       return null;
//     }
//   },
// };

// console.log(cart.getTotalPrice());

// console.log(cart.findItem('case'));

// Потрібно

// Додати в об’єкт cart методи:

// getItems()
// має повертати масив товарів

// addItem(product)
// має додавати новий товар у items

// getTotalPrice()
// має повертати загальну суму з урахуванням price * quantity

// findItem(productName)
// має повертати об’єкт товару з таким ім’ям або null, якщо товар не знайдено

// ! ==============MODULE_4 TASK_7

// Команда розробників: сума зарплат і додавання нового учасника
// Допиши методи:

// getTotalSalary() має повертати суму зарплат усіх учасників
// addMember(newMember) має додавати нового учасника в масив members
// checkUserAge(); коли цей метод выкликается для коджного участника команди додается поле isAdult в залежности вид того чи вказанний його вик(поле age)

// const team = {
//   members: [
//     { name: 'Anna', role: 'designer', salary: 1500, age: 25 },
//     { name: 'John', role: 'developer', salary: 2500, age: 17 },
//     { name: 'Kate', role: 'manager', salary: 2000 },
//   ],
//   getTotalSalary() {
//     let totalSallary = 0;
//     for (const member of this.members) {
//       totalSallary += member.salary;
//     }
//     return totalSallary;
//   },
//   addMember(newMember) {
//     this.members.push(newMember);
//   },
//   checkUserAge() {
//     const newArray = [];

//     for (const member of this.members) {
//       if ('age' in member) {
//         if (member.age >= 18) {
//           newArray.push({ ...member, isAdult: true });
//         } else {
//           newArray.push({ ...member, isAdult: false });
//         }
//       } else {
//         newArray.push({ ...member });
//       }
//     }
//     return newArray;
//   },
// };

// console.log(team.getTotalSalary());

// team.addMember({ name: 'Mike', role: 'designer', salary: 1900, age: 37 });

// console.log(team.members);

// console.log(team.checkUserAge());
