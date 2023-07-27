import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData: any;

  constructor(private notify: NotifyService, private routing: Router, private auth: AuthService) { }

  loginForm = new FormGroup({
    loginEmail: new FormControl('', [Validators.required, Validators.email]),
    loginPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  loginFun() {
    if (this.loginForm.valid) {
      this.auth.getUserById(this.loginForm.value.loginEmail).subscribe(res => {
        this.userData = res;
        console.log(this.userData.registerPassword);
        console.log(this.loginForm.value.loginPassword)
        if(this.userData.registerPassword === this.loginForm.value.loginPassword){

        }
        else{
          this.notify.showError('User not Registered', 'Login Failed!')
        }
      })
    }
    else {

    }
  }
}
