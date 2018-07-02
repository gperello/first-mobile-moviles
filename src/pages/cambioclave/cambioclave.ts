import { Component } from '@angular/core';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cambioclave',
  templateUrl: 'cambioclave.html'
})
export class PageCambioClave {
  actual:string = "";
  nueva:string = "";
  repetir:string = "";

  constructor(public service:CustomServices, private nav:NavController, private alert:AlertController) {
     
  }
  
 CambiarClave(){
    if(!this.Validar()){
      this.service.showAlert("Atencion", "Los datos ingresados no son correctos.")
    }
    else this.service.CambiarClave(this.actual, this.nueva, (data) =>{
      if(data.Result)this.service.showAlert("Cambio de Clave", "La nueva clave se registró correctamente.")
      else this.service.showAlert("Atencion", "Los datos proporcionados no son los correctos.")
    });
 }

 Validar():boolean{
   if(this.actual.length < 6 || this.nueva.length < 6 || this.repetir.length < 6)return false;
   if(this.nueva != this.repetir)return false;
   return true;
 };
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
}
