import M from 'materialize-css';

M.AutoInit();

const messageDecryptEl = document.querySelector('#message-show');
const formEl = document.querySelector('form');
const inputEl = document.querySelector('#inputpesan');
const inputResultLinkEl = document.querySelector('#linkinput');
const formIsianPesan = document.querySelector('#formpesan');
const formLinkPesan = document.querySelector('#formlinkpesan');

const tombolSalinEl = document.querySelector('#tombol-salin');
const tombolKembaliEl = document.querySelector('#tombol-kembali');

// Ambil karakter hash di url link
const { hash } = window.location;
const replacedString = hash.replace('#', '');
const isiPesanUrl = atob(replacedString);

const generateUrlEncrypt = inputvalue => {
    const encryptValues = btoa(inputvalue);
    const urlEncrypted = `${window.location}#${encryptValues}`;
    inputResultLinkEl.value = urlEncrypted;

    inputResultLinkEl.select();
};

const showPesanUrl = msg => {
    if (msg && msg.length > 0) {
        formIsianPesan.classList.add('hide');
        messageDecryptEl.classList.remove('hide');

        const pesanH1El = messageDecryptEl.querySelector('h1');
        pesanH1El.innerHTML = isiPesanUrl;
    }
};

// Tunjukkan tampilan pesan jika ada pesan di urlnya
showPesanUrl(isiPesanUrl);

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = inputEl.value;

    if (inputValue) {
        formIsianPesan.classList.add('hide');
        formLinkPesan.classList.remove('hide');
        generateUrlEncrypt(inputValue);
    }
});

tombolSalinEl.addEventListener('click', () => {
    inputResultLinkEl.select();
    document.execCommand('copy');
});

tombolKembaliEl.addEventListener('click', () => {
    const aElement = document.createElement('a');
    aElement.href = './index.html';
    aElement.setAttribute('rel', 'noopener noreferrer');
    aElement.click();
});
