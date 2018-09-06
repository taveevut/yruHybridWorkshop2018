import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email: string;
  name: string;
  password: string;

  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }

  doSave() {
    var url = 'http://nakomah.com/api/httpapi.php';
    let fdata = new FormData();
    fdata.append('email', this.email);
    fdata.append('name', this.name);
    fdata.append('password', this.password);

    this.data = this.http.post(url, fdata);
    this.data.subscribe(data => {
      alert(data.message);
      this.email = '';
      this.name = '';
      this.password = '';
    });
  }

}
