import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { updatePassword } from 'src/app/SERVICES/equipo.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  module1Form = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required] )
  })

  get emailControl():FormControl{
    return this.module1Form.get('email') as FormControl
  }

  modulo1: updatePassword={
    var_email:"",
    tex_password:"",
    tex_pass_ver:"",

  }

  sendEmail(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
