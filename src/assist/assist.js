import template from './assist.html';

export const displayAssist = (element) => {
    element.innerHTML = template;

    const btnContact = document.querySelector(".contact");
    btnContact.onclick = (e) => {
        console.log('renvoie vers la boite mail de l utilisateur avec adresse email pré-remplie');
        e.preventDefault();
    };





};