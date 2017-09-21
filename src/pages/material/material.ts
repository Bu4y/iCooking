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
  materials = [
    { name: 'หมู', img: './assets/material-images/pig.jpeg' },
    { name: 'ไก่', img: './assets/material-images/chicken.jpg' },
    { name: 'เนื้อ', img: './assets/material-images/ox.jpg' },
    { name: 'กุ้ง', img: './assets/material-images/kung.png' },
    { name: 'ปลาหมึก', img: '/assets/material-images/fish-ink.jpg' },
    { name: 'ยุง', img: '/assets/material-images/yung.jpg' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialPage');
  }

  subMaterial() {
    this.navCtrl.push('SubMaterialPage');
  }

}
