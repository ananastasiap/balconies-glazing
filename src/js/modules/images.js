export const images = () => {
  const rootElement = document.documentElement;
  const workSection = document.querySelector('.works');
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.append(bigImage);

  const closeBigImg = () => {
    imgPopup.style.display = 'none';
    rootElement.classList.remove('hide-scroll');
  }

  workSection.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      rootElement.classList.add('hide-scroll');
    }

    if (target && target.matches('div.popup')) {
      closeBigImg();
    }

  })

  workSection.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeBigImg();
    }
  });
}