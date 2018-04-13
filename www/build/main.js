webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viaje_viaje__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(nav, params, service, callNumber) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.callNumber = callNumber;
        this.service.getViaje(this.params.data.reserva, function (data) {
            _this.Viaje = data;
            _this.tab1.root = __WEBPACK_IMPORTED_MODULE_1__viaje_viaje__["a" /* PageViaje */];
            _this.tab1.rootParams = data;
            _this.tab2.root = __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__["a" /* PageMapa */];
            _this.tab2.rootParams = data;
            _this.tabs.select(0);
        });
        this.service.OnNotAuthenticate = function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* PageLogin */]);
        };
    }
    TabsPage.prototype.llamar = function () {
        this.callNumber.callNumber(this.Viaje.Telefono, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Tabs */])
    ], TabsPage.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tab1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Tab */])
    ], TabsPage.prototype, "tab1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tab2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Tab */])
    ], TabsPage.prototype, "tab2", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\tabs\tabs.html"*/'<ion-tabs #tabs>\n    <ion-tab #tab1 tabTitle="Viaje" tabIcon="information-circle"></ion-tab>\n    <ion-tab #tab2 tabTitle="Mapa" tabIcon="map"></ion-tab>\n    <ion-tab #tab3 tabTitle="Llamar" tabIcon="call" (ionSelect)= "llamar()"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEstadisticaViajes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viaje_cerrado_viaje_cerrado__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEstadisticaViajes = (function () {
    function PageEstadisticaViajes(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        if (this.navParams.data.Mes == undefined) {
            this.service.getViajesTurno(function (data) {
                _this.List = data.List;
            });
            this.Titulo = "Viajes en este turno";
            this.service.OnNotAuthenticate = function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
            };
        }
        else {
            this.Mes = this.navParams.data.Mes;
            this.Dia = this.navParams.data.Dia;
            var aux = this.Mes.split("-");
            this.Titulo = "Viajes del dia " + this.Dia + "-" + aux[1] + "-" + aux[0];
            this.service.getViajesDiarios(this.navParams.data.Dia, this.navParams.data.Mes, function (data) {
                _this.List = data.List;
            });
        }
    }
    PageEstadisticaViajes.prototype.getViajes = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viaje_cerrado_viaje_cerrado__["a" /* PageViajeCerrado */], {
            Reserva: item.Reserva
        });
    };
    Object.defineProperty(PageEstadisticaViajes.prototype, "getTotal", {
        get: function () {
            var _this = this;
            if (this.List == null)
                return "";
            var sum = 0;
            this.List.forEach(function (element) {
                sum += _this.service.getNumber(element.TotalFacturado);
            });
            return this.service.formatNumber(sum);
        },
        enumerable: true,
        configurable: true
    });
    PageEstadisticaViajes.prototype.getcolor = function (fp) {
        return this.service.setColorFormaPago(fp);
    };
    PageEstadisticaViajes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadistica-viajes',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\estadistica\estadistica.viajes.html"*/'<ion-header>\n\n    <ion-navbar color="first1">\n\n    <ion-buttons left>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align:center">\n\n        <img src="assets/imgs/first-logo.png">\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content>\n\n    <h4 style="text-align:center">{{Titulo}}</h4>\n\n    <ion-list>\n\n    <button ion-item *ngFor="let item of List" (click)="getViajes(item)">\n\n        <h2 color="dark">{{item.Reserva}} - {{item.Hora}}  <ion-badge color="{{getcolor(item.FormaDePago)}}">{{item.FormaDePago}}</ion-badge></h2>\n\n        <p>{{item.Cliente}}\n\n        </p>\n\n        <ion-note item-end color="danger">{{item.TotalFacturado}}</ion-note>\n\n    </button>\n\n    <ion-item>\n\n        <h2>Total Facturado</h2>\n\n        <ion-note item-end color="dark">{{ getTotal }}</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\estadistica\estadistica.viajes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], PageEstadisticaViajes);
    return PageEstadisticaViajes;
}());

