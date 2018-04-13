import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CierreDeViaje } from '../../services/clases';
import { PageHome } from '../home/home';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PageLogin } from '../login/login';
import { CustomServices } from '../../services/custom.services';

@Component({
  selector: 'page-cierre',
  templateUrl: 'cierre.html'
})
export class PageCierre {
  Reserva:number;
  Cierre:CierreDeViaje = new CierreDeViaje();

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:CustomServices, private alert:AlertController) {
      this.Reserva = navParams.data.Reserva;
      this.service.RecalcularViaje(this.Reserva, data =>{
          this.Cierre = data;
      });
      this.service.OnNotAuthenticate = () => {
        this.navCtrl.setRoot(PageLogin);
      };
  }
  
  Cerrar(){
    this.service.CerrarViaje(this.Cierre, data => {
      this.service.showAlert("Viaje Cerrado", "El viaje se cerró correctamente.", () =>{
          this.navCtrl.setRoot(PageHome);
      });
    });
  }
  Volver(){
    this.navCtrl.setRoot( TabsPage, { reserva : this.Reserva });
  }

  showImporte(title,message, campo) {
    let prompt = this.alert.create({
      title: title,
      message: message,
      inputs: [
        {
          name: 'Importe',
          placeholder: 'Importe',
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            if(campo == 1) this.Cierre.Peajes = this.service.formatNumber(data.Importe);
            if(campo == 2) this.Cierre.Estacionamiento = this.service.formatNumber(data.Importe);
          }
        }
      ]
    });
    prompt.present();
  }


  public get SumTotal() : string {
    if(this.Cierre == null) return "";
    if(this.Cierre.ImporteKm == undefined) return "";
    var sum = this.service.getNumber(this.Cierre.ImporteKm);
    sum += this.service.getNumber(this.Cierre.ImporteEspera);
    sum += this.service.getNumber(this.Cierre.Estacionamiento);
    sum += this.service.getNumber(this.Cierre.Peajes);
    return this.service.formatNumber(sum);
  }

}
