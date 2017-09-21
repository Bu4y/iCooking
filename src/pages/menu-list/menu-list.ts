import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {
  private menuList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menuList = [{
      name: 'ผัดฉ่าทะเล',
      image: 'https://img.wongnai.com/p/l/2017/09/14/5568f5f59e014d20968d79c66451af93.jpg',
      detail: 'ชื่อเมนู “ผัดฉ่าทะเล” ต้องนึกถึงเสียง ฉ่า ๆ ในกระทะเวลาผัด พร้อมกลิ่นหอมเครื่องเทศ จากสมุนไพรต่าง ๆ ส่วนรสชาติก็จัดจ้านโดนใจ ถ้าพร้อมแล้วมาดูวิธีทำกันเลยค่ะ',
      material: ['1. กุ้งขาว 100 กรัม', '2. เนื้อปลากะพง หั่น 300 กรัม', '3. ปลาหมึก 200 กรัม'],
      step: ['1. นำกระเทียมและพริกแดงจินดาโขลกให้เข้าด้วยกัน พอหยาบ ๆ พอค่ะ เพราะเราจะนำไปผัดต่อ',
        '2. ตั้งกระทะโดยใช้ไฟกลาง พอร้อนใส่น้ำมันลงไปค่ะ ตามด้วยส่วนผสมที่โขลกไว้ผัดให้หอมเลยค่ะ',
        '3. ปรุงรสด้วยซอสหอยนางรม น้ำตาลทราย และน้ำปลา คลุกเคล้าให้เข้ากัน ใส่ใบกะเพราตามลงไป แล้วปิดไฟได้เลยจ้า'
      ]
    },
    {
      name: 'ไส้ตันทอดกระเทียม',
      image: 'https://www.maeban.co.th/upfiles/blog/2784_25_22.jpg',
      detail: 'อาหารไทยแสนอร่อยง่ายๆ ที่นำไส้ตันต้มจนสุกนุ่ม หั่นเป็นชิ้นขนาดพอดีคำ เคล้าแป้งทอดกรอบที่เพิ่มกลิ่นด้วยกระเทียมโขลกจนส่งกลิ่นหอม แล้วนำไปทอดจนสุกเหลืองกรอบ เสิร์ฟพร้อมซอสพริก ที่ช่วยเพิ่มรสชาติให้เมนูนี้อร่อยเลิศมากยิ่งขึ้น',
      material: ['1. ไส้ตันต้มสุกหั่นชิ้น 200 กรัม', '2.น้ำปลา	1 ช้อนโต๊ะ', '3. พริกไทยป่น	1/4 ช้อนชา'],
      step: ['1. ผสมแป้งทอดกรอบ น้ำเปล่า น้ำปลา พริกไทยป่น กระเทียม ไส้ตัน คลุกเคล้าพอเข้ากัน',
        '2. ตั้งกระทะใส่น้ำมันพืชพอร้อน ใส่ไส้ตันลงทอดพอเหลืองกรอบ ตักขึ้นพักไว้ให้สะเด็ดน้ำมัน',
        '3. จัดใส่ภาชนะ เสิร์ฟพร้อมซอสพริก'
      ]
    },
    {
      name: 'กุ้งนึ่งมะนาว',
      image: 'https://www.maeban.co.th/upfiles/blog/2780_97_22.jpg',
      detail: 'กับข้าวไทยรสเลิศง่ายๆ กับกุ้งตัวโตเนื้อแน่น นึ่งจนสุกเปลี่ยนเป็นสีส้มหอม แล้วราดด้วยน้ำราดรสแซ่บจัดจ้าน ก็พร้อมหม่ำสัมผัสความอร่อยแล้วล่ะค่ะ',
      material: ['1. กุ้งสดตัดหัวออก	100 กรัม', '2.พริกขี้หนูสีเขียว สีแดงสับ อย่าง	1 เม็ด', '3. กระเทียมกลีบใหญ่สับ	2 กลีบ'],
      step: ['1. ผ่าหลังกุ้งทั้งเปลือกดึงเส้นดำออก ล้างให้สะอาดเรียงใส่จาน เตรียมไว้',
        '2. ผสมพริกขี้หนู กระเทียม น้ำมะนาว น้ำตาลทราย คนให้ละลาย',
        '3. โรยเกลือลงบนกุ้ง ยกขึ้นนึ่งประมาณ 4 นาที หรือจนกุ้งสุก (เมื่อกุ้งสุกแล้วควรยกลงทันที ถ้านึ่งต่อไปเรื่อย ๆ เนื้อกุ้งจะแข็งรับประทานไม่อร่อย)'
      ]
    }];
  }

  ionViewDidLoad() {
   
  }

  detail(item){
    console.log(item);
    this.navCtrl.push('DetailPage', item);
  }

}
