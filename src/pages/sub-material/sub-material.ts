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
  subMaterial = [{ name: 'ผักบุ้ง', image: './assets/submaterial-images/img1.jpg' },
  { name: 'กะเพรา', image: './assets/submaterial-images/img2.jpg' },
  { name: 'มะนาว', image: './assets/submaterial-images/img3.jpg' },
  { name: 'คะน้า', image: './assets/submaterial-images/img4.jpg' },
  { name: 'หัวหอม', image: './assets/submaterial-images/img5.jpg' },
  { name: 'ผักกาด', image: './assets/submaterial-images/img6.jpg' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubMaterialPage');
  }
  gotoMenulist() {
    this.navCtrl.push('MenuListPage');
  }
}
