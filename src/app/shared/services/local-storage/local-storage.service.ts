import { Injectable } from '@angular/core';

const TOKEN = 'access_token';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveToken(accessToken: string) {
    window.localStorage.setItem(TOKEN, accessToken);
  }
}
