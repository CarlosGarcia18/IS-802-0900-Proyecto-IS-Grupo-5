import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Module2Component } from '../credential-recovery/module2/module2.component';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  url ='http://localhost:4200/api'
  constructor(private http:HttpClient) { }

  addUsuario(registro:Registro){
      return this.http.post(this.url+"/user", registro)
  } 
  
  getDepartments(){
    return this.http.get(this.url+"/departament")

  }

  getProductos(){
    return this.http.get<newProducto[]>(this.url)
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
 
  emailModule1(module1:emailCredential){
    return this.http.post(this.url+"/credential", module1)
  }

  newProducto(newProduct:newProducto){
    return this.http.post(this.url+"/newProduct",newProduct)
  }

  eliminarProducto(id:string):Observable<any>{
    return this.http.delete(this.url +id);
  }
  productoFoto(file:FormData){
    return this.http.post(this.url +"/product/postImage",file);
  }

  filtrar(filtro:filter){
    
    return this.http.post(this.url+"/productFiltering", filtro)
  }
}

export interface filter{
  fk_id_department: number,
  dou_price:number,
  fk_id_product_category:number
}

export interface traerProducto{
  id_photographs : number,
  blob_file: string,
  fk_id_user: number,
  fk_id_department: number,
  var_name: string,
  text_description: string,
  dou_price: number,
  publication_date: string
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

export interface newProducto {
    fk_id_user: string | null
    fk_id_department: string
    fk_id_product_category: string
    fk_id_product_status: string
    var_name: string
    text_description: string
    dou_price: string
    

}