//# sourceMappingURL=estadistica.viajes.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_service__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__push_notification__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background_geolocation__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomServices = (function (_super) {
    __extends(CustomServices, _super);
    function CustomServices(http, alert, geolocation, loadingService, push, backgroundGeolocation) {
        var _this = _super.call(this, http, alert, geolocation, loadingService) || this;
        _this.http = http;
        _this.alert = alert;
        _this.geolocation = geolocation;
        _this.loadingService = loadingService;
        _this.push = push;
        _this.backgroundGeolocation = backgroundGeolocation;
        return _this;
    }
    //CIERRE
    CustomServices.prototype.RecalcularViaje = function (reserva, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.RECALCULAR_VIAJE, [reserva], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.CerrarViaje = function (viaje, onsucess) {
        var _this = this;
        this.ExecutePostService(this.CERRAR_VIAJE, viaje, function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    //ESTADISTICA
    CustomServices.prototype.getEstadisticaMensual = function (onsucess) {
        var _this = this;
        this.ExecuteGetService(this.GET_ESTADISTICA_MENSUAL, [this.UserData().MovilId], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.getEstadisticaDiaria = function (mes, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.GET_ESTADISTICA_DIARIA, [this.UserData().MovilId, mes], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.getViajesDiarios = function (dia, mes, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.GET_VIAJES_DIARIOS, [this.UserData().MovilId, mes, dia], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.getViajesTurno = function (onsucess) {
        var _this = this;
        this.ExecuteGetService(this.GET_VIAJES_TURNOS, [this.UserData().MovilId], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    //HOME
    CustomServices.prototype.getViajes = function (onsucess) {
        var _this = this;
        this.ExecuteGetService(this.GET_VIAJES_ASIGNADOS, [this.UserData().MovilId], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.initComponent = function (onsucess) {
        this.getViajes(onsucess);
        this.backgroundGeolocation.UpdateLocations(this.setLocation, this);
    };
    //LOGIN
    CustomServices.prototype.Login = function (username, password, onsucess, onerror) {
        var _this = this;
        this.ExecuteGetService(this.VALIDAR_USUARIO, [username, password], function (data) {
            localStorage.setItem('datos_de_usuario', JSON.stringify(data.User));
            localStorage.setItem('token_de_usuario', data.Token);
            _this.backgroundGeolocation.Init(_this.setLocation, _this);
            _this.push.Init(_this.RegistracionFcm, _this);
            if (onsucess != null)
                onsucess();
            _this.hideLoading();
        }, function (error) {
            if (onerror != null)
                onerror(error);
        });
    };
    CustomServices.prototype.Logout = function (onsuccess) {
        var _this = this;
        this.ExecuteGetService(this.LOGOUT, [localStorage.getItem("token_de_usuario")], function (data) {
            localStorage.removeItem('datos_de_usuario');
            localStorage.removeItem('token_de_usuario');
            _this.backgroundGeolocation.Stop();
            onsuccess(data);
        });
    };
    //TABS
    CustomServices.prototype.getViaje = function (reserva, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.GET_VIAJE, [reserva], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    //VIAJE
    CustomServices.prototype.AceptarViaje = function (reserva, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.CAMBIAR_ESTADO, [reserva, 3, this.UserData().MovilId], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.RechazarViaje = function (reserva, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.CAMBIAR_ESTADO, [reserva, 10, this.UserData().MovilId], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.LlegadaCliente = function (reserva, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.CAMBIAR_ESTADO, [reserva, 5, this.UserData().MovilId], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    CustomServices.prototype.ComenzarEspera = function (reserva, onsucess) {
        var _this = this;
        this.ExecuteGetService(this.COMENZAR_ESPERA, [reserva], function (data) {
            onsucess(data);
            _this.hideLoading();
        });
    };
    //REGISTRATION FCM
    CustomServices.prototype.RegistracionFcm = function (regid, service) {
        //this.showAlert("REG", regid);
        service.ExecutePostService(service.REGISTRAR_GCM, {
            MovilId: service.UserData().MovilId,
            RegistrationId: regid
        });
    };
    CustomServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__push_notification__["a" /* PushNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__push_notification__["a" /* PushNotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__background_geolocation__["a" /* BackgroundGeolocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__background_geolocation__["a" /* BackgroundGeolocationService */]) === "function" && _f || Object])
    ], CustomServices);
    return CustomServices;
    var _a, _b, _c, _d, _e, _f;
}(__WEBPACK_IMPORTED_MODULE_0__base_service__["a" /* BaseService */]));

//# sourceMappingURL=custom.services.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageLogin = (function () {
    var PageLogin = PageLogin_1 = function PageLogin(nav, service) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.service.OnNotAuthenticate = function () {
            _this.nav.setRoot(PageLogin_1);
        };
    };
    PageLogin.prototype.login = function () {
        var _this = this;
        this.service.Login(this.username, this.password, function () { _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* PageHome */]); }, function (message) { _this.error = message; });
    };
    PageLogin = PageLogin_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\login\login.html"*/'  <ion-header>\n\n    <ion-navbar color="first1"  hideBackButton="true">\n\n      <ion-title style="text-align:center">\n\n        <img src="assets/imgs/first-logo.png">\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content padding style="background-color:#dadada">\n\n  <ion-row>\n\n    <ion-col text-center>\n\n      <h1>INICIO DE SESION</h1>\n\n    </ion-col>\n\n  </ion-row>\n\n  <div>\n\n    <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            <ion-item>\n\n              <ion-input placeholder="Usuario" name="username" id="loginField"\n\n                         type="text" required [(ngModel)]="username"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input placeholder="Clave" name="password" id="passwordField"\n\n                         type="password" required [(ngModel)]="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <span>{{error}}</span>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button color="first1" full large type="submit" [disabled]="!loginForm.form.valid">\n\n            Iniciar Sesión\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], PageLogin);
    return PageLogin;
    var PageLogin_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageViaje; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cierre_cierre__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageViaje = (function () {
    function PageViaje(navParams, nav, service, alert) {
        var _this = this;
        this.navParams = navParams;
        this.nav = nav;
        this.service = service;
        this.alert = alert;
        this.Viaje = this.navParams.data;
        this.service.OnNotAuthenticate = function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* PageLogin */]);
        };
    }
    PageViaje.prototype.setHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* PageHome */]);
    };
    PageViaje.prototype.Recargar = function () {
        var _this = this;
        this.service.getViaje(this.Viaje.Reserva, function (data) {
            _this.Viaje = data;
        });
    };
    PageViaje.prototype.Cerrar = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__cierre_cierre__["a" /* PageCierre */], { Reserva: this.Viaje.Reserva });
    };
    PageViaje.prototype.Aceptar = function () {
        var _this = this;
        this.service.AceptarViaje(this.Viaje.Reserva, function (data) {
            _this.Viaje.EstadoId = 3;
            _this.Viaje.Estado = "Aceptado";
        });
    };
    PageViaje.prototype.ConfirmarRechazo = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'RECHAZO DE VIAJE',
            message: 'Realmente quiere rechazar el viaje?',
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        _this.Rechazar();
                    }
                },
                {
                    text: 'NO',
                }
            ]
        });
        alert.present();
    };
    PageViaje.prototype.Rechazar = function () {
        var _this = this;
        this.service.AceptarViaje(this.Viaje.Reserva, function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* PageHome */]);
        });
    };
    PageViaje.prototype.LlegadaCliente = function () {
        var _this = this;
        this.service.LlegadaCliente(this.Viaje.Reserva, function (data) {
            _this.Viaje.EstadoId = 5;
            _this.Viaje.Estado = "En Curso";
        });
    };
    PageViaje.prototype.ComenzarEspera = function () {
        var _this = this;
        this.service.ComenzarEspera(this.Viaje.Reserva, function (data) {
            _this.service.showAlert("Espera iniciada", "La espera termina automaticamenta cuando el movil se aleja mas de 500 m. del lugar.");
        });
    };
    PageViaje.prototype.VisibleAceptarRechazar = function () {
        return this.Viaje.EstadoId != 2;
    };
    PageViaje.prototype.VisibleLlegadaCliente = function () {
        return this.Viaje.EstadoId != 3;
    };
    PageViaje.prototype.VisibleComenzarEspera = function () {
        return this.Viaje.EstadoId != 5;
    };
    PageViaje.prototype.OcultarCampo = function (campo) {
        return this.service.ocultarCampo(campo);
    };
    PageViaje.prototype.setcolorestado = function () {
        if (this.Viaje == null)
            return "";
        this.service.setColorEstado(this.Viaje.EstadoId);
    };
    PageViaje.prototype.setcolorfp = function () {
        if (this.Viaje == null)
            return "";
        this.service.setColorFormaPago(this.Viaje.FormaPagoId);
    };
    PageViaje = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viaje',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\viaje\viaje.html"*/'<ion-header>\n\n<ion-navbar color="first1" hideBackButton="true">\n\n    <ion-buttons left>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align:center">\n\n        <img src="assets/imgs/first-logo.png">\n\n    </ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n        \n\n  <ion-content>\n\n    <h2 style="text-align:center">Datos del viaje</h2>\n\n    <ion-segment color="dark" [hidden]="VisibleComenzarEspera()">\n\n        <ion-segment-button (ionSelect)="ComenzarEspera()">\n\n            <ion-icon name="time" color="primary"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="Cerrar()">\n\n            <ion-icon name="cash" color="secondary"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="Recargar()">\n\n            <ion-icon name="refresh"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    <ion-list inset>\n\n        <ion-item>        \n\n            <ion-note item-start color="primary"> {{Viaje.Reserva}}</ion-note>\n\n            <ion-note item-end color="dark"> {{Viaje.FechaHora}}</ion-note>\n\n        </ion-item>\n\n        <ion-item>        \n\n            <ion-badge item-start color="{{setcolorfp()}}"> {{Viaje.FormaPago}}</ion-badge>\n\n            <ion-badge item-end color="{{setcolorestado()}}"> {{Viaje.Estado}}</ion-badge>\n\n        </ion-item>\n\n        <ion-item [hidden]="VisibleComenzarEspera()">        \n\n            <h2 item-start>Minutos de Espera</h2>\n\n            <ion-badge item-end color="secondary"> {{Viaje.Espera}}</ion-badge>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-card>\n\n        <ion-item>\n\n            <h2>Cliente: {{Viaje.Cliente}}</h2>\n\n            <p>Pasajero: {{Viaje.Pasajero}}</p>\n\n            <p [hidden]="OcultarCampo(Viaje.NombreAtributoFacturacion)">{{Viaje.NombreAtributoFacturacion}}: {{Viaje.AtributoFacturacion}}</p>\n\n            <p [hidden]="OcultarCampo(Viaje.NombreAtributo1)">{{Viaje.NombreAtributo1}}: {{Viaje.Atributo1}}</p>\n\n            <p [hidden]="OcultarCampo(Viaje.NombreAtributo2)">{{Viaje.NombreAtributo2}}: {{Viaje.Atributo2}}</p>\n\n            <p [hidden]="OcultarCampo(Viaje.NombreAtributo3)">{{Viaje.NombreAtributo3}}: {{Viaje.Atributo3}}</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p><b>Origen:</b> {{Viaje.Origen}}</p>\n\n            <p><b>Destino:</b> {{Viaje.Destino}}</p>\n\n            <p><b>Observaciones:</b> {{Viaje.Observaciones}}\n\n              <ion-label [hidden]="!Viaje.Regreso"><b>CON REGRESO</b></ion-label>\n\n              <ion-label [hidden]="!Viaje.Importante"><b>IMPORTANTE</b></ion-label>\n\n              <ion-label [hidden]="!Viaje.SolicitaVoucher"><b>SOLICITA VOUCHER</b></ion-label>          \n\n            </p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-grid>\n\n        <ion-row [hidden]="VisibleAceptarRechazar()">\n\n          <ion-col col-6>\n\n              <button large ion-button block icon-start color="secondary" (click)="Aceptar()">\n\n                  <ion-icon name="checkmark"></ion-icon>\n\n                  Aceptar\n\n                </button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <button large ion-button block icon-end color="danger" (click)="ConfirmarRechazo()">\n\n                  Rechazar\n\n                  <ion-icon name="close"></ion-icon>\n\n                </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row [hidden]="VisibleLlegadaCliente()">\n\n          <ion-col col-12>\n\n              <button large ion-button block icon-start  color="secondary" (click)="LlegadaCliente()">\n\n                  <ion-icon name="checkmark"></ion-icon>\n\n                  Llegada al cliente\n\n                </button>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-segment color="dark" [hidden]="VisibleComenzarEspera()">\n\n        <ion-segment-button (ionSelect)="ComenzarEspera()">\n\n            <ion-icon name="time" color="primary"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="Cerrar()">\n\n            <ion-icon name="cash" color="secondary"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button (ionSelect)="Recargar()">\n\n            <ion-icon name="refresh"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\viaje\viaje.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PageViaje);
    return PageViaje;
}());

