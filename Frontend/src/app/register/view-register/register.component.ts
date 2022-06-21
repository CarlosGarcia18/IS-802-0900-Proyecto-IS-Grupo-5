import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../.././cargar-scripts.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) { 
_CargaScripts.Carga(["validate.js"])
  }

  ngOnInit(): void {
  }

}
