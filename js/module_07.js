// ! ==============MODULE_7 TASK_1
//* Лічильник кліків для кнопки Like
// Контекст: На сторінці товару є кнопка лайку. Замовник хоче, щоб користувач одразу бачив, скільки разів на неї натиснули в межах поточного відкриття сторінки.
// Базовий HTML:
// <section class="task like-task">
//   <h2>Лічильник лайків</h2>
//   <button class="btn" type="button">Like</button>
//   <p class="result">Likes: <span class="count">0</span></p>
// </section>
// Розширене ТЗ:
//     • Після кожного кліку на кнопку значення всередині <span class="count"> має збільшуватись на 1.
//     • Початково на сторінці повинно відображатись число 0.
//     • Число змінюється лише в межах цього відкриття сторінки; після перезавантаження можна починати з нуля.
//     • Жодних додаткових повідомлень виводити не потрібно — змінюється тільки число.

// const button = document.querySelector('.btn');
// let likeCount = 0;

// button.addEventListener('click', onButtonClick);
// let count = document.querySelector('.count');

// function onButtonClick() {
//   likeCount += 1;
//   count.textContent = likeCount;
// }

// ! ==============MODULE_7 TASK_2

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body');
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector('#title');
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list');
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicsEl = document.querySelectorAll('[data-topic]');
console.log(dataTopicsEl);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDataTopicEl = document.querySelector('[data-topic]');
console.log(firstDataTopicEl);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataTopicEl = dataTopicsEl[dataTopicsEl.length - 1];
console.log(lastDataTopicEl);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1NextSibilingEl = document.querySelector('h1').nextElementSibling;
console.log(h1NextSibilingEl);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3AllEl = document.querySelectorAll('h3');
h3AllEl.forEach(h3 => {
  console.log(h3);
});
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3AllEl.forEach(h3 => {
  h3.classList.add('active');
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liWithDataTopicIsNavigationEl = document.querySelector(
  'li[data-topic=navigation]'
);
console.log(liWithDataTopicIsNavigationEl);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liWithDataTopicIsNavigationEl.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
liWithDataTopicIsNavigationEl.querySelector('p').textContent =
  'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const toFindEl = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(toFindEl);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
toFindEl.style.backgroundColor = 'black';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompletedEl = document.querySelector('.completed');
console.log(titleCompletedEl);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const liHasTitleCompletedEl = titleCompletedEl.parentNode;
// const liID = titleCompletedEl.closest('[data-topic]');
// console.log(liID.dataset.id);
liHasTitleCompletedEl.remove();
// console.log(liHasTitleCompletedEl);

// 17 - після заголовка h1(перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newP = document.createElement('p');
newP.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.append(newP);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const liNewEl = document.createElement('li');
const liNewH3El = document.createElement('h3');
liNewH3El.textContent = 'Властивість innerHTML';
const liNewPEl = document.createElement('p');
liNewPEl.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
liNewEl.append(liNewH3El, liNewPEl);
listEl.append(liNewEl);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
listEl.insertAdjacentHTML(
  'beforeend',
  `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`
);

// listEl.insertAdjacentHTML('beforeend', `${listEl}`);

// 20 - очисти список
listEl.innerHTML = '';
