import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Module2Component } from '../credential-recovery/module2/module2.component';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  url ='http://localhost:4200/api'
  constructor(private http:HttpClient) { }

  addUsuario(registro:Registro){
      return this.http.post(this.url+"/user", registro)
  } 
  
  addCodigo(codigo:codigo)/*: observable<any> */{
    return this.http.post(this.url+"/credential/confirm",codigo)
  }

  updatePassword(update:updatePassword){
      return this.http.put(this.url+"/userPassword", update)
  } 

  
  authLogin(auth:login){
      return this.http.post(this.url+"/auth", auth)
  }

  getUser(id:string){
    return this.http.get(this.url+"/user/"+id)
  }
  getProducto(){
    return this.http.get(this.url)
  }

  emailModule1(module1:emailCredential){
    return this.http.post(this.url+"/credential", module1)
  }

  newProducto0(new_product:newproducto){
    return this.http.post(this.url+"new-producto",new_product)
  }
  //Metodo del formulario Nuevo producto
  newProducto(title:string,description:string,photo:File){
    //Se envia tipo formulario y se gurda en una constante
    const fd = new FormData();
    fd.append('title',title);
    fd.append('description',description);
    fd.append('image',photo);
    //Manda los datos al servidor
    return this.http.post(this.url,fd)
    

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
export interface codigo{
  var_code:string,
  var_email:string
}

export interface login{
  var_email:string,
  tex_password:string
}

export interface emailCredential{
  var_email:string
  bit_status:boolean
}

export interface newproducto {
    _id?: string;
    title: String;
    description: String;
    imagePath: string;
}

