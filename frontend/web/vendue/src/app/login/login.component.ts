import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Data{
  auth_message: auth_message,
  user_info: user_info
}

interface auth_message{
  _message: string
  _isSuccessful:boolean
  accessToken:string
}

interface user_info{
  firstname: string,
  email: string  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private userId: number;
  private username: string;
  private password:string;

  loginForm: FormGroup;

  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  loginUser() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.auth.loginUser(this.username, this.password).subscribe((data: Data) => {
      if(data.auth_message._isSuccessful){
        this.router.navigateByUrl('/dashboard');
        this.auth.setLoggedIn('in');
        console.log('Data: ',data);
        console.log('Login success...');
      }else{
        console.log("Login error...");
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [ null, Validators.compose([]) ],
      password: [ null, Validators.compose([]) ]
    })
  }

}
