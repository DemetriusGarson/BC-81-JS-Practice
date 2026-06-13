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

// // 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector('body');
// console.log(bodyEl);
// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleEl = document.querySelector('#title');
// console.log(titleEl);
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listEl = document.querySelector('.list');
// console.log(listEl);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopicsEl = document.querySelectorAll('[data-topic]');
// console.log(dataTopicsEl);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstDataTopicEl = document.querySelector('[data-topic]');
// console.log(firstDataTopicEl);
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastDataTopicEl = dataTopicsEl[dataTopicsEl.length - 1];
// console.log(lastDataTopicEl);
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const h1NextSibilingEl = document.querySelector('h1').nextElementSibling;
// console.log(h1NextSibilingEl);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3AllEl = document.querySelectorAll('h3');
// h3AllEl.forEach(h3 => {
//   console.log(h3);
// });
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// h3AllEl.forEach(h3 => {
//   h3.classList.add('active');
// });
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liWithDataTopicIsNavigationEl = document.querySelector(
//   'li[data-topic=navigation]'
// );
// console.log(liWithDataTopicIsNavigationEl);
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// liWithDataTopicIsNavigationEl.style.backgroundColor = 'yellow';
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// liWithDataTopicIsNavigationEl.querySelector('p').textContent =
//   'Я змінив тут текст!';
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const toFindEl = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log(toFindEl);
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// toFindEl.style.backgroundColor = 'black';
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const titleCompletedEl = document.querySelector('.completed');
// console.log(titleCompletedEl);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const liHasTitleCompletedEl = titleCompletedEl.parentNode;
// // const liID = titleCompletedEl.closest('[data-topic]');
// // console.log(liID.dataset.id);
// liHasTitleCompletedEl.remove();
// // console.log(liHasTitleCompletedEl);

// // 17 - після заголовка h1(перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newP = document.createElement('p');
// newP.textContent = "Об'єктна модель документа (Document Object Model)";
// titleEl.append(newP);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const liNewEl = document.createElement('li');
// const liNewH3El = document.createElement('h3');
// liNewH3El.textContent = 'Властивість innerHTML';
// const liNewPEl = document.createElement('p');
// liNewPEl.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// liNewEl.append(liNewH3El, liNewPEl);
// listEl.append(liNewEl);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// listEl.insertAdjacentHTML(
//   'beforeend',
//   `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`
// );

// // listEl.insertAdjacentHTML('beforeend', `${listEl}`);

// // 20 - очисти список
// listEl.innerHTML = '';

// ! ==============MODULE_7 TASK_3

//* Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// console.log('==============MODULE_7 TASK_3');

// const numberContainerEl = document.querySelector('.number-container');
// console.log(numberContainerEl);
// function createElements(element, count) {
//   const numberArray = [];
//   for (let i = 1; i <= count; i++) {
//     let numberEl = document.createElement(element);
//     numberEl.classList.add('number');
//     numberEl.textContent = randomNumber();
//     if (numberEl.textContent % 2 === 0) {
//       numberEl.classList.add('even');
//     } else {
//       numberEl.classList.add('odd');
//     }
//     // numberContainerEl.append(numberEl);
//     numberArray.push(numberEl);
//   }
//   numberContainerEl.append(...numberArray);
// }
// createElements('div', 100);

// ! ==============MODULE_7 TASK_4

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// console.log('TASK_4');
// const formEl = document.querySelector('.js-contact-form');
// const outputEl = document.querySelector('.js-username-output');
// const { accept, userName } = formEl.elements;

// userName.addEventListener('input', onUserNameInput);
// // userName.addEventListener('focus', onUserNameFocus);
// // userName.addEventListener('blur', onUserNameBlur);
// formEl.addEventListener('submit', onFormSubmit);

// function onUserNameInput(event) {
//   const inputValue = event.target.value.trim();
//   if (inputValue.length > 6) {
//     event.target.classList.add(`success`);
//     event.target.classList.remove(`error`);
//   } else {
//     event.target.classList.add(`error`);
//     event.target.classList.remove(`success`);
//   }
//   outputEl.textContent = inputValue ? inputValue : 'Anonymous';
// }

// function onUserNameFocus(event) {
//   const inputValue = event.target.value.trim();
//   if (inputValue === '') {
//     event.target.style.outline = '3px solid red';
//   } else {
//     event.target.style.outline = '3px solid green';
//   }
// }

// function onUserNameBlur(event) {
//   const inputValue = event.target.value.trim();
//   if (inputValue === '') {
//     event.target.style.outline = '3px solid red';
//   } else {
//     event.target.style.outline = '3px solid green';
//   }
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   const inputValue = userName.value.trim();
//   const checkBoxValue = accept.checked;
//   // console.dir(accept);
//   if (inputValue === '' || !checkBoxValue) {
//     alert('Не всi поля форми заповненi');
//     return;
//   }
//   const formData = { inputValue, checkBoxValue };
//   console.log(formData);
//   formEl.reset();
//   outputEl.textContent = 'Anonymous';
// }

// ! ==============MODULE_7 TASK_5

//* Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const refs = {
//   box: document.querySelector('.box'),
//   decreaseBtn: document.querySelector('.js-decrease'),
//   increaseBtn: document.querySelector('.js-increase'),
// };
// const boxStyles = getComputedStyle(refs.box);
// console.log(boxStyles);
// let sizes = parseInt(boxStyles.width);
// console.log(sizes);

// refs.decreaseBtn.addEventListener('click', onDecreaseBtnClick);
// refs.increaseBtn.addEventListener('click', onIncreaseBtnClick);

// function onDecreaseBtnClick(event) {
//   sizes -= 20;
//   refs.box.style.width = `${sizes}px`;
//   refs.box.style.height = `${sizes}px`;
// }

// function onIncreaseBtnClick(event) {
//   sizes += 20;
//   refs.box.style.width = `${sizes}px`;
//   refs.box.style.height = `${sizes}px`;
// }

// ! ==============MODULE_7 TASK_6

//* Керування доступністю кнопки через checkbox
// Контекст: Перед переходом до наступного кроку користувач має погодитися з умовами. Замовник хоче, щоб без цієї дії кнопка залишалась недоступною, а поруч показувався поточний статус.
// Базовий HTML:
// <section class="task checkbox-task">
//   <h2>Підтвердження</h2>
//   <label class="agreement">
//     <input type="checkbox" class="check" />
//     Я погоджуюся з правилами сервісу
//   </label>
//   <button class="next-btn" type="button" disabled>Next</button>
//   <p class="state">Статус: не підтверджено</p>
// </section>
// Розширене ТЗ:
//     • Поки checkbox не відмічений, кнопка .next-btn повинна залишатися disabled.
//     • Щойно користувач ставить галочку, кнопка стає активною.
//     • Якщо галочку прибрати, кнопка знову повинна блокуватися.
//     • Текст у .state має змінюватися відповідно до стану: «Статус: підтверджено» або «Статус: не підтверджено».
//     • Рішення має реагувати саме на зміну стану checkbox, а не на кліки по кнопці.

// const refs = {
//   checkbox: document.querySelector('.check'),
//   nextBtn: document.querySelector('.next-btn'),
//   state: document.querySelector('.state'),
// };

// refs.checkbox.addEventListener('change', onCheckboxChange);

// function onCheckboxChange(event) {
//   const isChecked = event.target.checked;
//   // console.log(isChecked);
//   if (isChecked) {
//     refs.nextBtn.disabled = false;
//   } else {
//     refs.nextBtn.disabled = true;
//   }
//   refs.state.textContent = isChecked
//     ? 'Статус: підтверджено'
//     : 'Статус: не підтверджено';
// }

// ! ==============MODULE_7 TASK_7

// Додавання задач у to-do список
// Контекст: Користувач планує день у невеликому вебзастосунку. Після натискання кнопки введений текст повинен перетворюватися на новий пункт списку.
// Базовий HTML:
// <section class="task todo-task">
//   <h2>Мої справи</h2>
//   <div class="controls">
//     <input class="task-input" type="text" placeholder="Нова задача" />
//     <button class="add" type="button">Add task</button>
//   </div>
//   <ul class="list"></ul>
// </section>
// Розширене ТЗ:
//     • Після кліку на кнопку потрібно створити новий елемент <li> і додати його в кінець списку .list.
//     • Текст нового пункту береться з поля .task-input.
//     • Якщо поле порожнє або містить лише пробіли, новий пункт не додається.
//     • Після успішного додавання поле вводу має очищатися.
//     • Кожне нове завдання повинно додаватися окремим рядком, а не замінювати попередні.

// const refs = {
//   taskList: document.querySelector('.list-task7'),
//   taskInput: document.querySelector('.task-input'),
//   button: document.querySelector('.add'),
// };

// refs.button.addEventListener('click', onButtonClick);

// function onButtonClick(event) {
//   let inputValue = refs.taskInput.value.trim();
//   const liEl = document.createElement('li');
//   if (inputValue !== '') {
//     liEl.textContent = inputValue;
//     console.log(liEl);
//     refs.taskList.append(liEl);
//     refs.taskInput.value = '';
//   }
// }