//# sourceMappingURL=viaje.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCierre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clases__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_custom_services__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PageCierre = (function () {
    function PageCierre(navCtrl, navParams, service, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alert = alert;
        this.Cierre = new __WEBPACK_IMPORTED_MODULE_2__services_clases__["a" /* CierreDeViaje */]();
        this.Reserva = navParams.data.Reserva;
        this.service.RecalcularViaje(this.Reserva, function (data) {
            _this.Cierre = data;
        });
        this.service.OnNotAuthenticate = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* PageLogin */]);
        };
    }
    PageCierre.prototype.Cerrar = function () {
        var _this = this;
        this.service.CerrarViaje(this.Cierre, function (data) {
            _this.service.showAlert("Viaje Cerrado", "El viaje se cerró correctamente.", function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* PageHome */]);
            });
        });
    };
    PageCierre.prototype.Volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], { reserva: this.Reserva });
    };
    PageCierre.prototype.showImporte = function (title, message, campo) {
        var _this = this;
        var prompt = this.alert.create({
            title: title,
            message: message,
            inputs: [
                {
                    name: 'Importe',
                    placeholder: 'Importe',
                    type: 'number',
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        if (campo == 1)
                            _this.Cierre.Peajes = _this.service.formatNumber(data.Importe);
                        if (campo == 2)
                            _this.Cierre.Estacionamiento = _this.service.formatNumber(data.Importe);
                    }
                }
            ]
        });
        prompt.present();
    };
    Object.defineProperty(PageCierre.prototype, "SumTotal", {
        get: function () {
            if (this.Cierre == null)
                return "";
            if (this.Cierre.ImporteKm == undefined)
                return "";
            var sum = this.service.getNumber(this.Cierre.ImporteKm);
            sum += this.service.getNumber(this.Cierre.ImporteEspera);
            sum += this.service.getNumber(this.Cierre.Estacionamiento);
            sum += this.service.getNumber(this.Cierre.Peajes);
            return this.service.formatNumber(sum);
        },
        enumerable: true,
        configurable: true
    });
    PageCierre = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cierre',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\cierre\cierre.html"*/'<ion-header>\n\n  <ion-navbar color="first1">\n\n    <ion-title style="text-align:center">\n\n        <img src="assets/imgs/first-logo.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [hidden]="CierreOculto">\n\n   <h2 style="text-align:center">Cierre del viaje</h2>\n\n  <ion-list>\n\n    <ion-item>\n\n      Reserva: {{ Cierre.Reserva }}\n\n    </ion-item>  \n\n    <ion-item>\n\n     {{ Cierre.TarifaNombre }}\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Viaje</h2>\n\n      <p>{{ Cierre.Km }} Km.</p>\n\n      <span color="dark" item-end> {{ Cierre.ImporteKm }}</span>\n\n    </ion-item>  \n\n    <ion-item>\n\n      <h2>Espera</h2>\n\n      <p>{{ Cierre.Espera }} Min.</p>\n\n      <span color="dark" item-end> {{ Cierre.ImporteEspera }}</span>\n\n    </ion-item> \n\n    <button ion-item (click)="showImporte(\'Ingresar Peajes\',\'\', 1)">\n\n      <h2>Peajes</h2>\n\n      <span color="dark" item-end> {{ Cierre.Peajes }}</span>\n\n    </button> \n\n    <button ion-item (click)="showImporte(\'Ingresar Estacionamiento\',\'\', 2)">\n\n      <h2>Estacionamiento</h2>\n\n      <span color="dark" item-end> {{ Cierre.Estacionamiento }}</span>\n\n    </button> \n\n    <ion-item>\n\n      <h2>Total</h2>\n\n      <span color="dark" item-end><b color="danger">{{ SumTotal }}</b></span>\n\n    </ion-item>  \n\n  </ion-list>\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <button large ion-button block icon-start  color="secondary" (click)="Cerrar()">\n\n            <ion-icon name="checkmark"></ion-icon>\n\n            Cerrar\n\n          </button>\n\n    </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\cierre\cierre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PageCierre);
    return PageCierre;
}());

