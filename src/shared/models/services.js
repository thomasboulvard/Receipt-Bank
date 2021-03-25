import { Picture } from './picture.model';

const picture = new Picture();

export class PictureService {

    constructor() { }

    static getPicture() {
        return picture.srcImage;
    }

    static setPicture(sourceDeImage) {
        picture.srcImage = sourceDeImage;
    }
}

