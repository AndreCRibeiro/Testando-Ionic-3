import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers:
  [
    MovieProvider
  ]
})
export class MenuInicialPage {
  public objeto_feed = 
  {
    titulo:"Taís Rodrigues Sad",
    data:"9 de março de 1997",
    descricao:"Te amo Déco!",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h atrás"
  }
  public nome_usuario:string="Taís Rodrigues Sad";

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1:number,num2:number): void
  {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
      console.log(objeto_retorno);
    }, error=> {
      console.log(error);
    }
  )
  }

}
