export const images = () => {
  const rootElement = document.documentElement;
  const workSection = document.querySelector('.works');
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');

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
  }

  const openBigImg = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      rootElement.classList.add('hide-scroll');
    }
  }

  workSection.addEventListener('click', (event) => {
    const target = event.target;
    openBigImg(event);

    if (target && target.matches('div.popup-images')) {
      closeBigImg();
    }
  });

  workSection.addEventListener('keydown', (event) => {
    const target = event.target;
    if (event.key === 'Enter' && target && target.classList.contains('preview')) {
      openBigImg(event);
    }

    if (event.key === 'Escape') {
      closeBigImg();
    }
  });
}