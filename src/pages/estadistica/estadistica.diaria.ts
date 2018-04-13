import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstadisticaDiaria } from '../../services/clases';
import { PageEstadisticaViajes } from './estadistica.viajes';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';

@Component({
  selector: 'page-estadistica-diaria',
  templateUrl: 'estadistica.diaria.html'
})
export class PageEstadisticaDiaria {
  List:Array<EstadisticaDiaria>;
  Mes:string;
  constructor(public navCtrl: NavController, protected navParams: NavParams, protected service:CustomServices) {
    this.Mes = this.navParams.data.Mes;
      this.service.getEstadisticaDiaria(this.navParams.data.Mes, (data) => {
        this.List = data.List;
      });
      this.service.OnNotAuthenticate = () => {
        this.navCtrl.setRoot(PageLogin);
      };
  }

  getViajes(item:EstadisticaDiaria) {
    this.navCtrl.push(PageEstadisticaViajes, {
      Dia: item.Dia,
      Mes: this.Mes
    });
  }
  get getTotal(){
    if(this.List == null)return "";
    var sum = 0;
      this.List.forEach(element => {
        sum += this.service.getNumber(element.TotalFacturado);
      });
    return this.service.formatNumber(sum);
  }

}
