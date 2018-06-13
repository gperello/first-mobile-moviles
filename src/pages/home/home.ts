import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Usuario, ViajeList } from '../../services/clases';
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
    VersionActual:number = 21;
    NuevaVersion:number = 0;

    constructor(protected nav:NavController, private platform:Platform, protected service:CustomServices, private ref:ChangeDetectorRef) {
        this.User = this.service.UserData();
        this.User.Estado = this.User.EstadoId == 1 ? "secondary" : "danger";
        this.service.getViajes((data) => {
          this.Viajes = data.List;
          this.NuevaVersion = data.Version;
        });
        this.service.getPosition((direccion:string) => {
          this.Direccion = direccion;
          this.ref.detectChanges();
        });
        this.platform.resume.subscribe(() => {
          this.service.getViajes((data) => {
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
    MismaVersion(){
        return this.VersionActual == this.NuevaVersion;
    };
    GoToVersion(){
        window.open('https://play.google.com/store/apps/details?id=first.moviles.ar&hl=es', '_blank');
    };
}
