import { Component, OnInit, Renderer2 } from '@angular/core';
import { EquipoService, ListadoUsuario, DenunciasUsuario } from '../../SERVICES/equipo.service';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  mostrar: Boolean = false;
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






  constructor(
    private equipoService:EquipoService,
    private render2:Renderer2,
    private paginator: MatPaginatorIntl,
  ) { 
    paginator.itemsPerPageLabel = "Productos por pagina:"
    paginator.firstPageLabel = "Primer página"
    paginator.lastPageLabel = "Ultima página"
    paginator.nextPageLabel = "Siguiente página"
    paginator.previousPageLabel = "Página anterior"
  }

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


UsuarioSeleccionado:string='0';
listarDenuncia(id_User:string){
  this.UsuarioSeleccionado=id_User
    localStorage.setItem('productToken',id_User)
  this.equipoService.getOneDenuncias(id_User).subscribe(res=>{
    this.denuncias=<any>res
    if(this.denuncias.length==0){
      this.mostrar=false
    }else{
      this.mostrar=true
    }
    console.log(this.denuncias)
  }, error =>{
    console.log(error)
  })



}


//EliminarUsuario

EliminarUsuario(id_user:string){
  this.equipoService.updateEstadoUsuario(id_user).subscribe(res=>{
    this.user=<any> res
    this.listarUsuariosDenuncia()
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
    this.listarDenuncia(this.UsuarioSeleccionado)


  })
}

  ////////////////////PAGINACION////////////////
  pageSize=6;
  desde:number= 0;
  hasta:number=6;

  cambiarPagina(e:PageEvent){
    console.log(e)
    this.desde=e.pageIndex*e.pageSize;
    this.hasta=this.desde+e.pageSize;
  }

  ////////////////////PAGINACION////////////////
  pageSize2=6;
  desde2:number= 0;
  hasta2:number=6;

  cambiarPagina2(e:PageEvent){
    console.log(e)
    this.desde2=e.pageIndex*e.pageSize;
    this.hasta2=this.desde2+e.pageSize;
  }
}

interface BookInfo {
  status : string ;
  msg: string;
}

interface BookInfo2 {
  status: string;
  id: string;
}
