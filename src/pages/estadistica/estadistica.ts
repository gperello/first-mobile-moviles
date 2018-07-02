import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { EstadisticaMensual } from '../../services/clases';
import { PageEstadisticaDiaria } from './estadistica.diaria';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';

@Component({
  selector: 'page-estadistica',
  templateUrl: 'estadistica.html'
})
export class PageEstadistica {
  List:Array<EstadisticaMensual>;
  constructor(protected nav: NavController, public navParams: NavParams, public service:CustomServices, private alert:AlertController) {
      this.service.getEstadisticaMensual((data) => {
        this.List = data.List;
      });
      this.service.OnNotAuthenticate = () => {
        this.nav.setRoot(PageLogin);
      };
  }

  getViajes(item:EstadisticaMensual) {
    this.nav.push(PageEstadisticaDiaria, {
      Mes: item.Mes
    });
  }

  Logout(){
    let alert = this.alert.create({
      title: 'Cerrar Sesión?',
      message: 'Si cierra sesión su móvil dejará de posicionar',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'SI',
          handler: () => {
            this.service.Logout((data) =>{
                this.nav.setRoot(PageLogin);
            });
          }
        }
      ]
    });
    alert.present();
  };


  get getTotal(){
    if(this.List == null)return "";
    var sum = 0;
    this.List.forEach(element => {
      sum += this.service.getNumber(element.TotalFacturado);
    });
    return this.service.formatNumber(sum);
  }

}
