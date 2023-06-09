export const timer = (id, deadline) => {

  const getTimeRemaining = (deadline) => {
    const remainingTime = new Date(deadline - new Date());
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const [hours, minutes, seconds] = remainingTime.toLocaleTimeString('ru-RU', { timeStyle: 'medium' }).split(':');

    return {remainingTime, days, hours, minutes, seconds};
  };

  const setClock = (selector, deadline) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    const updateClock = () => {
      const remainingTime = getTimeRemaining(deadline);

      days.textContent = remainingTime.days;
      hours.textContent = remainingTime.hours;
      minutes.textContent = remainingTime.minutes;
      seconds.textContent = remainingTime.seconds;

      if (remainingTime.remainingTime <= 0) {
        clearInterval(timeInterval);
      }
    };

    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
  };

  setClock(id, new Date(deadline));
};