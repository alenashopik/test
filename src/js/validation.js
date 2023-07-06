import errorsData from "./errors-data.js";

// Валидация полей
const validation = {
  self(input) { // Проверка одного поля на валидность. Принимает input.
    // Проверка приходящих данных
    if (!HTMLInputElement.prototype.isPrototypeOf(input)) {
      throw new TypeError();
    }

    const inputName = input.getAttribute('name');
    return errorsData[inputName].validation(input.value);
  },
  full(form) { // Проверка всей формы на валидность, принимает объект FormData.
    // Проверка приходящих данных
    if (!FormData.prototype.isPrototypeOf(form)) {
      throw new TypeError();
    }

    const result = {};
    for (let formKey of form) {
      // Проверяем, если в объекте с ошибками есть валидация для поля.
      if (errorsData[formKey[0]]) {
        // Возвращаем false и name поля, если проверка не прошла.
        if (!errorsData[formKey[0]].validation(formKey[1])) result[formKey[0]] = false;
      }
    }

    // Вернём объект с полем valid и провалившими проверку полями.
    return !Object.keys(result).length
      ? { valid: true, failing: { ...result } }
      : { valid: false, failing: { ...result } };
  }
};

export default validation;