//# sourceMappingURL=cierre.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Usuario */
/* unused harmony export ViajeList */
/* unused harmony export Posicion */
/* unused harmony export Intermedio */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Viaje; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CierreDeViaje; });
/* unused harmony export EstadisticaMensual */
/* unused harmony export EstadisticaDiaria */
/* unused harmony export EstadisticaViaje */
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

var ViajeList = (function () {
    function ViajeList() {
    }
    return ViajeList;
}());

var Posicion = (function () {
    function Posicion() {
    }
    return Posicion;
}());

var Intermedio = (function () {
    function Intermedio() {
    }
    return Intermedio;
}());

var Viaje = (function () {
    function Viaje() {
    }
    return Viaje;
}());

var CierreDeViaje = (function () {
    function CierreDeViaje() {
    }
    return CierreDeViaje;
}());

var EstadisticaMensual = (function () {
    function EstadisticaMensual() {
    }
    return EstadisticaMensual;
}());

var EstadisticaDiaria = (function () {
    function EstadisticaDiaria() {
    }
    return EstadisticaDiaria;
}());

var EstadisticaViaje = (function () {
    function EstadisticaViaje() {
    }
    return EstadisticaViaje;
}());

//# sourceMappingURL=clases.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseService = (function () {
    function BaseService(http, alert, geolocation, loadingService) {
        this.http = http;
        this.alert = alert;
        this.geolocation = geolocation;
        this.loadingService = loadingService;
        //CONSTANTES
        this.BASE_URL = "http://186.122.149.228:8081/";
        //BASE_URL = "http://localhost:16021/";
        this.GET_VIAJES_ASIGNADOS = "appservice/getviajesasignados/{0}";
        this.GET_VIAJE = "appservice/getviaje/{0}";
        this.CAMBIAR_ESTADO = "appservice/cambiarestado/{0}/{1}/{2}";
        this.COMENZAR_ESPERA = "appservice/comenzarespera/{0}";
        this.RECALCULAR_VIAJE = "appservice/recalcularviaje/{0}";
        this.CERRAR_VIAJE = "appservice/cerrarviaje";
        this.GET_ESTADISTICA_MENSUAL = "appservice/getestadisticamensual/{0}";
        this.GET_ESTADISTICA_DIARIA = "appservice/getestadisticadiaria/{0}/{1}";
        this.GET_VIAJES_DIARIOS = "appservice/getviajesdiarios/{0}/{1}/{2}";
        this.GET_VIAJES_TURNOS = "appservice/getviajesturno/{0}";
        this.REGISTRAR_GCM = "appservice/registrargcm";
        this.VALIDAR_USUARIO = "appservice/login/{0}/{1}";
        this.ENVIAR_POSICION = "appservice/setposicion";
        this.LOGOUT = "appservice/logout/{0}";
        this.loader = this.loadingService.create({ content: "Aguarde..." });
    }
    //HTTP
    BaseService.prototype.ExecuteGetService = function (url, args, onsuccess, onerror) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token_de_usuario")
        });
        if (onsuccess != null || onerror != null)
            this.showLoading();
        if (args != null)
            url = this.ReplaceUrl(url, args);
        this.http.get(this.BASE_URL + url, { headers: headers })
            .subscribe(function (data) {
            var result = data.json();
            if (result.Status == 0) {
                if (onsuccess != null)
                    onsuccess(result.Result);
            }
            else {
                if (onerror != null)
                    onerror(result.Message);
                else
                    _this.showAlert("ERROR", result.Message);
            }
            _this.hideLoading();
        }, function (error) {
            _this.hideLoading();
            if (error.status == 401) {
                localStorage.removeItem('datos_de_usuario');
                localStorage.removeItem('token_de_usuario');
                if (_this.OnNotAuthenticate != null)
                    _this.OnNotAuthenticate();
            }
            else
                _this.showAlert("ERROR", JSON.stringify(error));
        });
    };
    BaseService.prototype.ExecutePostService = function (url, data, onsuccess, onerror) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token_de_usuario")
        });
        if (onsuccess != null || onerror != null)
            this.showLoading();
        this.http.post(this.BASE_URL + url, JSON.stringify(data), { headers: headers })
            .subscribe(function (data) {
            var result = data.json();
            if (result.Status == 0) {
                if (onsuccess != null)
                    onsuccess(result.Result);
            }
            else {
                if (onerror != null)
                    onerror(result.Message);
                else
                    _this.showAlert("ERROR", result.Message);
            }
            _this.hideLoading();
        }, function (error) {
            _this.hideLoading();
            if (error.status == 401) {
                localStorage.removeItem('datos_de_usuario');
                localStorage.removeItem('token_de_usuario');
                if (_this.OnNotAuthenticate != null)
                    _this.OnNotAuthenticate();
            }
            else
                _this.showAlert("ERROR", JSON.stringify(error));
        });
    };
    BaseService.prototype.ReplaceUrl = function (url, args) {
        return url.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
    //USER
    BaseService.prototype.UserData = function () {
        return localStorage.getItem("datos_de_usuario") == null ? null : JSON.parse(localStorage.getItem("datos_de_usuario"));
    };
    BaseService.prototype.UserToken = function () {
        return localStorage.getItem("token_de_usuario");
    };
    //ALERT
    BaseService.prototype.showAlert = function (title, mensaje, onconfirm) {
        var alert = this.alert.create({
            title: title,
            subTitle: mensaje,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        if (onconfirm != null)
                            onconfirm();
                    }
                }],
        });
        alert.present();
    };
    //GET POSICION
    BaseService.prototype.getPosition = function (onsuccess) {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.setLocationGeoposition(resp, onsuccess);
        }).catch(function (error) {
            _this.showAlert("ERROR DE GEOPOSICION", JSON.stringify(error));
        });
    };
    //LOADING
    BaseService.prototype.showLoading = function () {
        this.loader.present();
    };
    BaseService.prototype.hideLoading = function () {
        this.loader.dismiss();
        this.loader = this.loadingService.create({ content: "Aguarde..." });
    };
    //FORMAT NUMBER
    BaseService.prototype.formatNumber = function (numero, inseparator, outseparator) {
        var x = numero.toString();
        var arr;
        if (inseparator == null)
            inseparator = ".";
        if (outseparator == null)
            outseparator = ",";
        var milseparator = outseparator == "." ? "," : ".";
        switch (inseparator) {
            case ".":
                x.replace(",", "");
                arr = x.split(".");
                break;
            case ",":
                x.replace(".", "");
                arr = x.split(",");
        }
        var numericPart = arr[0];
        if (arr[0].length > 3) {
            var aux = arr[0].length;
            var arrAux = new Array();
            for (var i = aux - 3; i > -3; i = i - 3) {
                if (i >= 0)
                    arrAux.push(arr[0].substring(i, i + 3));
                else
                    arrAux.push(arr[0].substring(0, 3 + i));
            }
            numericPart = arrAux.reverse().join(milseparator);
        }
        var decimalPart = "00";
        if (arr.length > 1)
            decimalPart = arr[1] + "0";
        return numericPart + outseparator + decimalPart.substring(decimalPart.length - 2);
    };
    BaseService.prototype.getNumber = function (numero) {
        return parseFloat(numero.toString().replace(".", "").replace(",", "."));
    };
    //OCULTAR CAMPOS
    BaseService.prototype.ocultarCampo = function (campo) {
        return (campo == null || campo == undefined || campo.trim().length == 0);
    };
    //SET COLOR
    BaseService.prototype.setColorEstado = function (estado) {
        switch (estado) {
            case 2:
                return "agendado";
            case 3:
                return "aceptado";
            case 5:
                return "encurso";
            case 7:
            case 8:
                return "dark";
            default:
                return "";
        }
    };
    BaseService.prototype.setColorFormaPago = function (formapago) {
        switch (formapago) {
            case 2:
            case 'Cta. Cte.':
                return "danger";
            case 3:
            case 'Tarjeta':
                return "secondary";
            case 1:
            case 'Efectivo':
                return "primary";
            default:
                return "";
        }
    };
    //SET LOCATIONS
    BaseService.prototype.setLocation = function (location, service) {
        var User = JSON.parse(localStorage.getItem("datos_de_usuario"));
        var pos = {
            accuracy: location.accuracy,
            latitude: location.latitude,
            longitude: location.longitude,
            time: location.time,
            movid: User.MovilId,
        };
        service.ExecutePostService(service.ENVIAR_POSICION, pos);
    };
    BaseService.prototype.setLocationGeoposition = function (location, onsuccess) {
        var pos = {
            accuracy: location.coords.accuracy,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            time: location.timestamp,
            movid: this.UserData().MovilId,
        };
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': { lat: location.coords.latitude, lng: location.coords.longitude } }, function (results, status) {
            if (status === 'OK' && results[0] && onsuccess != null)
                onsuccess(results[0].formatted_address);
        });
        this.ExecutePostService(this.ENVIAR_POSICION, pos);
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], BaseService);
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_push__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushNotificationService = (function () {
    function PushNotificationService(push) {
        this.push = push;
    }
    ;
    PushNotificationService.prototype.Init = function (onRegister, service) {
        var pushObject = this.push.init({
            android: {
                senderID: '644865268568'
            },
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        });
        pushObject.on('registration').subscribe(function (data) {
            onRegister(data.registrationId, service);
        });
        pushObject.on('notification').subscribe(function (data) {
        });
        pushObject.on('error').subscribe(function (error) {
            //this.base.showAlert("ERROR", JSON.stringify(error));
        });
    };
    ;
    PushNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_push__["a" /* Push */]])
    ], PushNotificationService);
    return PushNotificationService;
}());

