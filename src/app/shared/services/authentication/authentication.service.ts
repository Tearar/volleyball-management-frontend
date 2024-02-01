import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignInDTO} from "../../interfaces/SignInDTO";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) { }

  login(signInDTO: SignInDTO) {
    return this.http.post('http://localhost:3000/auth/login', signInDTO, httpOptions);
  }
}
