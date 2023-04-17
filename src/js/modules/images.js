export const images = () => {
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
  }

  workSection.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
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