// Отправка формы на сервер.

const sendForm = (form) => {
    const url = './server/server.php';
    
    fetch(url, {
      method: 'POST',
      body: form
    }).then((response) => {
      if (!response.ok) { throw new Error('Server has ' + response.status + ' status.') }
    }).catch((error) => {
      throw error;
    });
  };
  
  export default sendForm;