import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { PageHome } from '../pages/home/home';
import { PageEstadistica } from '../pages/estadistica/estadistica';
import { PageLogin } from '../pages/login/login';
import { PageEstadisticaViajes } from '../pages/estadistica/estadistica.viajes';
import { CustomServices } from '../services/custom.services';
import { PageConsejos } from '../pages/consejos/consejos';
import { PageCambioClave } from '../pages/cambioclave/cambioclave';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageHome;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public service:CustomServices) {
    this.initializeApp();
    if(this.service.UserData() == null) this.rootPage = PageLogin;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: PageHome },
      { title: 'Viajes del dia', component: PageEstadisticaViajes },
      { title: 'Facturacion', component: PageEstadistica },
      { title: 'Consejos Útiles', component: PageConsejos },
      { title: 'Cambio de Clave', component: PageCambioClave },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any hgher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  Logout(){
    this.service.Logout((data) =>{
      this.nav.setRoot(PageLogin);
    });
  }

}
