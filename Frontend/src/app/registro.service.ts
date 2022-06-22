import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url='http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  addUsuario(registro:Registro){
      return this.http.post(this.url, registro)
  }  

}
export interface Registro{
 
  nombre?:string;
  apellido?:string;
  correo?:string;
  contrasena?:string;
  telefono?:string;
  ubicacion?:string;
}