import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform, Navbar } from 'ionic-angular';
import { Viaje } from '../../services/clases';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { PageLogin } from '../login/login';
import { PageHome } from '../home/home';
import { CustomServices } from '../../services/custom.services';
import { PageViaje } from '../viaje/viaje';
import { CallNumber } from '@ionic-native/call-number';


declare var google;


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class PageMapa {
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers:Array<any> = [];
  //marker2 = new google.maps.Marker;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  public Viaje:Viaje = new Viaje();

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    private launchNavigator: LaunchNavigator, protected service:CustomServices, private callNumber: CallNumber) {
      this.service.getViaje(this.navParams.data.reserva, (data) =>{
        this.Viaje = data;
        this.initializeApp();
      });
      this.service.OnNotAuthenticate = () => {
        this.navCtrl.setRoot(PageLogin);
      };
  }

  ionViewDidLoad() {
      this.setBackButtonAction()
  }

  //Method to override the default back button action
  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
    //Write here wherever you wanna do
    this.navCtrl.setRoot(PageHome);
    }
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
    var waypts = [];
    if(page.Viaje.Intermedios != null){
      page.Viaje.Intermedios.forEach(element => {
        var arrint = element.Posicion.split(" ");
        var posint = new google.maps.LatLng(parseFloat(arrint[1]), parseFloat(arrint[0]));
        waypts.push({
            location: posint,
            stopover: false
        });
      });
    }
    page.directionsService.route({
      origin: page.Viaje.Origen,
      destination: page.Viaje.Destino,
      travelMode: 'DRIVING',
      waypoints: waypts
    }, (response, status) => {
      if (status === 'OK') {
        page.markers.forEach(element => {
          element.setMap(null);
        });
        page.markers = [];
        page.directionsDisplay.setOptions({
            directions: response,
            draggable: false
        });
        var arr1 = page.Viaje.OrigenPosicion.split(' ');
        page.markers.push(new google.maps.Marker({
          position: { lng: parseFloat(arr1[0]), lat: parseFloat(arr1[1]) },
          map: page.map,
          icon: "assets/imgs/icono-azul.png"
        }).addListener('click', function(){
          page.launchNavigator.navigate(page.Viaje.Origen, { app: page.launchNavigator.APP.USER_SELECT});
        }));
        var arr2 = page.Viaje.DestinoPosicion.split(' ');
        page.markers.push(new google.maps.Marker({
          position: { lng: parseFloat(arr2[0]), lat: parseFloat(arr2[1]) },
          map: page.map,
          icon: "assets/imgs/icono-rojo.png"
        }).addListener('click',function(){
          page.launchNavigator.navigate(page.Viaje.Destino, { app: page.launchNavigator.APP.USER_SELECT});
        }));
        if(page.Viaje.Intermedios != null){
          page.Viaje.Intermedios.forEach(element => {
            var arrint = element.Posicion.split(" ");
            page.markers.push(new google.maps.Marker({
                position:new google.maps.LatLng(parseFloat(arrint[1]), parseFloat(arrint[0])),
                map: page.map,
                icon: "assets/imgs/icono-verde.png"
              }).addListener('click',function(){
                page.launchNavigator.navigate(element.Direccion, { app: page.launchNavigator.APP.USER_SELECT});
              }));
            });
        }
    
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
  llamar(){
    this.callNumber.callNumber(this.Viaje.Telefono, true)
  }
  
  getInfo(){
    this.navCtrl.push(PageViaje, { reserva: this.Viaje.Reserva });
  }
  
}

