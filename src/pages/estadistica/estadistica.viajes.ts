import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstadisticaViaje } from '../../services/clases';
import { PageViajeCerrado } from '../viaje.cerrado/viaje-cerrado';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';

@Component({
  selector: 'page-estadistica-viajes',
  templateUrl: 'estadistica.viajes.html'
})
export class PageEstadisticaViajes {
  List:Array<EstadisticaViaje>;
  Mes:string;
  Dia:string;
  Titulo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, protected service:CustomServices) {
    if(this.navParams.data.Mes == undefined){
      this.service.getViajesTurno((data) => {
        this.List = data.List;
      });
      this.Titulo = "Viajes en este turno";
      this.service.OnNotAuthenticate = () => {
        this.navCtrl.setRoot(PageLogin);
      };
  }
    else{
      this.Mes = this.navParams.data.Mes;
      this.Dia = this.navParams.data.Dia;
      var aux = this.Mes.split("-");
      this.Titulo = "Viajes del dia " + this.Dia  + "-" + aux[1] + "-" + aux[0];
      this.service.getViajesDiarios(this.navParams.data.Dia, this.navParams.data.Mes, (data) => {
          this.List = data.List;
        });
      }
  }

  getViajes(item:EstadisticaViaje) {
    this.navCtrl.push(PageViajeCerrado, {
      Reserva: item.Reserva
    });
  }
  get getTotal(){
    if(this.List == null) return "";
    var sum = 0;
      this.List.forEach(element => {
        sum += this.service.getNumber(element.TotalFacturado);
      });
    return this.service.formatNumber(sum);
  }

  getcolor(fp):string{
    return this.service.setColorFormaPago(fp);
}

}
