import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

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

  private state: string;
  private stateMethod: string;
  private username: string;
  private password: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.state = "Log In";
    this.stateMethod = "login";
  }

  refresh() {
    if( this.auth.getState() == 1 ) {
      this.state = "Log Out";
      this.stateMethod = "logout";
    }
  }
}
