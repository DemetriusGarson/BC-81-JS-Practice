// ! ==============MODULE_5 TASK_1
//* Напиши функцію groupBy(arr, key), яка групує масив обʼєктів за значенням вказаного ключа і повертає обʼєкт. Наприклад: groupBy(users, "city") → { Kyiv: [...], Lviv: [...] }.

// const groupBy = (arr, key) => {
//   const resultObject = {};

//   arr.forEach(user => {
//     const groupKey = user[key];
//     if (resultObject[groupKey] === undefined) {
//       resultObject[groupKey] = [];
//     }
//     resultObject[groupKey].push(user);
//   });
//   return resultObject;
// };

// const users = [
//   {
//     id: 1,
//     firstName: 'Іван',
//     lastName: 'Петренко',
//     age: 25,
//     city: 'Kyiv',
//     salary: 45000,
//   },
//   {
//     id: 2,
//     firstName: 'Марія',
//     lastName: 'Коваленко',
//     age: 17,
//     city: 'Lviv',
//     salary: 32000,
//   },
//   {
//     id: 3,
//     firstName: 'Олег',
//     lastName: 'Сидоренко',
//     age: 32,
//     city: 'Kyiv',
//     salary: 67000,
//   },
//   {
//     id: 4,
//     firstName: 'Анна',
//     lastName: 'Бондаренко',
//     age: 15,
//     city: 'Odesa',
//     salary: 28000,
//   },
//   {
//     id: 5,
//     firstName: 'Дмитро',
//     lastName: 'Мельник',
//     age: 28,
//     city: 'Lviv',
//     salary: 51000,
//   },
//   {
//     id: 6,
//     firstName: 'Юлія',
//     lastName: 'Шевченко',
//     age: 22,
//     city: 'Kyiv',
//     salary: 39000,
//   },
//   {
//     id: 7,
//     firstName: 'Максим',
//     lastName: 'Кравченко',
//     age: 16,
//     city: 'Odesa',
//     salary: 25000,
//   },
//   {
//     id: 8,
//     firstName: 'Ольга',
//     lastName: 'Лисенко',
//     age: 35,
//     city: 'Lviv',
//     salary: 72000,
//   },
// ];

// console.log(groupBy(users, 'city'));

//*variant 2

// function groupBy (usersArray, key) {

//   const uniqueGroupKeysValue = [];
//   for (const user of usersArray) {
//     const currentKeyValue = user[key];
//     if (!uniqueGroupKeysValue.includes(currentKeyValue)) {
//       uniqueGroupKeysValue.push(currentKeyValue);
//     }
//   }

//   const result = {};
//   for (const value of uniqueGroupKeysValue) {
//     result[value] = [];
//     for (const user of usersArray) {
//       if (value === user[key]) result[value].push(user);
//     }
//   }

//   return result;
// };

// ! ==============MODULE_5 TASK_2
//* Напиши функцію mapAndFilter(arr, mapFn, filterFn), яка спочатку застосовує mapFn до кожного елемента а потім фільтрує результат через filterFn.

const books = [
  {
    id: 1,
    title: 'Кобзар',
    author: 'Шевченко',
    genre: 'Poetry',
    price: 250,
    pages: 320,
  },
  {
    id: 2,
    title: 'Тіні забутих предків',
    author: 'Коцюбинський',
    genre: 'Novel',
    price: 180,
    pages: 156,
  },
  {
    id: 3,
    title: '1984',
    author: 'Orwell',
    genre: 'Dystopia',
    price: 320,
    pages: 328,
  },
  {
    id: 4,
    title: 'Чистий код',
    author: 'Martin',
    genre: 'Tech',
    price: 850,
    pages: 431,
  },
  {
    id: 5,
    title: 'Lesia Ukrainka',
    author: 'Ukrainka',
    genre: 'Poetry',
    price: 210,
    pages: 280,
  },
  {
    id: 6,
    title: 'JavaScript',
    author: 'Flanagan',
    genre: 'Tech',
    price: 1200,
    pages: 706,
  },
  {
    id: 7,
    title: 'Brave New World',
    author: 'Huxley',
    genre: 'Dystopia',
    price: 290,
    pages: 311,
  },
  {
    id: 8,
    title: 'Місто',
    author: 'Підмогильний',
    genre: 'Novel',
    price: 195,
    pages: 248,
  },
];

const movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    year: 2010,
    rating: 8.8,
    duration: 148,
  },
  {
    id: 2,
    title: 'The Godfather',
    genre: 'Crime',
    year: 1972,
    rating: 9.2,
    duration: 175,
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi',
    year: 2014,
    rating: 8.6,
    duration: 169,
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    genre: 'Crime',
    year: 1994,
    rating: 8.9,
    duration: 154,
  },
  {
    id: 5,
    title: 'The Matrix',
    genre: 'Sci-Fi',
    year: 1999,
    rating: 8.7,
    duration: 136,
  },
  {
    id: 6,
    title: 'Forrest Gump',
    genre: 'Drama',
    year: 1994,
    rating: 8.8,
    duration: 142,
  },
  {
    id: 7,
    title: 'The Dark Knight',
    genre: 'Action',
    year: 2008,
    rating: 9.0,
    duration: 152,
  },
  {
    id: 8,
    title: "Schindler's List",
    genre: 'Drama',
    year: 1993,
    rating: 9.0,
    duration: 195,
  },
];

// const mapAndFilter = (array, mapFn, filterFn) => {
//   //array = movies [], mapFn = titleToUpperCase; filterFn = filterByRating;
//   const mapped = array.map(mapFn);
//   const filtred = mapped.filter(filterFn);
//   return filtred;
// };

// const calculateAndAddTotalPrice = (book, index, arr) => {
//   const totalPrice = book.price * book.pages;
//   return { ...book, totalPrice };
// };

// const filterByPages = (book, index, books) => {
//   return book.pages >= 250;
// };

// const titleToUpperCase = movie => {
//   return { ...movie, title: movie.title.toUpperCase() };
// };

// const filterByRating = movie => {
//   return movie.rating < 9;
// };

//* variant 2

// const mapAndFilter = (array, mapFn, filterFn) =>
//   array.map(mapFn).filter(filterFn);

// const calculateAndAddTotalPrice = (book, index, arr) => ({
//   ...book,
//   totalPrice: book.price * book.pages,
// });

// const filterByPages = (book, index, books) => book.pages >= 250;

// const titleToUpperCase = movie => ({
//   ...movie,
//   title: movie.title.toUpperCase(),
// });

// const filterByRating = movie => movie.rating < 9;

// // console.log(mapAndFilter(books, calculateAndAddTotalPrice, filterByPages));

// console.log(mapAndFilter(movies, titleToUpperCase, filterByRating));

// console.log(movies);

// ! ==============MODULE_5 TASK_3
