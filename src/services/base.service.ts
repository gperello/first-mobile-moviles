import { Injectable } from '@angular/core';
import { AlertController, Loading, LoadingController  } from 'ionic-angular';
import { Usuario } from './clases';
import { Geolocation } from '@ionic-native/geolocation';
import { Posicion } from './clases';
import { Http, Headers } from '@angular/http';
import { BackgroundGeolocationService } from './background.geolocation';
import { Geoposition } from 'ionic-native';
declare var google;

@Injectable()
export class BaseService {
    public loader:Loading;
    constructor(protected http:Http, protected alert:AlertController, 
        protected geolocation: Geolocation, protected loadingService:LoadingController, protected backgroundGeolocation:BackgroundGeolocationService) {
        this.loader = this.loadingService.create({ content: "Aguarde..." });
    }

  //CONSTANTES
  BASE_URL = "http://186.122.149.228:8081/";
  //BASE_URL = "http://localhost:16021/";
  GET_VIAJES_ASIGNADOS = "appservice/getviajesasignados/{0}";
  GET_VIAJE = "appservice/getviaje/{0}";
  CAMBIAR_ESTADO = "appservice/cambiarestado/{0}/{1}/{2}";
  COMENZAR_ESPERA = "appservice/comenzarespera/{0}";
  RECALCULAR_VIAJE = "appservice/recalcularviaje/{0}";
  CERRAR_VIAJE = "appservice/cerrarviaje";
  GET_ESTADISTICA_MENSUAL = "appservice/getestadisticamensual/{0}";
  GET_ESTADISTICA_DIARIA = "appservice/getestadisticadiaria/{0}/{1}";
  GET_VIAJES_DIARIOS = "appservice/getviajesdiarios/{0}/{1}/{2}";
  GET_VIAJES_TURNOS = "appservice/getviajesturno/{0}";
  REGISTRAR_GCM = "appservice/registrargcm";
  VALIDAR_USUARIO = "appservice/login/{0}/{1}";
  ENVIAR_POSICION = "appservice/setposicionlista";
  ENVIAR_UNA_POSICION = "appservice/setposicion";
  CAMBIO_DE_CLAVE = "appservice/cambiarclave";
  LOGOUT = "appservice/logout/{0}";

