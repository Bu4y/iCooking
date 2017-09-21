import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  detail = {
    name: 'กระเพราหมูสับ + ไข่ดาว',
    image: 'http://www.jjdelivery.com/new/images/product/00062.jpg',
    detail: 'กระเพราหมูสับ + ไข่ดาว อร๊อย อร่อย',
    material: ['1. หมูสับ', '2. ไข่ 1 ฟอง'],
    step: ['1. เทน้ำมัน', '1. ทอดไข่']
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.detail = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
