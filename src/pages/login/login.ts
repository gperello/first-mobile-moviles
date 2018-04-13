import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageHome } from '../home/home';
import { CustomServices } from '../../services/custom.services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class PageLogin {
  private username: string;
  private password: string;
  private error: string;

  constructor(protected nav:NavController, protected service:CustomServices) {
    this.service.OnNotAuthenticate = () => {
      this.nav.setRoot(PageLogin);
    };
}

  public login(){
    this.service.Login(this.username, this.password, 
      () => { this.nav.setRoot(PageHome); },
      (message:string) => { this.error = message; });
  }
}
