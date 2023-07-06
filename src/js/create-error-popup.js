import errorsData from "./errors-data.js";

/* Создаёт popup для каждого поля с ошибкой.
Принимает input к которому нужен popup */
const createErrorPopup = (input) => {
  // Проверка приходящих данных
  if (!HTMLInputElement.prototype.isPrototypeOf(input)) {
    throw new TypeError();
  }

  const parent = input.parentElement;
  const grandpa = parent.parentElement;
  
  // Координаты и размеры блока с полем и его родителя.
  const getCoordinates = () => {
    return {
      "grandpaX": grandpa.getBoundingClientRect().x,
      "grandpaY": grandpa.getBoundingClientRect().y,
      "parentX": parent.getBoundingClientRect().x,
      "parentY": parent.getBoundingClientRect().y,
      "parentWidth": parent.getBoundingClientRect().width,
      "parentHeight": parent.getBoundingClientRect().height,
      "topBias": 2,
      "leftBias": 0
    };
  };

  // Добавление стилей для размещения блока, собранных на основе координат.
  const buildStyles = (tag, coords) => {
    tag.style.maxWidth = coords.parentWidth + 'px';
    tag.style.top = coords.parentY - coords.grandpaY + coords.parentHeight + coords.topBias + 'px';
    tag.style.left = coords.parentX - coords.grandpaX + coords.leftBias + 'px';
  };

  // Создание блока и заполнение информацией.
  const newSpan = document.createElement('span');
  newSpan.className = 'popup-error visibility-hidden';
  newSpan.setAttribute('data-link', input.getAttribute('name'));
  newSpan.innerText = errorsData[input.getAttribute('name')].message;
  buildStyles(newSpan, getCoordinates());
  parent.after(newSpan);
  
  // Обработчик на блок с инпутами, для обновления позиционирования popup'ов.
  const inputObserver = new ResizeObserver((entries) => {
    buildStyles(newSpan, getCoordinates());
  });
  inputObserver.observe(grandpa);
};

export default createErrorPopup;