//# sourceMappingURL=push.notification.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundGeolocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackgroundGeolocationService = (function () {
    function BackgroundGeolocationService(backgroundGeolocation, network) {
        this.backgroundGeolocation = backgroundGeolocation;
        this.network = network;
    }
    BackgroundGeolocationService.prototype.Init = function (onLocation, service) {
        var _this = this;
        var config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: false,
            stopOnTerminate: false,
            notificationTitle: 'FIRST SRL',
            notificationText: 'Servicio de transporte de personas',
            interval: 60000,
            fastestInterval: 30000,
            stopOnStillActivity: false,
        };
        this.backgroundGeolocation.configure(config)
            .subscribe(function (location) {
            onLocation(location, service);
            _this.backgroundGeolocation.deleteLocation(location.locationId);
            _this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
        this.backgroundGeolocation.watchLocationMode().then(function (enable) {
            if (!enable)
                _this.backgroundGeolocation.showLocationSettings();
        });
        this.backgroundGeolocation.start();
    };
    BackgroundGeolocationService.prototype.Stop = function () {
        this.backgroundGeolocation.stop();
    };
    BackgroundGeolocationService.prototype.IsLocationEnable = function () {
        var _this = this;
        this.backgroundGeolocation.isLocationEnabled().then(function (value) {
            if (value == 0)
                _this.backgroundGeolocation.showLocationSettings();
        });
    };
    BackgroundGeolocationService.prototype.UpdateLocations = function (onLocation, service) {
        var _this = this;
        if (this.network.type != 'none') {
            this.backgroundGeolocation.getLocations().then(function (locations) {
                locations.forEach(function (element) {
                    onLocation(element, service);
                    _this.backgroundGeolocation.deleteLocation(element.locationId);
                });
            });
        }
    };
    BackgroundGeolocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
    ], BackgroundGeolocationService);
    return BackgroundGeolocationService;
}());

