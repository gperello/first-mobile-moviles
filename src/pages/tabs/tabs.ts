import { Component } from '@angular/core';
import { PageViaje } from '../viaje/viaje';
import { PageMapa } from '../mapa/mapa';
import { NavParams, Tabs, Tab, NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { CustomServices } from '../../services/custom.services';
import { PageLogin } from '../login/login';
import { CallNumber } from '@ionic-native/call-number';
import { Viaje } from '../../services/clases';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('tabs') tabs: Tabs;
  @ViewChild('tab1') tab1: Tab;
  @ViewChild('tab2') tab2: Tab;
  Viaje:Viaje;

  constructor(protected nav:NavController, private params:NavParams, protected service:CustomServices, private callNumber: CallNumber) {
    this.service.getViaje(this.params.data.reserva, (data) =>{
        this.Viaje = data;
        this.tab1.root = PageViaje;
        this.tab1.rootParams = data;
        this.tab2.root = PageMapa;
        this.tab2.rootParams = data;
        this.tabs.select(0);
      });
      this.service.OnNotAuthenticate = () => {
        this.nav.setRoot(PageLogin);
      };
  
  }

  llamar(){
    this.callNumber.callNumber(this.Viaje.Telefono, true)
  }

}
