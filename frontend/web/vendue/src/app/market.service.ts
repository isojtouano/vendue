import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const headers=new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private auth: AuthenticationService, private http: HttpClient, private router: Router) { }

  getItems() {
    // get items to populate market
    return this.http.get("http://10.33.1.27/vendue-api/ItemController/getItem", {headers:headers});
  }

  getSpecificItem() {
    // get 1 specific item
    return this.http.get('');
  }
}
