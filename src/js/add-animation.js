// Функция добавляет анимацию, задержку и удаляет по завершении.

const addAnimation = (tag, animationName, delay = 0, isRemove = false) => {
  // Проверка приходящих данных
  if (!HTMLElement.prototype.isPrototypeOf(tag)
      || !(typeof animationName === 'string')
      || !(typeof delay === 'number')
      || !(typeof isRemove === 'boolean'))
  {
    throw new TypeError();
  }

  // Добавляем задержку и анимацию
  tag.style.animationDelay = delay + 's';
  tag.classList.add(animationName);
  
  // Удаляем по завершении если нужно
  if (isRemove) {
    tag.addEventListener('animationend', (evnt) => {
      evnt.target.classList.remove(animationName);
    });
  }
};

export default addAnimation;