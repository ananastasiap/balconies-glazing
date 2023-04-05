import { checkNumInputs } from './index.js';

export const changeModalState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidths = document.querySelectorAll('#width');
  const windowHeights = document.querySelectorAll('#height');
  const windowTypes = document.querySelectorAll('#view_type');
  const windowProfiles = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, elements, property) => {
    elements.forEach((element, index) => {
      element.addEventListener(event, () => {
        switch(element.nodeName) {
          case 'SPAN' :
            state[property] = index;
            break;
          case 'INPUT' :
            if (element.getAttribute('type') === 'checkbox') {
              index === 0 ? state[property] = 'Холодное' : state[property] = 'Теплое';
              elements.forEach((box, anotherIndex) => {
                box.checked = false;
                if (index == anotherIndex) {
                  box.checked = true;
                }
              });
            } else {
              state[property] = element.value;
            }
            break;
          case 'SELECT' :
            state[property] = element.value;
            break;
        }
      });
    });
  };

  bindActionToElems('click', windowForms, 'form');
  bindActionToElems('input', windowWidths, 'width');
  bindActionToElems('input', windowHeights, 'height');
  bindActionToElems('change', windowTypes, 'type');
  bindActionToElems('change', windowProfiles, 'profile');
};