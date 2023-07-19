import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {
      this.registerForm = this.formbuilder.group({
        registerName: ['', Validators.required],
        registerEmail:['',Validators.required],
        registerMobile:['',Validators.required],
        registerPassword:['',Validators.required]
      })
  }

  registered(){

    console.log(this.registerForm.value);

  }
}
