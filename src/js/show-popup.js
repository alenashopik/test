import classSwitcher from "./class-switcher.js";

// Отображение всплывающего окна с ошибкой.
const showPopup = (input, isShow) => {
  // Проверка приходящих данных.
  if (!HTMLInputElement.prototype.isPrototypeOf(input)
      || !(typeof isShow === 'boolean'))
  {
    throw new TypeError();
  }

  // Находим все всплывающие окна и берём значение name из input.
  const popups = document.querySelectorAll('.popup-error');
  const inputName = input.getAttribute('name');

  // Ищем подходящее окно и показываем, если нашли.
  popups.forEach((popup) => {
    const popupDataAttribute = popup.getAttribute('data-link');
    if (popupDataAttribute === inputName) {
      if (isShow) {
        classSwitcher(popup, 'visibility-hidden', 'animation-show');
      } else {
        classSwitcher(popup, 'animation-show', 'visibility-hidden');
      }
    }
  });
};

export default showPopup;