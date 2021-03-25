import template from './navbar.component.html';
// import { ImportFileComponent } from '../import-photo/import-photo';
// import { AssistComponent } from '../assist/assist';
// import { AboutComponent } from '#!';

export class NavBarComponent {

    constructor() { }

    display(selector) {
        document.querySelector(selector).innerHTML = template;
        M.Sidenav.init(document.querySelectorAll(".sidenav"));
        const listNavBar = document.querySelectorAll(".link");
        listNavBar.forEach((linkEle) => {
        })
        const importfile = document.querySelector('.import-file');
        importfile.onclick = (e) => {
            e.preventDefault();
            // this.displayImportFile();
        }
        const assist = document.querySelector('.assist');
        assist.onclick = (e) => {
            e.preventDefault();
            // this.displayDetail();
        }
        const about = document.querySelector('.about');
        about.onclick = (e) => {
            e.preventDefault();
            this.displayDetail();
        }
    }

    displayImportFile() {
        const importfile = new ImportFileComponent();
        importfile.display("nav");
    }

    displayAssist() {
        const assist = new AssistComponent();
        assist.display("nav");
    }

    displayAbout() {
        const about = new AboutComponent();
        about.display("nav");
    }
};