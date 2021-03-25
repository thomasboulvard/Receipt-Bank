import template from './share-popup.html';

export const displayPopup = (element) => {
    element.innerHTML = template;

    const btnClosePopup = document.querySelector("#close-icon");
    btnClosePopup.onclick = () => {
        console.log('Je ferme ma popup');
    };

    const btnFacebookShare = document.querySelector("#fb-buton");
    btnFacebookShare.onclick = (e) => {
        console.log('Je partage via Facebook');
        e.preventDefault();
    };

    const btnEmailShare = document.querySelector("#email-buton");
    btnEmailShare.onclick = (e) => {
        console.log('Je partage via email');
        e.preventDefault();
    };

    const btnDownload = document.querySelector("#download-buton");
    btnDownload.onclick = (e) => {
        console.log('Je télécharge mes données');
        e.preventDefault();
    };






};