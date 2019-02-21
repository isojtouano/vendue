import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private auth: AuthenticationService, private http: HttpClient, private router: Router) { }

  getItems() {
    // get items to populate market
    return this.http.get('');
  }

  getSpecificItem() {
    // get 1 specific item
    return this.http.get('');
  }
}
