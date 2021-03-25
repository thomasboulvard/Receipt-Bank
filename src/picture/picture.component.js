import template from './picture.component.html';
import { CameraComponent } from '../CameraComponent/camera.component';
import { NewDataComponent } from '../new-data/new-data.component';
import { PictureService } from '../shared/models/services';

export class PictureComponent {

    constructor() { }

    display(selector) {
        document.querySelector(selector).innerHTML = template;
        const picture = document.querySelector('.img-taken');
        picture.src = PictureService.getPicture();
        this.validate();
        this.displayCamera();
    }

    validate() {
        const validateBtn = document.querySelector('.selection');
        validateBtn.onclick = () => {
            this.displayNewData();
        }
    }

    displayNewData() {
        const newData = new NewDataComponent();
        newData.display("body");

    }

    displayCamera() {
        const deleteBtn = document.querySelector('.delete');
        deleteBtn.onclick = () => {
            const camera = new CameraComponent();
            camera.display("body");
        }
    }

};




