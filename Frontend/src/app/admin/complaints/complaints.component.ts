import { Component, OnInit } from '@angular/core';
import { EquipoService, complaint, user } from '../../SERVICES/equipo.service';

import { qualification,reqQualify} from '../../SERVICES/equipo.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  //Denuncia es de tipo inferzar complaint
  denuncias: complaint[]=[]
  user: user[]=[]
  //Listar los usuarios que tengan denuncias
  //

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
    this.listarDenuncia
  }


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

/*
eliminarUser(id_user:string){

  this.equipoService.deleteUser(id_user).subscribe(res=>{
    console.log('Se elimino')
    this.ngOnInit()
  }, error => {
    console.log(error);
  })
}
*/


}
