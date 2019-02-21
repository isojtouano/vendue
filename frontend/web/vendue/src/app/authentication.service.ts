import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

  const headers=new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userId: number;
  private state: boolean = JSON.parse(localStorage.getItem('state') || 'false'); //false for logged out, true for logged in
  
  constructor(private http: HttpClient, private router: Router) { }



  loginUser(username:string, password:string) {
    let payload = {
      "user": username,
      "pass": password
    }
    //console.log(payload);

    return this.http.post('http://10.33.1.27/vendue-api/index.php/LoginController/getUserLogin', payload,{headers:headers});
  } 

  insertUser(username:string, password:string, email:string) {
    let payload = {
      "username": username,
      "password": password,
      "email": email
    }
    console.log(payload);

    return this.http.post('http://10.33.1.27/vendue-api/index.php/RegisterController/insertUsers', payload,{headers:headers});
  }

  setLoggedIn() {
    this.state = true;
    localStorage.setItem('state', 'true');
  }

  setLoggedOut() {
    this.state = false;
    localStorage.setItem('state', 'false');
  }

  getState() {
    return JSON.parse(localStorage.getItem('state') || this.state.toString());
  }
}
