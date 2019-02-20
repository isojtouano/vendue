import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userId: number;
  private state: number; //0 for logged out, 1 for logged in
  constructor() { }

  loginUser(username:string, password:string) {

  }

  setLoggedIn() {
    this.state = 1;
  }

  setLoggedOut() {
    this.state = 0;
  }

  getState() {
    return this.state;
  }
}
