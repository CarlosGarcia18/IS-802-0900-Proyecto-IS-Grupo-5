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


  /*Variable */
  module2Form:FormGroup;

  /*El get */
  get codigoVerificacion():FormControl{
    return this.module2Form.get('codigo') as FormControl
  }
  validate =false;

 
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
    this.veriCodigo.var_codigo=this.rutaActiva.snapshot.params['email']
    
   
    

  }
/*Variable  */
  veriCodigo:codigo={
    var_codigo:""
  }

  obtenerCodigo(){
    console.log('funciona')

    if(this.veriCodigo.var_codigo){
      var status:any =[];
      let result=this.EquipoService.addCodigo(this.veriCodigo).subscribe(
        res =>{
          
          if(status.status=='200'){
            this.router.navigate(['../../Module3/email'])
          }else{
            this.validate=true
            
          }
        },
        err => console.log(err)
      );
    }
    /*const Ncodigo:codigo ={
      var_codigo:this.module2Form.get('codigo')
    }
    */
  /* this.EquipoService.addCodigo(/*Ncodigo*).subscribe(data =>{
    /*this.toastr.success('El codigo de verificacion fue registrado con exito')*
    this.router.navigate(['/']);
   }, error=>{
    console.log(error);
    this.module2Form.reset();

   })*/

    
  
  }
 

}


 
