// import { displayPopup } from '../share-popup/share-popup';
// import template from './my-data.html';
import template from './list-receipt.component.html';

export class ListReceiptComponent {

    constructor() {}


    display(selector) {
        document.querySelector(selector).innerHTML = template;
        const shareBtn = document.querySelector('.share-buton');
        shareBtn.onclick = (e) => {
            e.preventDefault();
            this.share();

        const chartBtn = document.querySelector('.diagram-buton');
        chartBtn.onclick = (e) => {
            e.preventDefault();
            this.diagram();
        }


    }
    }

    share() {


    }


    diagram() {



    }

}