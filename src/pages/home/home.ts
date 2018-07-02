import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform, AlertController, ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Usuario, ViajeList } from '../../services/clases';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';
import { PageViaje } from '../viaje/viaje';
import { Geoposition } from '@ionic-native/geolocation';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class PageHome {
    User:Usuario;
    Viajes:Array<ViajeList>;
    Direccion:string;
    VersionActual:number = 22;
    NuevaVersion:number = 0;

    constructor(protected nav:NavController, private platform:Platform, protected service:CustomServices, 
      private ref:ChangeDetectorRef, private alert:AlertController,private toastCtrl: ToastController) {
        this.User = this.service.UserData();
        this.User.Estado = this.User.EstadoId == 1 ? "secondary" : "danger";
        this.service.getViajes((data) => {
          this.Viajes = data.List;
          this.NuevaVersion = data.Version;
        });
        this.platform.ready().then(() => {
          this.service.getViajes((data) => {
            this.Viajes = data.List;
          });
          this.service.getPosition((direccion:string, pos:Geoposition) => {
            this.Direccion = direccion;
            this.ref.detectChanges();
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

    MismaVersion(){
        return this.VersionActual == this.NuevaVersion;
    };
    GoToVersion(){
        window.open('https://play.google.com/store/apps/details?id=first.moviles.ar&hl=es', '_blank');
    };
    EnviarPosicion(){
      this.service.getPosition((direccion:string, pos:Geoposition) => {
        this.service.EnviarPosicion(pos);
        let toast = this.toastCtrl.create({
          message: 'Posición enviada al servidor',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.Direccion = direccion;
        this.ref.detectChanges();
      });
    }
}
