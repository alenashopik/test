// Отображение модального окна после регистрации.

const modalRegistered = () => {
    /* Верхний блок с текстом, блок-обёртка всех полей регистрации,
    Кнопка отправки формы, всплывающее окно после регистрации. */
    const topBlock = document.querySelector('.sign-up-right__top');
    const registration = document.querySelector('.sign-up-right__form-registration');
    const submitButton = document.querySelector('.form-bottom__button');
    const popupRegistered = document.querySelector('.sign-up-right__registered');
  
    // Скрываем все блоки, за исключением блока с логином. Показываем окно с окончанием регистрации.
    topBlock.classList.add('visibility-hidden');
    registration.classList.add('visibility-hidden');
    submitButton.classList.add('visibility-hidden');
    popupRegistered.classList.remove('visibility-hidden');
    popupRegistered.classList.add('animation-show-and-hide');
  
    //Возвращаем всё в прежнее состояние после анимации.
    popupRegistered.addEventListener('animationend', (evnt) => {
      evnt.target.classList.remove('animation-show-and-hide');
      evnt.target.classList.add('visibility-hidden');
      topBlock.classList.remove('visibility-hidden');
      registration.classList.remove('visibility-hidden');
      submitButton.classList.remove('visibility-hidden');
    });
  };
  
  export default modalRegistered;