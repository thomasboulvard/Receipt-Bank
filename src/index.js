import "materialize-css";
import { CameraComponent } from "./CameraComponent/camera.component";
import { HomeComponent } from "./HomeComponent/home.component";
import { NavBarComponent } from "./NavBarComponent/navbar.component";

const navBar = new NavBarComponent();
navBar.display("header");

if (window.cordova) {
    window.document.addEventListener("deviceready", () => {
        alert("Sur device");
        const home = new HomeComponent();
        home.display("main");
    });
} else {
    const home = new HomeComponent();
    home.display("main");
}