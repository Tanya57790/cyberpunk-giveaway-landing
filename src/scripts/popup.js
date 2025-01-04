"use strict";

const wrapper = document.querySelector('.wrapper');
const section = document.querySelector('.section-giveaway');

const firstName = document.getElementById('giveaway__first-name');
const email = document.getElementById('giveaway__email');
const inputFileImage = document.getElementById('giveaway__inputFile');
const checkbox = document.getElementById('giveaway__checkbox');

section.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        firstName: firstName,
        email: email,
        inputFileImage: inputFileImage,
        checkbox: checkbox
    };

    try {
        const { validate } = await import('./validateForm-dist.js');
        const isValid = validate(formData);

        if (isValid) {
            document.body.style.overflow = 'hidden';
            createPopup();
        }
    } catch (error) {
        console.error('Ошибка при загрузке или выполнении validateForm-dist.js:', error);
    }

    function createPopup() {
        const popup = document.createElement('div');
        const span = document.createElement('span');
        const cross = document.createElement('span');

        const message = 'Спасибо за участие!';
        cross.textContent = 'X';

        addClass(popup, span, cross);

        span.append(message);
        popup.append(span, cross);
        wrapper.append(popup);

        positionPopup(popup);

        window.addEventListener('resize', () => positionPopup(popup));
        
        deletePopup(popup, cross);
    }

    function addClass(popup, span, cross) {
        popup.classList.add('giveaway__pop-up');
        span.classList.add('giveaway__pop-up-message');
        cross.classList.add('giveaway__pop-up-cross');
    }

    function positionPopup(popup) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;

        const left = (windowWidth - popupWidth) / 2;
        const top = (windowHeight - popupHeight) / 2;

        popup.style.left = left + 'px';
        popup.style.top = top + scrollY + 'px';
    }

    function deletePopup(popup, cross) {
        cross.onclick = () => {
            popup.remove();
            setTimeout(() => location.reload(), 500); //Имитация загрузки данных на сервер
        }
    }
});
    



