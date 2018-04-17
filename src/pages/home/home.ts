import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Usuario, ViajeList } from '../../services/clases';
import { TabsPage } from '../tabs/tabs';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';
import { PageViaje } from '../viaje/viaje';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class PageHome {
    User:Usuario;
    Viajes:Array<ViajeList>;
    Direccion:string;

    constructor(protected nav:NavController, private platform:Platform, protected service:CustomServices) {
      this.User = this.service.UserData();
      this.User.Estado = this.User.EstadoId == 1 ? "secondary" : "danger";
      this.service.getPosition((direccion:string) => {
        this.Direccion = direccion;
      });
      this.service.initComponent((data) => {
        this.Viajes = data.List;
      });
      this.platform.resume.subscribe(() => {
        this.service.initComponent((data) => {
          this.Viajes = data.List;
        });
      });
      this.service.OnNotAuthenticate = () => {
        this.nav.setRoot(PageLogin);
      };
    }
    get NoHayViajes(){
      return !(this.Viajes == null || this.Viajes.length == 0);
    }

    setReserva(reserva) {
      this.nav.push(PageViaje, { reserva: reserva });
    }

    setcolor(estado):string{
      return this.service.setColorEstado(estado);
    }

    Logout(){
      this.service.Logout((data) =>{
          this.nav.setRoot(PageLogin);
      });
  }

}
