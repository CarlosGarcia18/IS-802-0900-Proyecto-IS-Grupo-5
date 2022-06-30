import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  url ='http://localhost:4200/api'
  constructor(private http:HttpClient) { }

  addUsuario(registro:Registro){
      return this.http.post(this.url+"/user", registro)
  }  

  updatePassword(update:updatePassword){
      return this.http.put(this.url+"/userPassword", update)
  } 
  
  authLogin(auth:login){
      return this.http.post(this.url+"/auth", auth)
  }
}

export interface Registro{
  fk_id_department:number,
  var_email:string,
  var_name:string,
  var_lastname:string,
  tex_password:string,
  bit_rol:number,
  bit_status:number,
  var_phone:string
}

export interface updatePassword{
  var_email:string,
  tex_password:string,
  tex_pass_ver:string
}

export interface status{
  status:number
}

export interface login{
  var_email:string,
  tex_password:string
}

