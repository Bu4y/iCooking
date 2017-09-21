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
    name: '',
    image: '',
    detail: '',
    material: [''],
    step: ['']
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detail = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
