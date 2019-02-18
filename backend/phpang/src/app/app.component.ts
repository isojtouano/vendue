import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private http: HttpClient){}
  post: any;
  title = 'phpang';
  url = "http://localhost/ci/index.php/welcome/index";
  param: any;
  
  getU(username, password){
    this.param ={
      "users":
    {
      "username":username.value,
      "password":password.value
    }
    }

    this.http.post(this.url, this.param).subscribe(res => this.post = res);
  }
}