//# sourceMappingURL=background.geolocation.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMapa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_custom_services__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageMapa = (function () {
    function PageMapa(navCtrl, navParams, platform, launchNavigator, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.launchNavigator = launchNavigator;
        this.service = service;
        this.marker1 = new google.maps.Marker;
        this.marker2 = new google.maps.Marker;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.Viaje = this.navParams.data;
        this.initializeApp();
        this.service.OnNotAuthenticate = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* PageLogin */]);
        };
    }
    PageMapa.prototype.setHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* PageHome */]);
    };
    PageMapa.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.initMap(_this);
            _this.calculateAndDisplayRoute(_this);
        });
    };
    PageMapa.prototype.initMap = function (page) {
        page.map = new google.maps.Map(page.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        page.directionsDisplay.setMap(page.map);
        page.directionsDisplay.setOptions({
            polylineOptions: {
                strokeWeight: 2,
                strokeOpacity: 1,
                strokeColor: 'red'
            }, suppressMarkers: true
        });
    };
    PageMapa.prototype.calculateAndDisplayRoute = function (page) {
        page.directionsService.route({
            origin: page.Viaje.Origen,
            destination: page.Viaje.Destino,
            travelMode: 'DRIVING'
        }, function (response, status) {
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
                });
                page.marker1.addListener('mousedown', function () {
                    page.launchNavigator.navigate(page.Viaje.Origen, { app: page.launchNavigator.APP.USER_SELECT });
                });
                var arr2 = page.Viaje.DestinoPosicion.split(' ');
                page.marker2 = new google.maps.Marker({
                    position: { lng: parseFloat(arr2[0]), lat: parseFloat(arr2[1]) },
                    map: page.map,
                    icon: "assets/imgs/icono-rojo.png"
                });
                page.marker2.addListener('mousedown', function () {
                    page.launchNavigator.navigate(page.Viaje.Destino, { app: page.launchNavigator.APP.USER_SELECT });
                });
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    PageMapa.prototype.NavigateOrigen = function () {
        this.launchNavigator.navigate(this.Viaje.Origen, { app: this.launchNavigator.APP.USER_SELECT });
    };
    PageMapa.prototype.NavigateDestino = function () {
        this.launchNavigator.navigate(this.Viaje.Destino, { app: this.launchNavigator.APP.USER_SELECT });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PageMapa.prototype, "mapElement", void 0);
    PageMapa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\mapa\mapa.html"*/'<ion-header>\n\n    <ion-navbar color="first1" hideBackButton="true">\n\n      <ion-buttons left>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title style="text-align:center">\n\n          <img src="assets/imgs/first-logo.png">\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\mapa\mapa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_5__services_custom_services__["a" /* CustomServices */]])
    ], PageMapa);
    return PageMapa;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEstadistica; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadistica_diaria__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEstadistica = (function () {
    function PageEstadistica(nav, navParams, service) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.service.getEstadisticaMensual(function (data) {
            _this.List = data.List;
        });
        this.service.OnNotAuthenticate = function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
        };
    }
    PageEstadistica.prototype.getViajes = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__estadistica_diaria__["a" /* PageEstadisticaDiaria */], {
            Mes: item.Mes
        });
    };
    PageEstadistica.prototype.Logout = function () {
        var _this = this;
        this.service.Logout(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
        });
    };
    Object.defineProperty(PageEstadistica.prototype, "getTotal", {
        get: function () {
            var _this = this;
            if (this.List == null)
                return "";
            var sum = 0;
            this.List.forEach(function (element) {
                sum += _this.service.getNumber(element.TotalFacturado);
            });
            return this.service.formatNumber(sum);
        },
        enumerable: true,
        configurable: true
    });
    PageEstadistica = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadistica',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\estadistica\estadistica.html"*/'<ion-header>\n\n    <ion-navbar color="first1">\n\n      <ion-buttons left>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title style="text-align:center">\n\n          <img src="assets/imgs/first-logo.png">\n\n      </ion-title>\n\n      <ion-buttons right>\n\n        <button ion-button (click)="Logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content>\n\n    <h3 style="text-align:center">estadistica</h3>\n\n    <ion-list>\n\n    <button ion-item *ngFor="let item of List" (click)="getViajes(item)">\n\n        <ion-note item-start color="dark">{{item.Mes}} - ({{item.Cantidad}}) Viajes</ion-note>\n\n        <ion-note item-end color="danger">{{item.TotalFacturado}}</ion-note>\n\n    </button>\n\n    <ion-item>\n\n        <h2>Total Facturado</h2>\n\n        <ion-note item-end color="dark">{{ getTotal }}</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\estadistica\estadistica.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], PageEstadistica);
    return PageEstadistica;
}());

