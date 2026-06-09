// ! ==============MODULE_6 TASK_1

//* Створи об'єкт user з полями name, age і методом greet(), який повертає рядок 'Привіт, я Олексій'.

// const user = {
//   name: 'Олексій',
//   age: 25,

//   greet() {
//     return `Привет я ${this.name}`;
//   },
// };

// console.log(user.greet());

// ! ==============MODULE_6 TASK_2

//* Створи об'єкт counter з полем count: 0 і методом increment(), який збільшує count на 1. Виклич тричі — count має стати 3.

// const counter = {
//   count: 0,
//   increment() {
//     this.count += 1;
//   },
// };
// console.log(counter.count);
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.count);

// ! ==============MODULE_6 TASK_3

// Напиши функцію createCounter(step), яка приймає крок і повертає об'єкт з трьома методами:

// — increment() — збільшує внутрішній лічильник на step
// — decrement() — зменшує на step
// — getValue() — повертає поточне значення

// Початкове значення лічильника — 0. Лічильник має зберігатись у замиканні — не у властивості об'єкта.

// function createCounter(step) {
//   let count = 0;
//   return {
//     increment() {
//       count += step;
//     },
//     decrement() {
//       count -= step;
//     },
//     getValue() {
//       return count;
//     },
//   };
// }

// // Перевір так:
// const c1 = createCounter(1);
// console.log(c1);
// c1.increment();
// c1.increment();
// c1.increment();
// console.log(c1.getValue()); // 3

// const c2 = createCounter(5);
// c2.increment();
// c2.increment();
// c2.decrement();
// console.log(c2.getValue()); // 5

// // Важливо: c1 і c2 незалежні!
// console.log(c1.getValue()); // все ще 3

// console.log(c1 === c2);

// ! ==============MODULE_6 TASK_4

// Напиши функцію createFormatter(currency, locale), яка повертає функцію-форматер. Форматер приймає число і повертає відформатований рядок через Intl.NumberFormat.

// Параметри currency і locale мають зберігатись у замиканні — не передаватись у кожен виклик.

// Створи три форматери: для гривні (uk-UA, UAH), долара (en-US, USD) і євро (de-DE, EUR).

// function createFormatter(currency, locale) {
//   const formater = new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency,
//   });

//   //   console.log(formater);

//   return function (amount) {
//     return formater.format(amount);
//   };
// }

// // Перевір так:
// const formatUAH = createFormatter('UAH', 'uk-UA');
// const formatUSD = createFormatter('USD', 'en-US');
// const formatEUR = createFormatter('EUR', 'de-DE');

// console.log(formatUAH(1234567)); // '1 234 567,00 ₴'
// console.log(formatUSD(1234567)); // '$1,234,567.00'
// console.log(formatEUR(1234567)); // '1.234.567,00 €'

// // Всі три форматери незалежні:
// console.log(formatUAH(500)); // '500,00 ₴'
// console.log(formatUSD(500)); // '$500.00'

// ! ==============MODULE_6 TASK_5

// Напиши функцію createWallet(owner, initialBalance), яка повертає об'єкт з методами:

// — deposit(amount) — поповнити баланс. Якщо amount <= 0 — кинути помилку
// — withdraw(amount) — зняти кошти. Якщо не вистачає — кинути помилку
// — getBalance() — повернути поточний баланс
// — getHistory() — повернути масив транзакцій (кожна: type, amount, balanceAfter)

// Баланс і масив транзакцій мають бути приватними — недоступними ззовні через крапку.

// function createWallet(owner, initialBalance) {
//   let balance = initialBalance;
//   let historyArray = [];

//   return {
//     owner,
//     deposit(amount) {
//       if (amount <= 0) {
//         throw new Error(`Error: 'Сума має бути більше 0'`);
//       }
//       balance += amount;

//       historyArray.push({ type: 'deposit', amount, balanceAfter: balance });
//     },

//     withdraw(amount) {
//       if (amount <= 0) {
//         throw new Error(`Error: 'Сума має бути більше 0'`);
//       }
//       if (balance < amount) {
//         throw new Error('Error: Недостатньо коштів');
//       }

//       balance -= amount;

//       historyArray.push({ type: 'withdraw', amount, balanceAfter: balance });
//     },

//     getBalance() {
//       return balance;
//     },

//     getHistory() {
//       return structuredClone(historyArray);
//     },
//   };
// }

// // Перевір так:
// const wallet = createWallet('Анна', 1000);

// wallet.deposit(500);
// wallet.withdraw(200);
// wallet.deposit(100);

// console.log(wallet.getBalance()); // 1400

// console.log(wallet.getHistory());
// // [
// //   { type: 'deposit',  amount: 500, balanceAfter: 1500 },
// //   { type: 'withdraw', amount: 200, balanceAfter: 1300 },
// //   { type: 'deposit',  amount: 100, balanceAfter: 1400 },
// // ]

// console.log(wallet.balance); // undefined — приватне!
// console.log(wallet.transactions); // undefined — приватне!

