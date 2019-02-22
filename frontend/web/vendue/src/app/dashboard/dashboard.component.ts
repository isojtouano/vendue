import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.cast.subscribe((data) => {

    });
    //observe cast from service to obtain user data, user data will come from service
  }

}
