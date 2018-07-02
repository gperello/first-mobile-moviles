import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { BaseService } from './base.service';

@Injectable()
export class BackgroundGeolocationService {
    constructor(private backgroundGeolocation: BackgroundGeolocation) { 
    }

    Init(service:BaseService){
        const config:BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: false, // <-- enable this hear sounds for background-geolocation life-cycle. 
            stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates 
            notificationTitle: 'FIRST SRL',
            notificationText: 'Servicio de transporte de personas',
            interval: 30000, // <!-- poll for position every minute 
            fastestInterval: 15000,
            activitiesInterval: 30000,
            stopOnStillActivity: false,
            maxLocations: 100, 
            url: service.BASE_URL + service.ENVIAR_POSICION,
            syncUrl: service.BASE_URL + service.ENVIAR_POSICION,
            syncThreshold: 10,
            startOnBoot: true,
            user: service.UserData().MovilId.toString(),
            /* httpHeaders:{ 
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token_de_usuario")
            }, */
        };
        this.backgroundGeolocation.configure(config)
        .subscribe((location: BackgroundGeolocationResponse) => {
            this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
        this.backgroundGeolocation.watchLocationMode().then((enable:boolean) => {
            if(!enable) this.backgroundGeolocation.showLocationSettings();
        });
        this.backgroundGeolocation.start();
    }
    Stop(){
        this.backgroundGeolocation.stop();
    }

    IsLocationEnable():void{
        this.backgroundGeolocation.isLocationEnabled().then((value:number) => {
            if(value == 0) this.backgroundGeolocation.showLocationSettings();
        });
    }
} 