import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

export interface userData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private state: boolean; //false for logged out, true for logged in
  private method: string;
  private methodUrl: string;
  private homeUrl: string;
  private username: string;
  private password: string;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.auth.cast.subscribe(data => {
      console.log(data);
      if(data=='in'){
        this.state = true;
        this.method = "Log Out"; 
        this.methodUrl = "logout";
        this.homeUrl = '/dashboard';
      } else {
        this.state = false;
        this.method = "Log In";
        this.methodUrl = "login";
        this.homeUrl = '';
      }
    });
  }

  logout(){
    if(confirm("Do you want to log out?")){
      this.auth.setLoggedOut('out');
      this.router.navigateByUrl('/');
    }else{
      
    }
  }
  
}
