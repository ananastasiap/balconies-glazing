export const timer = (id, deadline) => {
  const addZero = (number) => {
    if (number <= 9) {
      return '0' + number;
    } else {
      return number;
    }
  };

  const getTimeRemaining = (endtime) => {
    const timeTotal = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((timeTotal / 1000) % 60);
    const minutes = Math.floor((timeTotal / 1000 / 60) % 60);
    const hours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24);
    const days = Math.floor((timeTotal / (1000 * 60 * 60 * 24)));

    return {
      'totalTime': timeTotal,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    const updateClock = () => {
      const timeTotal = getTimeRemaining(endtime);

      days.textContent = addZero(timeTotal.days);
      hours.textContent = addZero(timeTotal.hours);
      minutes.textContent = addZero(timeTotal.minutes);
      seconds.textContent = addZero(timeTotal.seconds);

      if (timeTotal.totalTime <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    };

    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
  };

  setClock(id, deadline);
};