  //HTTP
  ExecuteGetService(url: string, args?:Array<any>, onsuccess?:(data:any) => void, onerror?:(data) => void):void {
      let headers = new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token_de_usuario")
      });
      if(onsuccess != null || onerror != null) this.showLoading();
      if(args != null) url = this.ReplaceUrl(url, args);
      this.http.get(this.BASE_URL + url, { headers: headers })
      .subscribe((data) => {
          var result = data.json();
          if(result.Status == 0) {
              if(onsuccess != null) onsuccess(result.Result);
          }
          else{
              if(onerror != null) onerror(result.Message);
              else this.showAlert("ERROR", result.Message);
          }
          this.hideLoading();
      },
      (error) => {
          this.hideLoading();
          if(error.status == 401){
              localStorage.removeItem('datos_de_usuario');
              localStorage.removeItem('token_de_usuario');
              this.backgroundGeolocation.Stop();
              if(this.OnNotAuthenticate != null) this.OnNotAuthenticate();
          }
          else this.showAlert("ERROR", JSON.stringify(error));
      });
  }
  ExecutePostService(url:string, data:any, onsuccess?:(data) => void, onerror?:(data) => void):void {
      let headers = new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token_de_usuario")
      });
      if(onsuccess != null || onerror != null) this.showLoading();
      this.http.post(this.BASE_URL + url, JSON.stringify(data), {  headers: headers })
      .subscribe((data) => {
          var result = data.json();
          if(result.Status == 0) {
              if(onsuccess != null) onsuccess(result.Result);
          }
          else{
              if(onerror != null) onerror(result.Message);
              else this.showAlert("ERROR", result.Message);
          }
          this.hideLoading();
      },
      (error) => {
          this.hideLoading();
          if(error.status == 401){
              localStorage.removeItem('datos_de_usuario');
              localStorage.removeItem('token_de_usuario');
              this.backgroundGeolocation.Stop();
              if(this.OnNotAuthenticate != null) this.OnNotAuthenticate();
          }
          else this.showAlert("ERROR", JSON.stringify(error));
      });
  }
  ReplaceUrl(url:string, args: Array<any>):string {
    return url.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
  }
   OnNotAuthenticate:() => void;     
  
  //USER
  public UserData():Usuario{
    return localStorage.getItem("datos_de_usuario") == null ? null : JSON.parse(localStorage.getItem("datos_de_usuario"));
  }

  public UserToken():string{
    return localStorage.getItem("token_de_usuario");
  }

  //ALERT
  public showAlert(title:string, mensaje:string, onconfirm?:() => void) {
    let alert = this.alert.create({
      title: title,
      subTitle: mensaje,
      buttons: [{
        text: 'OK',
        handler: () => {
          if(onconfirm != null)onconfirm();
        }
      }],
    });
    alert.present();
  }

  //GET POSICION
  public getPosition(onsuccess:(data:string, pos:Geoposition) => void){
    this.geolocation.getCurrentPosition({ maximumAge: 60000 }).then((resp) => {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': { lat: resp.coords.latitude, lng: resp.coords.longitude } }, 
        function (results, status) {
            if (status === 'OK' && results[0])onsuccess(results[0].formatted_address, resp);
        });
     }).catch((error) => {
       this.showAlert("ERROR DE GEOPOSICION", "El GPS no pudo obtener posición.");
     });
  }


  //LOADING
  showLoading(){
    this.loader.present();
  }
  hideLoading(){
    this.loader.dismiss();
    this.loader = this.loadingService.create({ content: "Aguarde..." });
  }

  //FORMAT NUMBER
  public formatNumber(numero:any, inseparator?:string, outseparator?:string):string{
    var x = numero.toString();
    var arr:string[];
    if(inseparator == null) inseparator = ".";
    if(outseparator == null) outseparator = ",";
    var milseparator = outseparator == "." ? "," : ".";
    switch(inseparator){
      case ".":
        x.replace(",", "");
        arr = x.split(".");
        break;
      case ",":
        x.replace(".", "");
        arr = x.split(",");
    }
    var numericPart = arr[0];
    if(arr[0].length > 3) {
        var aux = arr[0].length;
        var arrAux:Array<any> = new Array<any>();
        for(var i = aux - 3; i > -3; i = i - 3){
            if(i >=0) arrAux.push(arr[0].substring(i, i + 3));
            else  arrAux.push(arr[0].substring(0, 3 + i));
        }
        numericPart = arrAux.reverse().join(milseparator);
    }
    var decimalPart:string = "00";
    if(arr.length > 1) decimalPart = arr[1] + "0"
    return numericPart + outseparator + decimalPart.substring(decimalPart.length - 2);
  }

  public getNumber(numero:any):number{
    return parseFloat(numero.toString().replace(".", "").replace(",", "."))
  }

  //OCULTAR CAMPOS
  public ocultarCampo(campo):boolean{
    return (campo == null || campo == undefined || campo.toString().trim().length == 0 || campo == false);
  }
  public ocultarArray(array:Array<any>):boolean{
    return (array == null || array == undefined || array.length == 0);
  }

  //SET COLOR
  public setColorEstado(estado):string{
      switch(estado){
        case 2:
            return "agendado";
        case 3:
            return "aceptado"
        case 5:
            return "encurso";
        case 7: case 8:
            return "dark";
        default:
          return "";
      }
  }

  public setColorFormaPago(formapago):string{
    switch(formapago){
      case 2: case 'Cta. Cte.':
          return "danger";
      case 3: case 'Tarjeta':
          return "secondary"
      case 1: case 'Efectivo':
          return "primary";
      default:
          return "";
    }
  }

 /*  public setLocationGeoposition(location:Geoposition, onsuccess?:(data:string, pos:Posicion) => void){
        var pos:Posicion = {
            accuracy: location.coords.accuracy,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            time: location.timestamp,
            user: this.UserData().MovilId.toString(),
        };
        this.ExecutePostService(this.ENVIAR_UNA_POSICION, pos);
        if (onsuccess != null){
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'location': { lat: location.coords.latitude, lng: location.coords.longitude } }, function (results, status) {
                if (status === 'OK' && results[0])onsuccess(results[0].formatted_address, pos);
            });
        }
  } */

  public EnviarPosicion(resp){
    var pos:Posicion = {
        accuracy: resp.coords.accuracy,
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        time: resp.timestamp,
        user: this.UserData().MovilId.toString(),
    };
    this.ExecutePostService(this.ENVIAR_UNA_POSICION, pos);
  }
  
}