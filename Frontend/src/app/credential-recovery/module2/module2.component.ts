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

  

  expresiones = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&-/_|])([A-Za-z\d$@$!%*?&]|[^ ]){7,40}$/;


  
  module2Form:FormGroup;

  get codigoVerificacion():FormControl{
    return this.module2Form.get('codigo') as FormControl
  }

 
  modulo2: codigo={
    
    var_codigo:"",
    
  }
/*Constructor del codigo  */
  constructor(private rutaActiva: ActivatedRoute, private fb: FormBuilder,private router: Router,private EquipoService:EquipoService) {
    this.module2Form =this.fb.group({
      codigo: new FormControl('',[Validators.min(7),Validators.maxLength(12),Validators.pattern(this.expresiones)])

    })
   }

  ngOnInit(): void {
  }

  obtenerCOdigo(){}
 

}


 
