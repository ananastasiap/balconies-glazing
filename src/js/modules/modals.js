export const modals = () => {
  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        close.focus();
      });
    });

    close.addEventListener('click', () => {
      closeModal();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };
  };

  const showModalByTime = (selector, time) => {
    setTimeout(function() {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  };

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  showModalByTime('.popup', 60000);

};
