import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { Viaje } from '../../services/clases';
import { PageHome } from '../home/home';
import { PageCierre } from '../cierre/cierre';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';

@Component({
  selector: 'page-viaje',
  templateUrl: 'viaje.html'
})
export class PageViaje {
  public Viaje:Viaje;

  constructor(private navParams: NavParams,protected nav: NavController, protected service:CustomServices, 
    private alert:AlertController) {
      this.Viaje = this.navParams.data;
      this.service.OnNotAuthenticate = () => {
        this.nav.setRoot(PageLogin);
      };

  }

  setHome(){
    this.nav.setRoot(PageHome);
  }

  Recargar(){
    this.service.getViaje(this.Viaje.Reserva, (data) =>{
      this.Viaje = data;
    });
  }
  
  Cerrar(){
    this.nav.push(PageCierre, {Reserva: this.Viaje.Reserva});
  }

  Aceptar(){
    this.service.AceptarViaje(this.Viaje.Reserva, (data) => {
      this.Viaje.EstadoId = 3;
      this.Viaje.Estado = "Aceptado";
    });
  }
  ConfirmarRechazo(){
    let alert = this.alert.create({
      title: 'RECHAZO DE VIAJE',
      message: 'Realmente quiere rechazar el viaje?',
      buttons: [
        {
          text: 'SI',
          handler: () => {
            this.Rechazar();
          }
        },
        {
          text: 'NO',
        }
      ]
    });
    alert.present();
  }
  Rechazar(){
    this.service.AceptarViaje(this.Viaje.Reserva, (data) => {
      this.nav.setRoot(PageHome);
  });

  }
  LlegadaCliente(){
    this.service.LlegadaCliente(this.Viaje.Reserva, (data) => {
      this.Viaje.EstadoId = 5;
      this.Viaje.Estado = "En Curso";
  });

  }
  ComenzarEspera(){
    this.service.ComenzarEspera(this.Viaje.Reserva, (data) => {
      this.service.showAlert("Espera iniciada", "La espera termina automaticamenta cuando el movil se aleja mas de 500 m. del lugar.");
  });

  }

  VisibleAceptarRechazar():boolean{
    return this.Viaje.EstadoId != 2;
  }
  VisibleLlegadaCliente():boolean{
    return this.Viaje.EstadoId != 3;
  }
  VisibleComenzarEspera():boolean{
    return this.Viaje.EstadoId != 5;
  }
  OcultarCampo(campo:string):boolean{
    return this.service.ocultarCampo(campo);
  }
  setcolorestado():string{
    if(this.Viaje == null) return "";
    this.service.setColorEstado(this.Viaje.EstadoId);
}
setcolorfp():string{
  if(this.Viaje == null) return "";
  this.service.setColorFormaPago(this.Viaje.FormaPagoId);
}

}