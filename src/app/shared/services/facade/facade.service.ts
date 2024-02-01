//@ts-nocheck
import {Injectable, Injector} from "@angular/core";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _authenticationService: AuthenticationService;

  constructor(private injector: Injector) {
  }

  get authenticationService(): AuthenticationService {
    if (!this._authenticationService) {
      this._authenticationService = this.injector.get(AuthenticationService);
    }
    return this._authenticationService;
  }

}
