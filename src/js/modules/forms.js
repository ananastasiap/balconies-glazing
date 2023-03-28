export const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneImputs = document.querySelectorAll('input[name="user_phone"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  phoneImputs.forEach(phoneImput => {
    phoneImput.addEventListener('input', () => {
      phoneImput.value = phoneImput.value.replace(/\D/, '');
    });
  });

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let result = await fetch(url, {
      method: "POST",
      body: data
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

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form);

      postData('https://simple-server-cumz.onrender.com/api/data', formData)
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