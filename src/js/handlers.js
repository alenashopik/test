import validation from "./validation.js";
import classSwitcher from "./class-switcher.js";
import showPopup from "./show-popup.js";
import addAnimation from "./add-animation.js";
import modalRegistered from "./modal-registered.js";
import sendForm from "./send-form.js";

// Обработчики событий
const handlers = () => {
  // Форма, текстовые поля, submit button
  const form = document.querySelector('.sign-up-right__form');
  const inputCollection = document.querySelectorAll('.registration__field-input');
  const submitButton = document.querySelector('.form-bottom__button');

  const inputHandler = (evnt) => {
    const input = evnt.target;
    const parent = input.parentElement;
    const isValid = validation.self(input);

    // Если валидация провалена, выделить поле красным и показать ошибку
    if (!isValid) {
      classSwitcher(parent, 'valid', 'error');
      showPopup(input, true);
    } else {
      classSwitcher(parent, 'error', 'valid');
      showPopup(input, false);
    }
  };

  const submitButtonHandler = (evnt) => {
    const button = evnt.target;
    const formData = new FormData(form);
    const isFullValid = validation.full(formData);

    // Если валидация провалена.
    if (!isFullValid.valid) {
      // Сравниваем поля с провалившими валидацию именами.
      inputCollection.forEach((input) => {
        const parent = input.parentElement;
        const inputName = input.getAttribute('name');

        // Если нашли совпадения, выделить красным и показать ошибку.
        if (isFullValid.failing.hasOwnProperty([inputName])) {
          classSwitcher(parent, 'valid', 'error');
          showPopup(input, true);
        } else {
          classSwitcher(parent, 'error', 'valid');
          showPopup(input, false);
        }
      });

      // Добавляет анимацию дрожания к кнопке.
      addAnimation(button, 'animation-shake', 0, true);
    } else {
      // Иначе отображаем окончание регистрации.
      modalRegistered();
    }
  };

  const formHandler = (evnt) => {
    evnt.preventDefault();

    const form = evnt.target;
    const formData = new FormData(form);
    const isFullValid = validation.full(formData);

    // Отправляем форму и чистим поля, если валидация прошла успешно.
    if (isFullValid.valid) {
      sendForm(formData);
      inputCollection.forEach((input) => input.parentElement.classList.remove('valid'));
      form.reset();
    }
  };

  // Обработчик на инпуты, submit кнопку, форму
  inputCollection.forEach((input) => {
    input.addEventListener('input', inputHandler);
  });
  submitButton.addEventListener('click', submitButtonHandler);
  form.addEventListener('submit', formHandler);
};

export default handlers;