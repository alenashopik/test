/* Функция наполняет select потомками option.
Принимает тэг select, имя класса для потомков,
массив имён или начальное число для счетчика, максимальное число для счетчика. */

const fillingSelect = (parent, name = '', value = 0, maxValue = 0) => {
  // Проверка приходящих данных
  if (!HTMLSelectElement.prototype.isPrototypeOf(parent)
      || (!Array.isArray(value) && !Number.isInteger(value))
      || !Number.isInteger(maxValue)
      || !(typeof name === 'string'))
  {
    throw new TypeError();
  }
  
  // Наполнение родителя тегами option.
  const isArray = Array.isArray(value);
  for (let i = isArray ? 0 : value; i <= maxValue; i++) {
    const newOption = document.createElement('option');
    newOption.classList.add(name);
    newOption.value = isArray ? value[i].toLowerCase() : i;
    newOption.innerText = isArray ? value[i] : i;
    parent.appendChild(newOption);
  }
};

export default fillingSelect;