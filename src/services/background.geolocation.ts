import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Network } from '@ionic-native/network';
import { BaseService } from './base.service';

@Injectable()
export class BackgroundGeolocationService {
    constructor(private backgroundGeolocation: BackgroundGeolocation, private network:Network) { 
    }

    Init(onLocation:(location:BackgroundGeolocationResponse, service:BaseService) => void, service:BaseService){
        const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: false, // <-- enable this hear sounds for background-geolocation life-cycle. 
            stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates 
            notificationTitle: 'FIRST SRL',
            notificationText: 'Servicio de transporte de personas',
            interval: 60000, // <!-- poll for position every minute 
            fastestInterval: 30000,
            stopOnStillActivity: false,
        };

        this.backgroundGeolocation.configure(config)
        .subscribe((location: BackgroundGeolocationResponse) => {
            onLocation(location, service);
            this.backgroundGeolocation.deleteLocation(location.locationId);
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

    UpdateLocations(onLocation:(location:BackgroundGeolocationResponse, service:BaseService) => void, service:BaseService){
       if(this.network.type != 'none'){
            this.backgroundGeolocation.getLocations().then((locations) => {
                locations.forEach(element => {
                    onLocation(element, service);
                    this.backgroundGeolocation.deleteLocation(element.locationId);
                });
            });
       }
    }

    

} 