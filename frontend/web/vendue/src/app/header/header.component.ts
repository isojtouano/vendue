import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

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

  private state: number; //0 for logged out, 1 for logged in
  private method: string;
  private methodUrl: string;
  private homeUrl: string;
  private username: string;
  private password: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.state = 0;
    this.method = "Log In";
    this.methodUrl = "login";
    this.homeUrl = '';
  }
  
}
