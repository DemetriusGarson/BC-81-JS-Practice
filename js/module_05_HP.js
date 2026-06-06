const orders = [
  {
    id: 'ORD-001',
    userId: 1,
    status: 'delivered',
    total: 62000,
    items: 1,
    createdAt: '2024-01-05',
    paymentMethod: 'card',
    isPaid: true,
    discount: 0,
    city: 'Kyiv',
    deliveryDays: 2,
  },
  {
    id: 'ORD-002',
    userId: 3,
    status: 'pending',
    total: 12500,
    items: 2,
    createdAt: '2024-01-18',
    paymentMethod: 'cod',
    isPaid: false,
    discount: 500,
    city: 'Lviv',
    deliveryDays: null,
  },
  {
    id: 'ORD-003',
    userId: 2,
    status: 'cancelled',
    total: 31000,
    items: 1,
    createdAt: '2024-01-22',
    paymentMethod: 'card',
    isPaid: false,
    discount: 1550,
    city: 'Kharkiv',
    deliveryDays: null,
  },
  {
    id: 'ORD-004',
    userId: 4,
    status: 'delivered',
    total: 45500,
    items: 3,
    createdAt: '2024-02-01',
    paymentMethod: 'card',
    isPaid: true,
    discount: 0,
    city: 'Kyiv',
    deliveryDays: 1,
  },
  {
    id: 'ORD-005',
    userId: 1,
    status: 'shipped',
    total: 3500,
    items: 1,
    createdAt: '2024-02-10',
    paymentMethod: 'wallet',
    isPaid: true,
    discount: 700,
    city: 'Kyiv',
    deliveryDays: null,
  },
  {
    id: 'ORD-006',
    userId: 5,
    status: 'delivered',
    total: 93000,
    items: 2,
    createdAt: '2024-02-14',
    paymentMethod: 'card',
    isPaid: true,
    discount: 2000,
    city: 'Odesa',
    deliveryDays: 3,
  },
  {
    id: 'ORD-007',
    userId: 2,
    status: 'pending',
    total: 7200,
    items: 1,
    createdAt: '2024-02-20',
    paymentMethod: 'cod',
    isPaid: false,
    discount: 0,
    city: 'Dnipro',
    deliveryDays: null,
  },
];

const tasks = [
  {
    id: 1,
    title: 'Налаштувати CI/CD pipeline',
    assignee: 'Олексій',
    priority: 'high',
    status: 'in-progress',
    storyPoints: 8,
    sprint: 3,
    tags: ['devops', 'automation'],
    createdAt: '2024-01-10',
    dueDate: '2024-01-25',
    isBlocked: false,
  },
  {
    id: 2,
    title: 'Написати unit-тести для auth модуля',
    assignee: 'Анна',
    priority: 'high',
    status: 'todo',
    storyPoints: 5,
    sprint: 3,
    tags: ['testing', 'auth'],
    createdAt: '2024-01-12',
    dueDate: '2024-01-28',
    isBlocked: true,
  },
  {
    id: 3,
    title: 'Оновити README документацію',
    assignee: 'Тарас',
    priority: 'low',
    status: 'done',
    storyPoints: 2,
    sprint: 2,
    tags: ['docs'],
    createdAt: '2024-01-05',
    dueDate: '2024-01-15',
    isBlocked: false,
  },
  {
    id: 4,
    title: 'Рефакторинг payment service',
    assignee: 'Іван',
    priority: 'medium',
    status: 'in-progress',
    storyPoints: 13,
    sprint: 3,
    tags: ['backend', 'payments'],
    createdAt: '2024-01-08',
    dueDate: '2024-01-30',
    isBlocked: false,
  },
  {
    id: 5,
    title: 'Додати rate limiting на API',
    assignee: 'Олексій',
    priority: 'high',
    status: 'todo',
    storyPoints: 5,
    sprint: 3,
    tags: ['backend', 'security'],
    createdAt: '2024-01-15',
    dueDate: '2024-01-29',
    isBlocked: false,
  },
  {
    id: 6,
    title: 'Дизайн нового дашборду',
    assignee: 'Олена',
    priority: 'medium',
    status: 'done',
    storyPoints: 8,
    sprint: 2,
    tags: ['design', 'frontend'],
    createdAt: '2024-01-03',
    dueDate: '2024-01-20',
    isBlocked: false,
  },
  {
    id: 7,
    title: 'Міграція бази даних на PostgreSQL',
    assignee: 'Анна',
    priority: 'high',
    status: 'todo',
    storyPoints: 21,
    sprint: 4,
    tags: ['database', 'backend'],
    createdAt: '2024-01-18',
    dueDate: '2024-02-15',
    isBlocked: true,
  },
];

