import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-inicial',
  templateUrl: 'menu-inicial.html',
})
export class MenuInicialPage {
  public nome_usuario:string="Taís Rodrigues Sad";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number,num2:number): void
  {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,99);
  }

}
