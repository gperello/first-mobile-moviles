import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { MyApp } from './app.component';
import { PageHome } from '../pages/home/home';
import { PageEstadistica } from '../pages/estadistica/estadistica';
import { PageViaje } from '../pages/viaje/viaje';
import { PageMapa } from '../pages/mapa/mapa';
import { PageCierre } from '../pages/cierre/cierre';
import { PageLogin } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { CustomServices } from '../services/custom.services';
import { BaseService } from '../services/base.service';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Push } from '@ionic-native/push';
import { Network } from '@ionic-native/network';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { BackgroundGeolocationService } from '../services/background.geolocation';
import { PushNotificationService } from '../services/push.notification';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { PageEstadisticaDiaria } from '../pages/estadistica/estadistica.diaria';
import { PageEstadisticaViajes } from '../pages/estadistica/estadistica.viajes';
import { PageViajeCerrado } from '../pages/viaje.cerrado/viaje-cerrado';
import { CallNumber } from '@ionic-native/call-number';



@NgModule({
  declarations: [
    MyApp,
    PageHome,
    PageEstadistica,
    PageEstadisticaDiaria,
    PageEstadisticaViajes,
    PageViajeCerrado,
    PageViaje,
    PageMapa,
    PageCierre,
    PageLogin,
    PageLogin,
    TabsPage,
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PageHome,
    PageEstadistica,
    PageEstadisticaDiaria,
    PageEstadisticaViajes,
    PageViaje,
    PageMapa,
    PageCierre,
    PageLogin,
    PageLogin,
    PageViajeCerrado,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Push,
    Network,
    BackgroundGeolocation,
    BackgroundGeolocationService,
    PushNotificationService, 
    AlertController, 
    HttpClient, 
    Geolocation, 
    LaunchNavigator,
    BaseService, 
    CustomServices,
    CallNumber,
 ]
})
export class AppModule {}
