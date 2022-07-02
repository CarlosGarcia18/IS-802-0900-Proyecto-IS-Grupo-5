import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';
import { codigo, EquipoService,status } from "../../SERVICES/equipo.service";

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {

  
  
  module2Form = new FormGroup({
    codigo: new FormControl('', [] )
  })
  

  get codigoVerificacion():FormControl{
    return this.module2Form.get('codigo') as FormControl
  }

 
  modulo2: codigo={
    
    var_codigo:"",
    
  }

  constructor() { }

  ngOnInit(): void {
  }
 

}


 