const products = [
  {
    id: 101,
    name: 'MacBook Pro 14',
    category: 'laptops',
    price: 62000,
    stock: 15,
    rating: 4.8,
    brand: 'Apple',
    isAvailable: true,
    discount: 0,
    tags: ['work', 'premium'],
    weight: 1.6,
  },
  {
    id: 102,
    name: 'Dell XPS 15',
    category: 'laptops',
    price: 48000,
    stock: 0,
    rating: 4.5,
    brand: 'Dell',
    isAvailable: false,
    discount: 10,
    tags: ['work'],
    weight: 1.86,
  },
  {
    id: 103,
    name: 'iPhone 15 Pro',
    category: 'phones',
    price: 42000,
    stock: 30,
    rating: 4.9,
    brand: 'Apple',
    isAvailable: true,
    discount: 0,
    tags: ['mobile', 'premium'],
    weight: 0.187,
  },
  {
    id: 104,
    name: 'Samsung Galaxy S24',
    category: 'phones',
    price: 31000,
    stock: 22,
    rating: 4.6,
    brand: 'Samsung',
    isAvailable: true,
    discount: 5,
    tags: ['mobile'],
    weight: 0.167,
  },
  {
    id: 105,
    name: 'Sony WH-1000XM5',
    category: 'audio',
    price: 12000,
    stock: 50,
    rating: 4.7,
    brand: 'Sony',
    isAvailable: true,
    discount: 15,
    tags: ['audio', 'wireless'],
    weight: 0.25,
  },
  {
    id: 106,
    name: 'iPad Pro 12.9',
    category: 'tablets',
    price: 38000,
    stock: 8,
    rating: 4.7,
    brand: 'Apple',
    isAvailable: true,
    discount: 0,
    tags: ['tablet', 'premium'],
    weight: 0.682,
  },
  {
    id: 107,
    name: 'Logitech MX Master 3',
    category: 'accessories',
    price: 3500,
    stock: 100,
    rating: 4.8,
    brand: 'Logitech',
    isAvailable: true,
    discount: 20,
    tags: ['peripherals'],
    weight: 0.141,
  },
];

const users = [
  {
    id: 1,
    name: 'Олексій Коваль',
    age: 28,
    email: 'alex@example.com',
    role: 'admin',
    isActive: true,
    salary: 85000,
    department: 'Engineering',
    joinedAt: '2021-03-15',
    country: 'Ukraine',
  },
  {
    id: 2,
    name: 'Марія Петренко',
    age: 34,
    email: 'maria@example.com',
    role: 'manager',
    isActive: true,
    salary: 72000,
    department: 'Product',
    joinedAt: '2019-07-01',
    country: 'Ukraine',
  },
  {
    id: 3,
    name: 'Іван Сидоренко',
    age: 22,
    email: 'ivan@example.com',
    role: 'developer',
    isActive: false,
    salary: 45000,
    department: 'Engineering',
    joinedAt: '2023-01-10',
    country: 'Poland',
  },
  {
    id: 4,
    name: 'Анна Бойко',
    age: 29,
    email: 'anna@example.com',
    role: 'developer',
    isActive: true,
    salary: 61000,
    department: 'Engineering',
    joinedAt: '2022-05-20',
    country: 'Ukraine',
  },
  {
    id: 5,
    name: 'Дмитро Мельник',
    age: 45,
    email: 'dmytro@example.com',
    role: 'manager',
    isActive: true,
    salary: 95000,
    department: 'Sales',
    joinedAt: '2017-11-03',
    country: 'Germany',
  },
  {
    id: 6,
    name: 'Олена Гриценко',
    age: 31,
    email: 'olena@example.com',
    role: 'designer',
    isActive: false,
    salary: 55000,
    department: 'Design',
    joinedAt: '2020-09-14',
    country: 'Ukraine',
  },
  {
    id: 7,
    name: 'Тарас Захаренко',
    age: 26,
    email: 'taras@example.com',
    role: 'developer',
    isActive: true,
    salary: 58000,
    department: 'Engineering',
    joinedAt: '2022-12-01',
    country: 'Ukraine',
  },
];

