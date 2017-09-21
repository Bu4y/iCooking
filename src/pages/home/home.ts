import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  material() {
    this.navCtrl.push('MaterialPage');
  }

  submaterial() {
    this.navCtrl.push('SubMaterialPage');
  }

  menulist() {
    this.navCtrl.push('MenuListPage');
  }

  detail() {
    this.navCtrl.push('DetailPage');
  }

}
