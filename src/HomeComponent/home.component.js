import template from './home.component.html';
import { CameraComponent } from '../CameraComponent/camera.component';
import { ListReceiptComponent } from '../ListReceiptComponent/list-receipt.component';

export class HomeComponent {

    constructor() { }

    display(selector) {
        document.querySelector(selector).innerHTML = template;
        const action = document.querySelector(".action");
        action.innerHTML = '<button class="take-picture btn-camera"><span class="material-icons">camera</span></button>'
        action.onclick = () => {
            this.displayCamera();
            this.openFolder();
        }
    }

    addFolder() {


    }

    openFolder() {
        const list = new ListReceiptComponent();
        list.display("main");
    }

    displayCamera() {
        const camera = new CameraComponent();
        camera.display("body");
    }

};








// export const displayHome = (element) => {
//     displayNavBar(document.querySelector('header'));
//     element.innerHTML = template;

//     const btnCamera = document.querySelector(".action");
//     btnCamera.innerHTML = '<button class="take-picture btn-camera"><span class="material-icons">camera</span></button>'
//     btnCamera.onclick = (e) => {
//         displayCamera(element);
//         e.preventDefault();
//     };