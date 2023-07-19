import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private notify:NotifyService){}

  loginForm = new FormGroup({
    loginEmail: new FormControl('', [Validators.required,Validators.email]),
    loginPassword: new FormControl('', [Validators.required,Validators.minLength(8)])
  })

  loginFun(){
    if(this.loginForm.valid){
      this.notify.showSuccess('User Logged in successfully','Login Success!')
      
    }
    else{
      this.notify.showError('Unable to Login!','Login Failed!')
    }
  }
}
