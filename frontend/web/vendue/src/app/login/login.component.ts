import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private userId: number;

  constructor(private auth: AuthenticationService) { }

  getUserDetails(username:string, password:string) {

  }

  ngOnInit() {
    
  }

}
