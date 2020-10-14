import { Component} from '@angular/core';
import {FormGroup, FormControl  } from '@angular/forms';
import{AuthService} from './../services/auth.service';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
//import{User} from './../../shared/models/user.interface'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
registerForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
  idalumno: new FormControl(''),
  
});
  
  constructor(private autSvc: AuthService, private router: Router) { }

async onRegister(){
  //console.log('Form→', this.registerForm.value);
  const {email, password, idalumno} = this.registerForm.value;
 try{
  const user = await this.autSvc.register(email, password);
  if(user){
   this.router.navigate(['/home']);
  }
 } catch(error){
   console.log(error);
  }
}
async onRegisterID(){
  //console.log('Form→', this.registerForm.value);
  const {idalumno} = this.registerForm.value;
 try{
  const user = await this.autSvc.updateId(idalumno);
} catch(error){
  console.log(error);
}
}
}