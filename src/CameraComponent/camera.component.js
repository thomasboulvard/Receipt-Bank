import template from './camera.component.html';
import { PictureComponent } from '../picture/picture.component';
import { PictureService } from '../shared/models/services';

export class CameraComponent {

    constructor() { }

    display(selector) {
        document.querySelector(selector).innerHTML = template;
        this.permission();
        const camera = document.querySelector(".action");
        camera.innerHTML = '<button class="take-picture btn-camera"><span class="material-icons">camera</span></button>'
        camera.onclick = () => {
            this.takePicture();
        }
    }

    permission() {
        cordova.plugins.diagnostic.requestRuntimePermission((status) => {
            alert("coucou");
            switch (status) {
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                    this.activeCamera();
                    alert("Bob");
                    break;
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                    this.reactivate();
                    alert("pasrequete");
                    break;
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                    this.reactivate();
                    alert("denied");
                    break;
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                    this.reactivate();
                    alert("refuse");
                    break;
            }
        }, (error) => {
            console.error("The following error occurred: " + error);
        }, window.cordova.plugins.diagnostic.permission.CAMERA);
    }

    activeCamera() {
        navigator.mediaDevices.getUserMedia({ audio: false, video: true })
            .then((stream) => {
                var video = document.querySelector('.webcam');
                if ("srcObject" in video) {
                    video.srcObject = stream;
                } else {
                    video.src = window.URL.createObjectURL(stream);
                }
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch((err) => {
                // const btnAskAgain = document.querySelector('.action');
                // btnAskAgain.innerHTML = '<a class="waves-effect waves-light btn-large cta">Activez la camera pour continuer</a>'
                // btnAskAgain.onclick = () => {
                //     displayMedia();
                // };
            });
    }

    takePicture(selector) {
        const canvas = document.querySelector('canvas');
        const video = document.querySelector('video');
        const image = document.querySelector('.img-taken');
        const contexte = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        PictureService.setPicture(canvas.toDataURL());
        this.displayPicture();
    }

    reactivate() {
        this.activeCamera();
    }

    displayPicture() {
        const picture = new PictureComponent();
        picture.display("body");
    }
};