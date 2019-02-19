import { Component, OnInit } from '@angular/core';

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

  private username: string;
  private password: string;

  constructor() { }

  ngOnInit() {
  }

}
