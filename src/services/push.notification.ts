import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
import { Usuario } from './clases';
import { CustomServices } from './custom.services';

@Injectable()
export class PushNotificationService {
    User:Usuario;
    constructor(private push: FCM) { 

    };

    public Init(onRegister:(regid, service:CustomServices) => void, service:CustomServices){
        this.push.getToken().then(token => {
            onRegister(token, service);
        });
        
        this.push.onNotification().subscribe(data => {

        });
        
        this.push.onTokenRefresh().subscribe(token => {
            onRegister(token, service);
        });
    };

    
} 