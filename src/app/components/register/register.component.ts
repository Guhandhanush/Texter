import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private notify:NotifyService) { }

  registerForm = new FormGroup({
    registerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    registerEmail: new FormControl('', [Validators.required, Validators.email]),
    registerMobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    registerPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  registered() {
    if(this.registerForm.valid){
      this.notify.showSuccess('Usere Registered Successfully','Registration Success!');
      
    }
    else{
      this.notify.showError('Unable to Register ','Registration Failed!')
    }


  }
}
