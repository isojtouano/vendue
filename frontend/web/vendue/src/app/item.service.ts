import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers=new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded' })

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  addItem(name: string, description: string, category: string, reserve:number) {
    let payload = {
      'name': name,
      'category': category,
      'description': description,
      'reserve': reserve,
      'userId': 7
    }
    console.log(payload);

    return this.http.post('http://10.33.1.27/vendue-api/ItemController/insertItem', payload,{headers:headers});
  }
}
