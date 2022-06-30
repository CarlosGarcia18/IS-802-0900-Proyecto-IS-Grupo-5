import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Registro, EquipoService } from 'src/app/SERVICES/equipo.service';

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

  modulo1: Registro={
    fk_id_department:1,
    var_email:"",
    var_name:"",
    var_lastname:"",
    tex_password:"",
    bit_rol:1,
    bit_status:1,
    var_phone:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
