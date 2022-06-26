import { Component, OnInit } from '@angular/core';
import { Registro, EquipoService } from 'src/app/SERVICES/equipo.service';
//import { CargarScriptsService } from './../.././cargar-scripts.service';
import { Router} from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm=new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(2) ]),
    apellido: new FormControl('', [Validators.minLength(2),Validators.required]),
    email: new FormControl('', [Validators.email,Validators.required] ),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}')]), //mayusculas, minusculas,num caracter, minimo 6
    telefono: new FormControl('',[Validators.required, Validators.pattern('[0-9]{8}')]),
    ubicacion: new FormControl('', Validators.required),
    check:new FormControl(true, Validators.required)
  });

  get nombreControl():FormControl{
    return this.loginForm.get('nombre') as FormControl
  }
  get apellidoControl():FormControl{
    return this.loginForm.get('apellido') as FormControl
  }
  get emailControl():FormControl{
    return this.loginForm.get('email') as FormControl
  }
  get passControl():FormControl{
    return this.loginForm.get('password') as FormControl
  }
  get telControl():FormControl{
    return this.loginForm.get('telefono') as FormControl
  }
  get ubicaControl():FormControl{
    return this.loginForm.get('ubicacion') as FormControl
  }
  get chkControl():FormControl{
    return this.loginForm.get('check') as FormControl
  }

  registro: Registro={
  fk_id_department:1,
  var_email:"",
  var_name:"",
  var_lastname:"",
  tex_password:"",
  bit_rol:1,
  bit_status:1,
  var_phone:""
  }
  constructor(//private _CargaScripts:CargarScriptsService,
              private EquipoService:EquipoService, private router: Router)            
            { }

  ngOnInit(): void {
  }

  agregar(){
    this.EquipoService.addUsuario(this.registro).subscribe();
    //this.router.navigate(['/user'])
    this.loginForm.reset();
  }

  ruta:string = "home/register"
  
}
