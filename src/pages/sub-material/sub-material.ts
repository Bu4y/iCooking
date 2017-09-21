import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubMaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-material',
  templateUrl: 'sub-material.html',
})
export class SubMaterialPage {
  subMaterial = ['ผักบุ้ง', 'กะเพรา', 'มะนาว', 'คะน้า', 'หัวหอม', 'ผักกาด'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubMaterialPage');
  }
  gotoMenulist() {
    this.navCtrl.push('MenuListPage');
  }
}
