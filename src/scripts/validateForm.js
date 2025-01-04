"use strict";

const fileNameDisplays = document.querySelectorAll('.giveaway__file-name_display');

export function validate(formData) {
    const { firstName, email, inputFileImage, checkbox } = formData;

    if (firstName.value.trim() !== '' && email.value.trim() !== '' && inputFileImage.value.trim() !== '' && checkbox.checked) return true;

    validateInputText(firstName);
    validateInputEmail(email);
    validateInputCheckbox(checkbox);
    validateInputFile(inputFileImage);

    firstName.addEventListener('input', () => validateInputText(firstName));
    email.addEventListener('input', () =>  validateInputEmail(email));
    checkbox.addEventListener('input', () => validateInputCheckbox(checkbox));

    function validateInputText(input) {
        const message = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('error-color');
            message.textContent = 'Заполните пустое поле';
        } else {
            input.classList.remove('error-color');
            message.textContent = '';
        }
    }

    function validateInputEmail(input) {
        const message = input.nextElementSibling;
        const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (input.value.trim() === '') {
            input.classList.add('error-color');
            message.textContent = 'Заполните пустое поле';
        } else if (!isEmailValide(input.value.trim())) {
            input.classList.add('error-color');
            message.textContent = 'Введите корректный email';
        } else {
            input.classList.remove('error-color');
            message.textContent = '';
        }

        function isEmailValide(input) {
            return emailRegexp.test(input);
        }
    }

    function validateInputCheckbox(cbx) {
        const message = cbx.parentElement.nextElementSibling;

        if (!cbx.checked) {
            message.textContent = 'Подтвердите свое согласие на обработку персональных данных';
        } else {
            message.textContent = '';
        }
    }

    function validateInputFile(input) {
        if (input.value.trim() === '') {
            fileNameDisplays[0].textContent = 'Пожалуйста, выберите изображение в формате PNG, JPG или PDF.';
        } 
    }

    inputFileImage.addEventListener('change', (event) => {
        const selectedFile = event.target.files[0];
        const fileName = selectedFile.name;
        const allowedTypes = [ 'image/png', 'image/jpeg', 'application/pdf' ];
    
        if (selectedFile) {
            selectedInputFile();
        } else {
            fileNameDisplays.forEach(display => display.style.display = 'block');
        }
    
        function selectedInputFile() {
            if (allowedTypes.includes(selectedFile.type)) {
                fileNameDisplays[0].textContent = fileName;
            } else {
                fileNameDisplays[0].textContent = "Пожалуйста, выберите изображение в формате PNG, JPG или PDF.";
                this.value = '';
            } 
        }
    });
}

