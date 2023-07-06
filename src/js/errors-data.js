/* Объект с информацией для валидации и ошибок полей.
Функция проверяет пришедший тип и проверяет строку регулярным выражением.
Если пришел пароль, проверяется с паролем из другого поля. */
const errorsData = {
  "first-name": {
    "message": 'Only latin or cyrillic letters',
    validation(string) {
      if (!(typeof string === 'string')) { throw new TypeError(); }
      return /^[A-Za-zА-Яа-яЁё]+$/.test(string);
    },
  },
  "last-name": {
    "message": 'Only latin or cyrillic letters',
    validation(string) {
      if (!(typeof string === 'string')) { throw new TypeError(); }
      return /^[A-Za-zА-Яа-яЁё]+$/.test(string);
    },
  },
  "email": {
    "message": 'Must contain @ and . symbols',
    validation(string) {
      if (!(typeof string === 'string')) { throw new TypeError(); }
      return /^[\.\w-]+@([\w-]+\.)+[\w-]{1,4}$/.test(string);
    },
  },
  "password": {
    "message": 'At least 8 characters, letters A-z, A-z and numbers',
    validation(string) {
      if (!(typeof string === 'string')) { throw new TypeError(); }
      return /^[0-9A-Za-z]{8,}$/.test(string);
    },
  },
  "password-confirm": {
    "message": 'Password mismatch',
    validation(confirmPassword) {
      if (!(typeof confirmPassword === 'string')) { throw new TypeError(); }
      const password = document.getElementById('password').value;

      if (password === '') return false;
      return password === confirmPassword;
    },
  },
};

export default errorsData;