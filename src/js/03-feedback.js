// Отслеживай на форме событие input, и каждый раз записывай 
// в локальное хранилище объект с полями email и message,
//     в которых сохраняй текущие значения полей формы.
    
//     Пусть ключом для хранилища будет строка "feedback-form-state".

// При загрузке страницы проверяй состояние хранилища,
//     и если там есть сохраненные данные, заполняй ими поля формы.
//     В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы,
//     а также выводи объект с полями email, message 
//     и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//  Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const inputEl = document.querySelector('input');

const textAreaEl = document.querySelector('textarea');

const formEl = document.querySelector('form');

contentTextArea();

let form = {};

    // inputEl.addEventListener('input', onEmailInput);

textAreaEl.addEventListener('input', onTextAreaInput);
// textAreaEl.addEventListener('input', throttle(onTextAreaInput, 500));

// function onEmailInput(evt) {
        
// };

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    console.log('send form');
    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};

function onTextAreaInput(event) {
    form = event.currentTarget.value;
    // form[event.currentTarget.name] = event.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, form);

    // localStorage.setItem(STORAGE_KEY, JSON.stringify('form'));
};

function contentTextArea() {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
        console.log(savedContent);
        textAreaEl.value = savedContent;
    }
}

