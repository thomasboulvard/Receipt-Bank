import Tesseract from 'tesseract.js';
import template from './new-data.component.html';
import { PictureComponent } from '../picture/picture.component';
// import { DetailComponent } from '../DetailComponent/informations';
import { CameraComponent } from '../CameraComponent/camera.component';
import { DetailComponent } from '../DetailComponent/detail.component';

export class NewDataComponent {

  constructor() { }

  display(selector) {
    document.querySelector(selector).innerHTML = template;
    const close = document.querySelector('.green');
    close.onclick = (e) => {
      e.preventDefault();
      this.displayCamera();
    }

    const analyse = document.querySelector('.analyse');
    analyse.onclick = (e) => {
      e.preventDefault();
      this.displayDetail();
    }
  }

  displayCamera() {
    const home = new CameraComponent();
    home.display("body");
  }


  chosseCriteria() {

  }


  displayDetail() {
    const detail = new DetailComponent();
    detail.display("main");
  }

};





//     const btnAnalyseNewData = document.querySelector(".analyse");
//     btnAnalyseNewData.onclick = (e) => {
//         Tesseract.recognize(
//             "./images/facture2.jpg",
//             'fra',
//             { logger: m => console.log(m) }
//           )
//           .then(({ data: { text } }) => {
//             console.log(text);
//           });
//         e.preventDefault();
//     };
// };