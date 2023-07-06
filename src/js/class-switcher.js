// Добавление и удаление указанных классов.

const classSwitcher = (tag, removeName, addName) => {
  // Проверка приходящих данных
  if (!HTMLElement.prototype.isPrototypeOf(tag)
      || !(typeof removeName === 'string')
      || !(typeof addName === 'string'))
  {
    throw new TypeError();
  }

  tag.classList.remove(removeName);
  tag.classList.add(addName);
}

export default classSwitcher;