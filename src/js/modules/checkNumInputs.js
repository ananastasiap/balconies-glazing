export const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach(phoneImput => {
    phoneImput.addEventListener('input', () => {
      phoneImput.value = phoneImput.value.replace(/\D/, '');
    });
  });
};