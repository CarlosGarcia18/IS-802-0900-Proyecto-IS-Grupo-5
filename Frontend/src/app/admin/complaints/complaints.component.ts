import { Component, OnInit } from '@angular/core';
import { EquipoService, complaint } from '../../SERVICES/equipo.service';

import { qualification,reqQualify} from '../../SERVICES/equipo.service';


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  //Denuncia es de tipo inferzar complaint
  denuncias: complaint[]=[]

  qlfy: complaint={
    fk_id_user: '',
    fk_id_product: '',
    fk_id_complaint_category: '',
    text_description: ''
  }

/*
  qlfy: qualification ={
    fk_id_user_qualified: 0,
    fk_id_user_review: '',
    tin_score: 0
  }
  response: reqQualify={
    status:'',
    msg:''
  }
*/
  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
  }
/*
  argarProducto(id_denuncias:string){
    localStorage.setItem('productToken',id_denuncias)
    this.equipoService.getOneDenuncias(id_denuncias).subscribe(res=>{
      this.denuncias=<any>res
      this.qlfy.fk_id_user_qualified=parseInt(this.denuncias[0].fk_id_user)
      this.qlfy.fk_id_user_review=localStorage.getItem('token')
      console.log(this.denuncias)
    })
    }
*/

/*
cargarProducto(id_producto:string){
  this.equipoService.getOneProduct(id_producto).subscribe(res=>{
    this.producto=<any>res
    this.qlfy.fk_id_user_qualified=this.producto[0].fk_id_user
    this.qlfy.fk_id_user_review=localStorage.getItem('token')
    this.average(this.producto[0].fk_id_user);
    console.log(this.producto)
  },
*/
listarDenuncia(id_User:string){
  this.equipoService.getOneDenuncias(id_User).subscribe(res=>{
    this.denuncias=<any>res
    this.qlfy.fk_id_user=this.denuncias[0].fk_id_user
    this.qlfy.fk_id_product=localStorage.getItem('token')
    this.qlfy.text_description
    this.qlfy.fk_id_complaint_category
    console.log(this.denuncias)
  })


}


}