//# sourceMappingURL=estadistica.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEstadisticaDiaria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadistica_viajes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEstadisticaDiaria = (function () {
    function PageEstadisticaDiaria(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.Mes = this.navParams.data.Mes;
        this.service.getEstadisticaDiaria(this.navParams.data.Mes, function (data) {
            _this.List = data.List;
        });
        this.service.OnNotAuthenticate = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
        };
    }
    PageEstadisticaDiaria.prototype.getViajes = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__estadistica_viajes__["a" /* PageEstadisticaViajes */], {
            Dia: item.Dia,
            Mes: this.Mes
        });
    };
    Object.defineProperty(PageEstadisticaDiaria.prototype, "getTotal", {
        get: function () {
            var _this = this;
            if (this.List == null)
                return "";
            var sum = 0;
            this.List.forEach(function (element) {
                sum += _this.service.getNumber(element.TotalFacturado);
            });
            return this.service.formatNumber(sum);
        },
        enumerable: true,
        configurable: true
    });
    PageEstadisticaDiaria = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadistica-diaria',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\estadistica\estadistica.diaria.html"*/'<ion-header>\n\n  <ion-navbar color="first1">\n\n    <ion-title style="text-align:center">\n\n        <img src="assets/imgs/first-logo.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content>\n\n    <h4 style="text-align:center">estadistica del mes {{Mes}}</h4>\n\n    <ion-list>\n\n    <button ion-item *ngFor="let item of List" (click)="getViajes(item)">\n\n        <ion-note  item-start color="dark">Dia {{item.Dia}} - ({{item.Cantidad}}) Viajes</ion-note>\n\n        <ion-note item-end color="danger">{{item.TotalFacturado}}</ion-note>\n\n    </button>\n\n    <ion-item>\n\n        <h2>Total Facturado</h2>\n\n        <ion-note item-end color="dark">{{ getTotal }}</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\estadistica\estadistica.diaria.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], PageEstadisticaDiaria);
    return PageEstadisticaDiaria;
}());

//# sourceMappingURL=estadistica.diaria.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageViajeCerrado; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clases__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageViajeCerrado = (function () {
    function PageViajeCerrado(nav, navParams, service) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__services_clases__["b" /* Viaje */]();
        this.Reserva = this.navParams.data.Reserva;
        this.service.getViaje(this.Reserva, function (data) {
            _this.Viaje = data;
        });
        this.service.OnNotAuthenticate = function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
        };
    }
    Object.defineProperty(PageViajeCerrado.prototype, "SumTotal", {
        get: function () {
            if (this.Viaje == null)
                return "";
            if (this.Viaje.ImporteKm == undefined)
                return "";
            var sum = this.service.getNumber(this.Viaje.ImporteKm);
            sum += this.service.getNumber(this.Viaje.ImporteEspera);
            sum += this.service.getNumber(this.Viaje.Estacionamiento);
            sum += this.service.getNumber(this.Viaje.Peajes);
            return this.service.formatNumber(sum);
        },
        enumerable: true,
        configurable: true
    });
    PageViajeCerrado.prototype.ocultarCampo = function (campo) {
        return this.service.ocultarCampo(campo);
    };
    PageViajeCerrado.prototype.setColorEstado = function (estado) {
        return this.service.setColorEstado(estado);
    };
    PageViajeCerrado.prototype.setColorFormaPago = function (fp) {
        return this.service.setColorFormaPago(fp);
    };
    PageViajeCerrado = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viaje-cerrado',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\viaje.cerrado\viaje-cerrado.html"*/'<ion-header>\n\n    <ion-navbar color="first1">\n\n      <ion-title style="text-align:center">\n\n          <img src="assets/imgs/first-logo.png">\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <h2 style="text-align:center">Datos del viaje</h2>\n\n    <ion-list inset>\n\n        <ion-item>        \n\n            <ion-note item-start color="primary"> {{Viaje.Reserva}}</ion-note>\n\n            <ion-note item-end color="dark"> {{Viaje.FechaHora}}</ion-note>\n\n        </ion-item>\n\n        <ion-item>        \n\n            <ion-badge item-start color="{{setColorFormaPago(Viaje.FormaPago)}}"> {{Viaje.FormaPago}}</ion-badge>\n\n            <ion-badge item-end color="{{setColorEstado(Viaje.EstadoId)}}"> {{Viaje.Estado}}</ion-badge>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-card>\n\n        <ion-item>\n\n            <h2>Cliente: {{Viaje.Cliente}}</h2>\n\n            <p>Pasajero: {{Viaje.Pasajero}}</p>\n\n            <p [hidden]="ocultarCampo(Viaje.NombreAtributoFacturacion)">{{Viaje.NombreAtributoFacturacion}}: {{Viaje.AtributoFacturacion}}</p>\n\n            <p [hidden]="ocultarCampo(Viaje.NombreAtributo1)">{{Viaje.NombreAtributo1}}: {{Viaje.Atributo1}}</p>\n\n            <p [hidden]="ocultarCampo(Viaje.NombreAtributo2)">{{Viaje.NombreAtributo2}}: {{Viaje.Atributo2}}</p>\n\n            <p [hidden]="ocultarCampo(Viaje.NombreAtributo3)">{{Viaje.NombreAtributo3}}: {{Viaje.Atributo3}}</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p><b>Origen:</b> {{Viaje.Origen}}</p>\n\n            <p><b>Destino:</b> {{Viaje.Destino}}</p>\n\n            <p><b>Observaciones:</b> {{Viaje.Observaciones}}\n\n              <ion-label [hidden]="!Viaje.Regreso"><b>CON REGRESO</b></ion-label>\n\n              <ion-label [hidden]="!Viaje.Importante"><b>IMPORTANTE</b></ion-label>\n\n              <ion-label [hidden]="!Viaje.SolicitaVoucher"><b>SOLICITA VOUCHER</b></ion-label>          \n\n            </p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-list>\n\n        <ion-item>\n\n            {{ Viaje.TarifaNombre }}\n\n        </ion-item>\n\n        <ion-item>\n\n            <h2>Viaje</h2>\n\n            <p>{{ Viaje.Km }} Km.</p>\n\n            <span color="dark" item-end> {{ Viaje.ImporteKm }}</span>\n\n        </ion-item>  \n\n        <ion-item>\n\n            <h2>Espera</h2>\n\n            <p>{{ Viaje.Espera }} Min.</p>\n\n            <span color="dark" item-end> {{ Viaje.ImporteEspera }}</span>\n\n        </ion-item> \n\n        <button ion-item>\n\n            <h2>Peajes</h2>\n\n            <span color="dark" item-end> {{ Viaje.Peajes }}</span>\n\n        </button> \n\n        <button ion-item>\n\n            <h2>Estacionamiento</h2>\n\n            <span color="dark" item-end> {{ Viaje.Estacionamiento }}</span>\n\n        </button> \n\n        <ion-item>\n\n            <h2>Total</h2>\n\n            <span color="dark" item-end><b color="danger">{{ SumTotal }}</b></span>\n\n        </ion-item>  \n\n    </ion-list>\n\n        \n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\viaje.cerrado\viaje-cerrado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], PageViajeCerrado);
    return PageViajeCerrado;
}());

