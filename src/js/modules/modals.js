export const modals = () => {
  const bindModal = ({triggerSelector, modalSelector, closeSelector, closeClickOverlay = true}) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }

        closeAllModals();

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        close.focus();
      });
    });

    close.addEventListener('click', () => {
      closeAllModals();
      closeModal();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal && closeClickOverlay) {
        closeAllModals();
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAllModals();
        closeModal();
      }
    });

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    };

    const closeAllModals = () => {
      windows.forEach(window => {
        window.style.display = 'none';
      });
    }
  };

  const showModalByTime = (selector, time) => {
    setTimeout(function() {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  };

  const calcScroll = () => {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  bindModal({
    triggerSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close'});
  bindModal({
    triggerSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close'});
  bindModal({
    triggerSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close'});
  bindModal ({
    triggerSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlay: 'false'});
  bindModal ({
    triggerSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlay: 'false'});
  showModalByTime('.popup', 60000);
};
