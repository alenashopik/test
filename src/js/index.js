import selectsData from './selects-data.js';
import fillingSelect from './filling-select.js';
import createErrorPopup from './create-error-popup.js';
import addAnimation from './add-animation.js';
import handlers from './handlers.js';

function singUp() {
  // Все блоки с полями.
  const registrationFieldBlocks = document.querySelectorAll('.registration__field');
  // Все текстовые инпуты.
  const inputCollection = document.querySelectorAll('.registration__field-input');
  // Селекты для наполнения данными.
  const selectNationality = document.getElementById('nationality');
  const selectDay = document.getElementById('birth-day');
  const selectMonth = document.getElementById('birth-month');
  const selectYear = document.getElementById('birth-year');

  // Создаём всплывающие окна с ошибками для инпутов.
  inputCollection.forEach((input) => createErrorPopup(input));
  // Заполняем информацией селекты из формы.
  fillingSelect(selectNationality, 'registration__field-select-option', selectsData.nationalities, selectsData.nationalities.length - 1);
  fillingSelect(selectDay, 'birthday__select-option', 1, 31);
  fillingSelect(selectMonth, 'birthday__select-option', selectsData.months, selectsData.months.length - 1);
  fillingSelect(selectYear, 'birthday__select-option', 1900, 2023);
  // Добавление анимации и задержки к полям.
  registrationFieldBlocks.forEach((tag, index) => {
    addAnimation(tag, 'animation-bubbling', index / 10 + 0.1);
  });
  // Обработчики
  handlers();
}
singUp();