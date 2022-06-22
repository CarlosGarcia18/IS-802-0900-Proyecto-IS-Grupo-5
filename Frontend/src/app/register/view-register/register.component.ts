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
    
    nombre:'',
    apellido:'',
    correo:'',
    contrasena:'',
    telefono:'',
    ubicacion: 'Atlantida'
  }
  constructor(private _CargaScripts:CargarScriptsService,
              private RegistroService:RegistroService, private router: Router) 
              
            { }

  ngOnInit(): void {
  }
  agregar(){
    this.RegistroService.addUsuario(this.registro).subscribe();
    this.router.navigate(['/user'])
  }
}
