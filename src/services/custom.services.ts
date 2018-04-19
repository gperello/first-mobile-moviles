import { BaseService } from "./base.service";
import { Http } from "@angular/http";
import { AlertController, LoadingController } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';
import { PushNotificationService } from "./push.notification";
import { BackgroundGeolocationService } from "./background.geolocation";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomServices extends BaseService{
    constructor(protected http:Http, protected alert:AlertController, 
        protected geolocation: Geolocation, protected loadingService:LoadingController, 
        protected push:PushNotificationService, protected backgroundGeolocation:BackgroundGeolocationService){
        super(http, alert, geolocation, loadingService);
    }
    //CIERRE
    public RecalcularViaje(reserva, onsucess?:(data) => void){
        this.ExecuteGetService(this.RECALCULAR_VIAJE, [ reserva ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
      
    public CerrarViaje(viaje, onsucess?:(data) => void){
        this.ExecutePostService(this.CERRAR_VIAJE, viaje, data => {
            onsucess(data);
            this.hideLoading();
        });
    }

    //ESTADISTICA
    public getEstadisticaMensual(onsucess?:(data) => void){
        this.ExecuteGetService(this.GET_ESTADISTICA_MENSUAL, [ this.UserData().MovilId ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    public getEstadisticaDiaria(mes:string, onsucess?:(data) => void){
        this.ExecuteGetService(this.GET_ESTADISTICA_DIARIA, [ this.UserData().MovilId, mes ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    public getViajesDiarios(dia:string, mes:string, onsucess?:(data) => void){
        this.ExecuteGetService(this.GET_VIAJES_DIARIOS, [ this.UserData().MovilId, mes, dia ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    public getViajesTurno(onsucess?:(data) => void){
        this.ExecuteGetService(this.GET_VIAJES_TURNOS, [ this.UserData().MovilId ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    
    //HOME
    public getViajes(onsucess?:(data) => void){
        this.ExecuteGetService(this.GET_VIAJES_ASIGNADOS, [ this.UserData().MovilId ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }

    public initComponent(onsucess?:(data) => void){
        this.getViajes(onsucess);
        this.backgroundGeolocation.UpdateLocations(this.setLocation, this);
    }

    //LOGIN
    public Login(username:String, password:String, onsucess?:() => void, onerror?:(message:string) => void):void {
        this.ExecuteGetService(this.VALIDAR_USUARIO, [ username, password], data => {
          localStorage.setItem('datos_de_usuario', JSON.stringify(data.User));
          localStorage.setItem('token_de_usuario', data.Token);
          this.backgroundGeolocation.Init(this.setLocation, this);
          this.push.Init(this.RegistracionFcm, this);
          if(onsucess != null)onsucess();
          this.hideLoading();
        }, error => {
          if(onerror != null)onerror(error);
        });
    }

    public Logout(onsuccess:(data) => void):void{
        this.ExecuteGetService(this.LOGOUT, [ localStorage.getItem("token_de_usuario") ], data => { 
          localStorage.removeItem('datos_de_usuario');
          localStorage.removeItem('token_de_usuario');
          this.backgroundGeolocation.Stop();
          onsuccess(data);
        });
    }
    

    //TABS
    public getViaje(reserva, onsucess?:(data) => void){
        this.ExecuteGetService(this.GET_VIAJE, [ reserva ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }

    //VIAJE
    public AceptarViaje(reserva, onsucess?:(data) => void){
        this.ExecuteGetService(this.CAMBIAR_ESTADO, [ reserva, 3, this.UserData().MovilId ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    public RechazarViaje(reserva, onsucess?:(data) => void){
        this.ExecuteGetService(this.CAMBIAR_ESTADO, [ reserva, 10, this.UserData().MovilId ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    public LlegadaCliente(reserva, onsucess?:(data) => void){
        this.ExecuteGetService(this.CAMBIAR_ESTADO, [ reserva, 5, this.UserData().MovilId ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    public ComenzarEspera(reserva, onsucess?:(data) => void){
        this.ExecuteGetService(this.COMENZAR_ESPERA, [ reserva ], data => {
          onsucess(data);
          this.hideLoading();
        });
    }
    
    //REGISTRATION FCM
    public RegistracionFcm(regid, service:CustomServices){
        //this.showAlert("REG", regid);
        service.ExecutePostService(service.REGISTRAR_GCM,{
            MovilId: service.UserData().MovilId,
            RegistrationId: regid
        });
    }
}
