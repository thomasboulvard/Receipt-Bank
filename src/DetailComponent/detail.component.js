import template from "./detail.component.html";

export class DetailComponent {

    constructor() {}

    display(selector) {
        document.querySelector(selector).innerHTML = template;
        const shareBtn = document.querySelector('.send-logo');
        shareBtn.onclick = (e) => {
            e.preventDefault();
            this.share();
        }
    }

    share() {



    }

}


//     const btnBackInformations = document.querySelector(".brand-logo");
//     btnBackInformations.onclick = (e) => {
//         displayMyData(element);
//         e.preventDefault();