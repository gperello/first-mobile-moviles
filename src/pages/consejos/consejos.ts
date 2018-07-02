import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';


@Component({
    selector: 'page-consejos',
    templateUrl: 'consejos.html'
})
export class PageConsejos {

    constructor(private nav:NavController, private alert:AlertController, private service:CustomServices) {
       
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
}
