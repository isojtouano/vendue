import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

  const headers=new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })

  interface userData {
    username: string,
    email: string,
    fname: string,
    lname: string,
    paypalAccountNumber: string
  }

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userId: number;
  private state: boolean = JSON.parse(localStorage.getItem('state') || 'false'); //false for logged out, true for logged in
  private headerState = new BehaviorSubject<string>('out'); // out for logged out, in for logged in
  cast = this.headerState.asObservable();
  private baseUrl = 'http://10.33.1.27/vendue-api';

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(username:string, password:string) {
    let payload = {
      "username": username,
      "password": password
    }

    return this.http.post(this.baseUrl+'/UserController/getUserLogin', payload,{headers:headers});
  } 

  insertUser(username:string, password:string, email:string) {
    let payload = {
      "username": username,
      "password": password,
      "email": email
    }
    console.log(payload);

    return this.http.post(this.baseUrl+'/UserController/insertUsers', payload,{headers:headers});
  }

  setLoggedIn(data:string) {
    this.headerState.next(data);
    this.state = true;
    localStorage.setItem('state', 'true');
  }

  setLoggedOut(data:string) {
    this.headerState.next(data);
    this.state = false;
    localStorage.setItem('state', 'false');
  }

  getState() {
    return JSON.parse(localStorage.getItem('state') || this.state.toString());
  }

  getUserDetails(userId: number, token: string) {

  }

  editUser(username: string, email: string) {
    let payload = {
      "userId": 7,
      "username": username,
      "email": email
    }

    return this.http.post(this.baseUrl+'/UserController/updateProfile', payload, {headers:headers});
  }
}