// ! ==============MODULE_5 TASK_1
// * Напиши функцію groupBy(arr, key), яка групує масив обʼєктів за значенням вказаного ключа і повертає обʼєкт. Наприклад: groupBy(users, "city") → { Kyiv: [...], ,,Lviv: [...] }.

// ! ==============MODULE_5 TASK_10
//* Відфільтруй товари з rating >= 4.7 та isAvailable === true та stock > 0. Для секції 'Топ вибір'.

// const getProductsByRatingAndAvailable = (products, rating) =>
//   products.filter(
//     product =>
//       product.rating >= rating &&
//       product.isAvailable === true &&
//       product.stock > 0
//   );
// console.log(getProductsByRatingAndAvailable(products, 4.7));

// ! ==============MODULE_5 TASK_11
//* Знайди першу задачу з priority 'high' та status !== 'done' та isBlocked === false. Для кнопки 'Взяти в роботу'.

// const findTask = (tasks, priority, status, isBlocked) =>
//   tasks.find(
//     task =>
//       task.priority === priority &&
//       task.status !== status &&
//       task.isBlocked === isBlocked
//   );

// console.log(findTask(tasks, 'medium', 'done', false));

// ! ==============MODULE_5 TASK_12
//* Перевірити чи всі замовлення юзера оплачені

//! variant 1
// const checkUserOrdersIsPaid = (userIdToCheck, orders) => {
//   const userOrders = orders.filter(order => order.userId === userIdToCheck);
//   console.log(userOrders);
//   return userOrders.every(userOrder => userOrder.isPaid === true);
// };

// console.log(checkUserOrdersIsPaid(4, orders));

//! variant 2

// const checkUserOrdersIsPaid = (userIdToCheck, orders) =>
//   orders
//     .filter(order => order.userId === userIdToCheck)
//         .every(userOrder => userOrder.isPaid === true);

// console.log(checkUserOrdersIsPaid(1, orders));

// ! ==============MODULE_5 TASK_13
//*Перевірити готовність спринту до релізу

//! variant 1

// const checkStatusCondition = (tasks, condition) => {
//   return tasks.map(task => {
//     if (task.status === condition) {
//       return `Task${task.id} - READY TO REALEASE`;
//     }
//     return `Task${task.id} - ${task.status}`;
//   });
// };

// console.log(checkStatusCondition(tasks, 'done'));

//! variant 2

// const checkStatusCondition = (tasks, condition) => {
//   return tasks
//     .filter(task => task.status === condition)
//     .map(task => `Task${task.id} - READY TO REALEASE`);
// };

// console.log(checkStatusCondition(tasks, 'done'));

// ! ==============MODULE_5 TASK_14
//*Згрупувати замовлення за статусом

//! variant 1
// const groupOrdersByStatus = orders => {
//   const ordersStatusArray = [];
//   const resultArray = [];
//   console.log(ordersStatusArray);
//   for (const order of orders) {
//     if (!ordersStatusArray.includes(order.status)) {
//       ordersStatusArray.push(order.status);
//     }
//   }
//   for (const status of ordersStatusArray) {
//     for (const order of orders) {
//       if (status === order.status) {
//         resultArray.push(order);
//       }
//     }
//   }
//   return resultArray;
// };

// console.log(groupOrdersByStatus(orders));

//! variant 2

