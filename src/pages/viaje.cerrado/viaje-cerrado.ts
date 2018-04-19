import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Viaje } from '../../services/clases';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';

@Component({
  selector: 'page-viaje-cerrado',
  templateUrl: 'viaje-cerrado.html'
})
export class PageViajeCerrado {
  Reserva:number;
  Viaje:Viaje = new Viaje();

  constructor(protected nav:NavController, private navParams: NavParams, protected service:CustomServices) {
      this.Reserva = this.navParams.data.Reserva;
      this.service.getViaje(this.Reserva, (data)=>{
        this.Viaje = data;
      });
      this.service.OnNotAuthenticate = () => {
        this.nav.setRoot(PageLogin);
      };
  }
 
  public get SumTotal() : string {
    if(this.Viaje == null) return "";
    if(this.Viaje.ImporteKm == undefined) return "";
    var sum = this.service.getNumber(this.Viaje.ImporteKm);
    sum += this.service.getNumber(this.Viaje.ImporteEspera);
    sum += this.service.getNumber(this.Viaje.Estacionamiento);
    sum += this.service.getNumber(this.Viaje.Peajes);
    return this.service.formatNumber(sum);
  }

    ocultarCampo(campo){
        return this.service.ocultarCampo(campo);
    }
    setColorEstado(estado){
        return this.service.setColorEstado(estado);
    }
    setColorFormaPago(fp){
        return this.service.setColorFormaPago(fp);
    }
    OcultarCampos():boolean{
      return !(this.Viaje.Regreso || this.Viaje.SolicitaVoucher || this.Viaje.Importante);
    }
  
}
