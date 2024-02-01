import {Component} from '@angular/core';
import {FacadeService} from "../../shared/services/facade/facade.service";
import {LoginData} from "../../shared/interfaces/LoginData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private facadeService: FacadeService) {
  }

  handleLogin() {
    console.log(this.password + ":" + this.username)
    this.facadeService.authenticationService.login({username: this.username, password: this.password}).subscribe(
      (data) => {
        console.log(data)
      }
    );
  }

}
