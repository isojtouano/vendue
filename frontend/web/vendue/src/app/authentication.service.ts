import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userId: number;

  constructor() { }

  loginUser(username:string, password:string) {

  }
}
