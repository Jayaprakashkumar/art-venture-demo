import { Component } from '@angular/core';

import { AuthLoginService } from '../authService/auth-login.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-login',// page.login
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthLoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()    
    .then(res => {
      this.router.navigate(['/pages']);
    })
  }

  // tryTwitterLogin(){
  //   this.authService.doTwitterLogin()
  //   .then(res => {
  //     this.router.navigate(['/pages']);
  //   })
  // }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/pages']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/pages']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