// const groupSortedByStatus = orders.toSorted((current, previous) => {
//   return current.status.localeCompare(previous.status);
// });

// console.log(groupSortedByStatus);

//! variant 3

// const groupOrdersByStatus = orders => {
//   const resultObject = {};
//   let groupStatus;
//   for (const order of orders) {
//     groupStatus = order.status;
//     if (resultObject[groupStatus] === undefined) {
//       resultObject[groupStatus] = [];
//     }
//     resultObject[groupStatus].push(order);
//   }
//   return resultObject;
// };

// const groupedOrders = groupOrdersByStatus(orders);
// console.log(groupedOrders);

// ! ==============MODULE_5 TASK_15
//*Підрахувати story points по виконавцям

// const calculateStoryPointsByAssigne = tasks => {
//   const resultArray = [];
//   const assigneeNamesArray = [];

//   for (const task of tasks) {
//     if (!assigneeNamesArray.includes(task.assignee)) {
//       assigneeNamesArray.push(task.assignee);
//     }
//   }
//   //   console.log(assigneeNamesArray);

//   for (const name of assigneeNamesArray) {
//     let executorStoryPoints = 0;
//     for (const task of tasks) {
//       if (name === task.assignee) {
//         executorStoryPoints += task.storyPoints;
//       }
//     }
//     resultArray.push({ name, storyPoints: executorStoryPoints });
//   }

//   //   console.log(resultArray);
//   return resultArray;
// };

// console.log(calculateStoryPointsByAssigne(tasks));

// ! ==============MODULE_5 TASK_16
//* Порахувати середній рейтинг товарів

// const calculateAverageRating = products => {
//   const totalRating = products.reduce(
//     (totalRating, product) => totalRating + product.rating,
//     0
//   );
//   return totalRating / products.length;
// };

// console.log(calculateAverageRating(products));

// ! ==============MODULE_5 TASK_17
//* Побудувати дерево юзерів по департаментах

// !variant_1
// const buildUsersDepartmentTree = users => {
//   const resultTree = {};
//   for (const user of users) {
//     if (resultTree[user.department] === undefined) {
//       resultTree[user.department] = [];
//     }

//     resultTree[user.department].push(user);
//   }
//   return resultTree;
// };

// console.log(buildUsersDepartmentTree(users));

// !variant_2

// const buildUsersDepartmentTree = (users, key) => {
//   const resultTree = {};
//   for (const user of users) {
//     const treeKey = user[key];
//     if (resultTree[treeKey] === undefined) {
//       resultTree[treeKey] = [];
//     }

//     resultTree[treeKey].push(user);
//   }
//   return resultTree;
// };

// console.log(buildUsersDepartmentTree(users, 'role'));

// ! ==============MODULE_5 TASK_18
//* Збагатити замовлення даними про юзера

// const orderWithUserInfo = (orders, users) => {
//   return orders.map(order => {
//     for (const user of users) {
//       if (order.userId === user.id) {
//         return { ...order, userInfo: { ...user } };
//       }
//     }
//   });
// };

// console.log(orderWithUserInfo(orders, users));

// ! ==============MODULE_5 TASK_19

//* Відфільтруй замовлення що є підозрілими: total > 50000 І isPaid === false І paymentMethod === 'cod'. Або: те саме замовлення прийшло з нового userId без попередніх оплачених замовлень.

// const filterOrdersByMarks = (
//   orders,
//   totalToCheck,
//   isPaidToCheck,
//   paymentMethodToCheck
// ) => {
//   return orders.filter(order => {
//     return (
//       order.total > totalToCheck &&
//       order.isPaid === isPaidToCheck &&
//       order.paymentMethod === paymentMethodToCheck
//     );
//   });
// };

// console.log(filterOrdersByMarks(orders, 0, false, 'cod'));

// ! ==============MODULE_5 TASK_20

//* Перевірити що всі premium-товари мають знижку <= 5%

// const checkPremiumOrdersForDiscount = (products, discountToCheck) =>
//   products.every(product => product.discount <= discountToCheck);

// console.log(checkPremiumOrdersForDiscount(products, 5));
