import { Component, OnInit } from '@angular/core';
import { Registro, RegistroService } from 'src/app/registro.service';
import { CargarScriptsService } from './../.././cargar-scripts.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  constructor(private _CargaScripts:CargarScriptsService,
              private RegistroService:RegistroService, private router: Router) 
              
            { }

  ngOnInit(): void {
  }

  agregar(){
    this.RegistroService.addUsuario(this.registro).subscribe();
    //this.router.navigate(['/user'])
  }
}
