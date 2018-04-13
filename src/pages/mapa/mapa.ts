import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Viaje } from '../../services/clases';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { PageLogin } from '../login/login';
import { PageHome } from '../home/home';
import { CustomServices } from '../../services/custom.services';


declare var google;


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class PageMapa {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker1 = new google.maps.Marker;
  marker2 = new google.maps.Marker;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  public Viaje:Viaje;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    private launchNavigator: LaunchNavigator, protected service:CustomServices) {
      this.Viaje = this.navParams.data;
      this.initializeApp();
      this.service.OnNotAuthenticate = () => {
        this.navCtrl.setRoot(PageLogin);
      };
  }


  setHome(){
    this.navCtrl.setRoot(PageHome);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initMap(this);
      this.calculateAndDisplayRoute(this);
      });
  }

  initMap(page:PageMapa) {
    page.map = new google.maps.Map(page.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    page.directionsDisplay.setMap(page.map);
    page.directionsDisplay.setOptions({
      polylineOptions: {
          strokeWeight: 2,
          strokeOpacity: 1,
          strokeColor: 'red'
      }, suppressMarkers: true
  });
  }

  calculateAndDisplayRoute(page:PageMapa) {
    page.directionsService.route({
      origin: page.Viaje.Origen,
      destination: page.Viaje.Destino,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        page.directionsDisplay.setOptions({
            directions: response,
            draggable: false
        });
        var arr1 = page.Viaje.OrigenPosicion.split(' ');
        page.marker1 = new google.maps.Marker({
          position: { lng: parseFloat(arr1[0]), lat: parseFloat(arr1[1]) },
          map: page.map,
          icon: "assets/imgs/icono-azul.png"
        })
        page.marker1.addListener('mousedown', function(){
          page.launchNavigator.navigate(page.Viaje.Origen, { app: page.launchNavigator.APP.USER_SELECT});
        });
        var arr2 = page.Viaje.DestinoPosicion.split(' ');
        page.marker2 = new google.maps.Marker({
          position: { lng: parseFloat(arr2[0]), lat: parseFloat(arr2[1]) },
          map: page.map,
          icon: "assets/imgs/icono-rojo.png"
        })
        page.marker2.addListener('mousedown',function(){
          page.launchNavigator.navigate(page.Viaje.Destino, { app: page.launchNavigator.APP.USER_SELECT});
        });
    
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  NavigateOrigen(){
    this.launchNavigator.navigate(this.Viaje.Origen, { app: this.launchNavigator.APP.USER_SELECT});
  }

  NavigateDestino(){
    this.launchNavigator.navigate(this.Viaje.Destino, { app: this.launchNavigator.APP.USER_SELECT});
  }

}

