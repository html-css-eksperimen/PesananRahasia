import M from 'materialize-css';

M.AutoInit();

// Bersihkan karakter hash dari url link
const { hash } = window.location;
const replacedString = hash.replace('#', '');
const urlLocation = atob(replacedString);
console.log(urlLocation);

const formEl = document.querySelector('form');
const inputEl = document.querySelector('#inputpesan');
const inputResultLinkEl = document.querySelector('#linkinput');

const formIsianPesan = document.querySelector('#formpesan');
const formLinkPesan = document.querySelector('#formlinkpesan');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = inputEl.value;

    if (inputValue) {
        formIsianPesan.classList.add('hide');
        formLinkPesan.classList.remove('hide');

        const encryptValues = btoa(inputValue);
        const urlEncrypted = `${window.location}#${encryptValues}`;
        inputResultLinkEl.value = urlEncrypted;

        inputResultLinkEl.select();
    }
});
