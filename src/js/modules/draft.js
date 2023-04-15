export const timer = (id, deadline) => {

  const getTimeRemaining = (endtime) => {
    const timeTotal = endtime - new Date();
    const remainingTime = new Date(timeTotal);
    const days = remainingTime.toLocaleDateString('ru-RU', { dateStyle: 'short' })
                                                                      .split('.');
    const [hours, minutes, seconds] = remainingTime.toLocaleTimeString('ru-RU', { timeStyle: 'medium' })
                                                                      .split(':');

    return {remainingTime, days, hours, minutes, seconds};
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    const updateClock = () => {
      const remainingTime = getTimeRemaining(endtime);

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