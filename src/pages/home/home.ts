import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { TodosPage } from '../todos/todos';
import { CameraPage } from '../camera/camera';
import { QrcodePage } from '../qrcode/qrcode';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { YoutubePage } from '../youtube/youtube';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNews() {
    this.navCtrl.push(NewsPage);
  }

  goToTodos() {
    this.navCtrl.push(TodosPage);
  }

  goToCamera() {
    this.navCtrl.push(CameraPage);
  }

  goToQrCode() {
    this.navCtrl.push(QrcodePage);
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goToYoutube() {
    this.navCtrl.push(YoutubePage);
  }
}
