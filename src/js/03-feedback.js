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

const formEl = document.querySelector('.feedback-form');

// contentTextArea();



     formEl.addEventListener('input', throttle(onTextAreaInput, 500));

     formEl.addEventListener('submit', onFormSubmit);
    // formEl.addEventListener('input', onTextAreaInput);
    let formData = {};
        
    function onTextAreaInput(event) {
    // formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    // form = event.currentTarget.value;
     formData[event.target.name] = event.target.value;
    

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


    function onFormSubmit(event) {
      event.preventDefault();
      
      
      if (formEl.email.value === '' || formEl.message.value === '') {
        alert('все поля должны быть заполнены')
      }

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    event.currentTarget.reset();

      localStorage.removeItem(STORAGE_KEY); 
     
};

(function updateDataFromLocalStorage() {
  let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    Object.entries(savedData).forEach(([key, value]) => {
      formData[key] = value;
      formEl.elements[key].value = value;
    
    });
  }
})();

