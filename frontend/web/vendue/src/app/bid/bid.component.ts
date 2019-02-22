import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    console.log(this.auth.getState());
  }

}
