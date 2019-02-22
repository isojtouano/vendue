import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

interface Data {
  message: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  signupForm: FormGroup;
  private username: string;
  private password: string;
  private email: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.setLoggedOut("out");
    this.signupForm = this.formBuilder.group({
      username: [ null, Validators.compose([]) ],
      password: [ null, Validators.compose([]) ],
      email: [ null, Validators.compose([]) ]
    })
  }

  signupUser() {
    this.username = this.signupForm.value.username;
    this.password = this.signupForm.value.password;
    this.email = this.signupForm.value.email;

    console.log(this.email);

    this.auth.insertUser(this.username, this.password, this.email).subscribe((data:Data) => {
      console.log(data);
      if(data.message){
        // register success
        console.log('success');
      }else{
        // register error
        console.log('error');
      }
    });
  }

}
