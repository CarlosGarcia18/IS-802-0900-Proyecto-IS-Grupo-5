import { Component, OnInit } from '@angular/core';
import { EquipoService, complaint, user, Registro, ListadoUsuario, DenunciasUsuario } from '../../SERVICES/equipo.service';

import { qualification,reqQualify} from '../../SERVICES/equipo.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  //Denuncia es de tipo inferzar complaint
  denuncias: DenunciasUsuario[]=[]
  //Se implementa la interfaz registro
  user:ListadoUsuario[]=[]
  //Se implementa la interfaz Numero denuncias


  //Listar los usuarios que tengan denuncias
  //

  qlfy: DenunciasUsuario={
    NombreCategoria: '',
    NombreUsuario: '',
    SegundoNombre: '',
    Descripcion: '',
    tim_date: '',
    dateComplaint: '',
    hourComplaint: '',
    id_COMPLAINT: ''
  }

  use: ListadoUsuario={
    id_user: '',
    var_name: '',
    var_lastname: '',
    Denuncias1: ''
  }






  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    this.listarUsuariosDenuncia()
    this.eliminarDenuncia




  }

listarUsuariosDenuncia(){
  this.equipoService.getUserDenuncia().subscribe(res=>{
    this.user=<any> res
    console.log(this.user)


  }, error =>{
    console.log(error)
  })
}



listarDenuncia(id_User:string){

  localStorage.setItem('productToken',id_User)
  this.equipoService.getOneDenuncias(id_User).subscribe(res=>{
    this.denuncias=<any>res
    console.log(this.denuncias)
  }, error =>{
    console.log(error)
  })

}


//EliminarUsuario
EliminarUsuario(id_user:string){
  localStorage.setItem('productToken',id_user)
  this.equipoService.updateEstadoUsuario(id_user).subscribe(res=>{
    this.user=<any> res
    console.log(this.user)
    console.log('Eliminado')
  }, error =>{
    console.log(error)
  })

}

//Eliminar Denuncias
eliminarDenuncia(id:string){
  localStorage.setItem('productToken',id)
  this.equipoService.deleteDenuncia(id).subscribe(data =>{
    console.log('Eliminado')
    this.listarUsuariosDenuncia(),
    this.listarDenuncia,
    this.ngOnInit


  })
}




}
