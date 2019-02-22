import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  private newUsername: string;
  private newEmail: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.editProfileForm = this.formBuilder.group({
      username: [ null, Validators.compose([]) ],
      email: [ null, Validators.compose([]) ]
    })
  }

  editUser() {
    this.newUsername = this.editProfileForm.value.username;
    this.newEmail = this.editProfileForm.value.email;

    this.auth.editUser(this.newUsername, this.newEmail).subscribe((data) => {
      if(data){
        this.router.navigateByUrl('/dashboard');
        console.log('Edit success...');
      }else{
        console.log("Edit error...");
      }
    });
  }

}
