import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {
  materials = ['หมู', 'ไก่', 'เนื้อ', 'กุ้ง', 'ปลาหมึก', 'ยุง'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialPage');
  }

  subMaterial() {
    this.navCtrl.push('SubMaterialPage');
  }

}
