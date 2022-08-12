import { Component, OnInit } from '@angular/core';
import { EquipoService, complaint, user, Registro } from '../../SERVICES/equipo.service';

import { qualification,reqQualify} from '../../SERVICES/equipo.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  //Denuncia es de tipo inferzar complaint
  denuncias: complaint[]=[]
  //Se implementa la interfaz registro
  user:Registro[]=[]
  //Se implementa la interfaz user

  //Listar los usuarios que tengan denuncias
  //

  qlfy: complaint={
    fk_id_user: '',
    fk_id_product: '',
    fk_id_complaint_category: '',
    text_description: ''
  }

  use: Registro={
    fk_id_department: 0,
    var_email: '',
    var_name: '',
    var_lastname: '',
    tex_password: '',
    bit_status: 0,
    var_phone: ''
  }

  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    this.listarDenuncia
    this.listarUsuariosDenuncia()

  }

listarUsuariosDenuncia(){
  this.equipoService.getUserDenuncia().subscribe(res=>{
    this.user=<any> res
    console.log(this.user)
    this.use.var_name
    this.use.var_lastname

  }, error =>{
    console.log(error)
  })
}


listarDenuncia(id_User:string){
  this.equipoService.getOneDenuncias(id_User).subscribe(res=>{
    this.denuncias=<any>res
    this.qlfy.fk_id_user=this.denuncias[0].fk_id_user
    this.qlfy.fk_id_product=localStorage.getItem('token')
    this.qlfy.text_description
    this.qlfy.fk_id_complaint_category
    console.log(this.denuncias)
  }, error =>{
    console.log(error)
  })

}




}
