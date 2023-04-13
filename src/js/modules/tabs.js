export const tabs = ({headerSelector, tabSelector, contentSelector, activeClass, display = 'block'}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach(content => {
      content.style.display = 'none';
    });

    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (numOfTab = 0) => {
    contents[numOfTab].style.display = display;
    tabs[numOfTab].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event) => {
    const target =  event.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
                  target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
          tabs.forEach((tab, numOfTab) => {
            if(target == tab || target.parentNode == tab) {
              hideTabContent();
              showTabContent(numOfTab);
        }
      });
    }
  });

  tabs.forEach((tab, numOfTab) => {
    tab.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        hideTabContent();
        showTabContent(numOfTab);
      }
    });
  });

};