//# sourceMappingURL=viaje-cerrado.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_estadistica_estadistica__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_viaje_viaje__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mapa_mapa__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cierre_cierre__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_base_service__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_background_geolocation__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_background_geolocation__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_push_notification__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_estadistica_estadistica_diaria__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_estadistica_estadistica_viajes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_viaje_cerrado_viaje_cerrado__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_call_number__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* PageHome */],
                __WEBPACK_IMPORTED_MODULE_4__pages_estadistica_estadistica__["a" /* PageEstadistica */],
                __WEBPACK_IMPORTED_MODULE_23__pages_estadistica_estadistica_diaria__["a" /* PageEstadisticaDiaria */],
                __WEBPACK_IMPORTED_MODULE_24__pages_estadistica_estadistica_viajes__["a" /* PageEstadisticaViajes */],
                __WEBPACK_IMPORTED_MODULE_25__pages_viaje_cerrado_viaje_cerrado__["a" /* PageViajeCerrado */],
                __WEBPACK_IMPORTED_MODULE_5__pages_viaje_viaje__["a" /* PageViaje */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mapa_mapa__["a" /* PageMapa */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cierre_cierre__["a" /* PageCierre */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* PageLogin */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* PageLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* PageHome */],
                __WEBPACK_IMPORTED_MODULE_4__pages_estadistica_estadistica__["a" /* PageEstadistica */],
                __WEBPACK_IMPORTED_MODULE_23__pages_estadistica_estadistica_diaria__["a" /* PageEstadisticaDiaria */],
                __WEBPACK_IMPORTED_MODULE_24__pages_estadistica_estadistica_viajes__["a" /* PageEstadisticaViajes */],
                __WEBPACK_IMPORTED_MODULE_5__pages_viaje_viaje__["a" /* PageViaje */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mapa_mapa__["a" /* PageMapa */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cierre_cierre__["a" /* PageCierre */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* PageLogin */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* PageLogin */],
                __WEBPACK_IMPORTED_MODULE_25__pages_viaje_cerrado_viaje_cerrado__["a" /* PageViajeCerrado */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_19__services_background_geolocation__["a" /* BackgroundGeolocationService */],
                __WEBPACK_IMPORTED_MODULE_20__services_push_notification__["a" /* PushNotificationService */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_12__services_base_service__["a" /* BaseService */],
                __WEBPACK_IMPORTED_MODULE_11__services_custom_services__["a" /* CustomServices */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_call_number__["a" /* CallNumber */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_estadistica_estadistica__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_estadistica_estadistica_viajes__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_custom_services__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, service) {
        this.platform = platform;
        this.service = service;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* PageHome */];
        this.initializeApp();
        if (this.service.UserData() == null)
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* PageLogin */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* PageHome */] },
            { title: 'Viajes del dia', component: __WEBPACK_IMPORTED_MODULE_6__pages_estadistica_estadistica_viajes__["a" /* PageEstadisticaViajes */] },
            { title: 'Facturacion', component: __WEBPACK_IMPORTED_MODULE_4__pages_estadistica_estadistica__["a" /* PageEstadistica */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any hgher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.Logout = function () {
        var _this = this;
        this.service.Logout(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* PageLogin */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="first2">\n\n      <ion-title>FIRST SRL</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content style="background-color:#dadada">\n\n    <ion-list>\n\n        <button color="first5" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n            {{p.title}}\n\n          </button>\n\n          <button color="first5" menuClose ion-item  (click)="Logout()">\n\n             Cerrar Sesion\n\n          </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\first-moviles\app-moviles\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__services_custom_services__["a" /* CustomServices */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageHome = (function () {
    function PageHome(nav, platform, service) {
        var _this = this;
        this.nav = nav;
        this.platform = platform;
        this.service = service;
        this.User = this.service.UserData();
        this.User.Estado = this.User.EstadoId == 1 ? "secondary" : "danger";
        this.service.getPosition(function (direccion) {
            _this.Direccion = direccion;
        });
        this.service.initComponent(function (data) {
            _this.Viajes = data.List;
        });
        this.platform.resume.subscribe(function () {
            _this.service.initComponent(function (data) {
                _this.Viajes = data.List;
            });
        });
        this.service.OnNotAuthenticate = function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
        };
    }
    Object.defineProperty(PageHome.prototype, "NoHayViajes", {
        get: function () {
            return !(this.Viajes == null || this.Viajes.length == 0);
        },
        enumerable: true,
        configurable: true
    });
    PageHome.prototype.setReserva = function (reserva) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { reserva: reserva });
    };
    PageHome.prototype.setcolor = function (estado) {
        return this.service.setColorEstado(estado);
    };
    PageHome.prototype.Logout = function () {
        var _this = this;
        this.service.Logout(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* PageLogin */]);
        });
    };
    PageHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\first-moviles\app-moviles\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="first1" hideBackButton="true">\n\n    <ion-buttons left>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align:center">\n\n        <img src="assets/imgs/first-logo.png">\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button (click)="Logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n      <ion-item>        \n\n        <h2>{{User.NombreUsuario}}</h2>\n\n        <ion-badge item-end color="{{User.Estado}}">{{User.NumeroMovil}}</ion-badge>\n\n      </ion-item>\n\n    <ion-item>\n\n    <ion-label><p>{{Direccion}}</p></ion-label>\n\n  </ion-item>\n\n  </ion-list>\n\n  <h2 style="text-align:center">Viajes Asignados</h2>\n\n  <h4 style="text-align:center" [hidden]="NoHayViajes">no hay viajes asignados</h4>\n\n  <ion-card *ngFor="let item of Viajes">\n\n      <button ion-item (click)="setReserva(item.Reserva)">\n\n          <h3>{{item.Reserva}} - {{item.FechaHora}} - <ion-badge color="{{setcolor(item.EstadoId)}}">{{item.Estado}}</ion-badge></h3>\n\n          <h3>{{item.Cliente}} - {{item.FormaPago}}</h3>\n\n          <p style="display:block">{{item.Origen}}</p>\n\n      </button>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\first-moviles\app-moviles\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], PageHome);
    return PageHome;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[405]);
//# sourceMappingURL=main.js.map