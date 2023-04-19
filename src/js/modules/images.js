export const images = () => {
  const rootElement = document.documentElement;
  const workSection = document.querySelector('.works');
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');
  const previews = document.querySelectorAll('.preview');

  imgPopup.classList.add('popup-images');
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  bigImage.style.width = '65vh';
  bigImage.style.height = 'auto';

  imgPopup.append(bigImage);

  const closeBigImg = () => {
    imgPopup.style.display = 'none';
    rootElement.classList.remove('hide-scroll');
  };

  const openBigImg = (path) => {
    imgPopup.style.display = 'flex';
    bigImage.setAttribute('src', path);
    rootElement.classList.add('hide-scroll');
  };

  previews.forEach(preview => {
    preview.addEventListener('click', (event) => {
      event.preventDefault();
      const path = event.target.parentNode.getAttribute('href');
      openBigImg(path);
    });

    preview.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const path = event.target.parentNode.getAttribute('href');
        openBigImg(path);
      }
    });
  });

  imgPopup.addEventListener('click', (event) => {
    if (event.target === imgPopup) {
      closeBigImg();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeBigImg();
    }
  });
};
