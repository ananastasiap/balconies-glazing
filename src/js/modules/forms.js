import { checkNumInputs } from './index.js';

export const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  checkNumInputs('input[name="user_phone"]');

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const result = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        'Content-type': 'application/json',
      },
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  };

  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.append(statusMessage);

      const formData = new FormData(form);
      const jsonObject = {};
      formData.forEach((value, key) => jsonObject[key] = value);
      const jsonData = JSON.stringify(jsonObject);

      postData('https://simple-server-cumz.onrender.com/api/data', jsonData)
            .then(result => {
              statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
              clearInputs();
              setTimeout(() => {
                statusMessage.remove();
              }, 5000);
            });
    });
  });

};