// // Помилки:
// // wallet.withdraw(9999); // Error: 'Недостатньо коштів'
// // wallet.deposit(-50); // Error: 'Сума має бути більше 0'

// ! ==============MODULE_6 TASK_5

//* Створи клас User з полями name, email, role (default: 'user'). Додай метод greet() що повертає 'Привіт, я Анна'.

// class User {
//   // name;
//   // email;
//   // role = 'user';

//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//     this.role = params.role || 'user';
//     this.role = params.role;
//   }

//   greet() {
//     return `Привіт, я ${this.name}`;
//   }
// }

// const Anna = new User({ name: 'Anna' });

// console.log(Anna.greet());

// console.log(Anna.role);

// ! ==============MODULE_6 TASK_6

//* Клас Animal(name, sound) з методом speak(). Dog extends Animal, додає breed і fetch(). GoldenRetriever extends Dog, перевизначає speak() викликаючи super.speak().

// class Animal {
//   constructor(params) {
//     this.name = params.name;
//     this.sound = params.sound;
//   }

//   speak() {
//     return `${this.name} робе ${this.sound}`;
//   }
// }

// class Dog extends Animal {
//   constructor(params) {
//     super(params);
//     this.breed = params.breed;
//   }

//   fetch(item) {
//     return `${this.name} приносе ${item}`;
//   }
// }

// class GoldenRetriever extends Dog {
//   constructor(params) {
//     super(params);
//   }
//   speak() {
//     return '123';
//   }
// }

// const Marsel = new GoldenRetriever({
//   name: 'Marsel',
//   sound: 'гав',
//   breed: 'GoldenRetriever',
// });

// console.log(Marsel);
// console.log(Marsel.speak());

// ! ==============MODULE_6 TASK_7
//* Vehicle(brand, year) з методами start(), stop(), getInfo(). Car додає doors, fuelType. ElectricCar додає batteryCapacity, charge(), getRange(). Всі рівні перевизначають getInfo().

// class Vehicle {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//     this.isMoving = false;
//   }

//   start() {
//     this.isMoving = true;
//     return `${this.brand} почав руахится`;
//   }

//   stop() {
//     this.isMoving = false;
//     return `${this.brand} зупинився`;
//   }

//   getInfo() {
//     return `${this.brand} (${this.year}) -  ${this.isMoving ? 'рухается.' : 'стоiть'}`;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, year, doors = 4, fuelType = 'gasoline') {
//     super(brand, year);
//     this.doors = doors;
//     this.fuelType = fuelType;
//   }

//   getInfo() {
//     return `${super.getInfo()} дверей: ${this.doors}, тип палива ${this.fuelType} `;
//   }
// }

// class ElectricCar extends Car {
//   #chargeLevel = 100;
//   constructor(brand, year, doors = 4, batteryCapacity) {
//     super(brand, year, doors, 'electric');
//     this.batteryCapacity = batteryCapacity;
//   }

//   charge() {}

//   getRange() {}

//   getInfo() {
//     return `${super.getInfo()} об'ем батареi ${this.batteryCapacity}`;
//   }
// }

// const tesla = new ElectricCar('tesla', 2025, 4, 100);

// console.log(tesla);

// console.log(tesla.getInfo());

// console.log(tesla.start());

// console.log(tesla.getInfo());

// ! ==============MODULE_6 TASK_8

//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

//! variant 1
// class Notes {
//   static priority() {
//     return {
//       HIGH: high,
//       MID: mid,
//       LOW: low,
//     };
//   }

//   constructor(note) {
//     this.notes = [];
//   }

//   addNote(note) {
//     this.notes.push(note);
//   }
//   removeNote(text) {
//     return this.notes.filter(note => note.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     const index = this.notes.findInex(note => {
//       note.text === text;
//     });
//     this.notes[index].priority = newPriority;
//   }
// }

// const noteBook = new Notes();
// noteBook.addNote({ text: '1234', priority: 'high' });

// console.log(noteBook);

//! variant 2
// class Notes {
//   static Priority() {
//     return {
//       HIGH: 'high',
//       MEDIUM: 'medium',
//       LOW: 'low',
//     };
//   }
//   constructor() {
//     this.notes = [];
//   }
//   addNote(note) {
//     this.notes.push(note);
//   }
//   removeNote(text) {
//     // this.notes = this.notes.filter(note => {
//     //   return note.text !== text;
//     // });
//     const index = this.notes.findIndex(note => note.text === text);
//     if (index !== -1) {
//       this.notes.splice(index, 1);
//     }
//   }
//   updatePriority(text, newPriority) {
//     const index = this.notes.findIndex(note => note.text === text);
//     if (index !== -1) {
//       this.notes[index].priority = newPriority;
//     }
//   }
// }

// const notebook = new Notes();

// notebook.addNote({ text: 'js is THE web', priority: Notes.Priority().HIGH });
// notebook.updatePriority('js is THE web', Notes.Priority().LOW);
// console.log(notebook.notes);
// notebook.removeNote('js is THE web');
// console.log(notebook.notes);
