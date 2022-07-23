import { Component, OnInit } from '@angular/core';
import { EquipoService, traerProducto, user, deleteProduct } from 'src/app/SERVICES/equipo.service';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ProductsComponent } from '../products/products.component';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-published-products',
  templateUrl: './published-products.component.html',
  styleUrls: ['./published-products.component.css']
})
export class PublishedProductsComponent implements OnInit {
  //newProducto[] se importa la clase
  
  productoList:traerProducto[]=[];
  
  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    //this.usuario.fk_id_user=localStorage.getItem('token')
    
    this.getProducList()
  }

  getProducList(){
  this.equipoService.traeProd(localStorage.getItem('token')).subscribe(res=>{
    this.productoList=<any>res
    console.log(this.productoList)
  }, error =>{
    console.log(error)
})
  }
  
  borrarProd(id_product:string){
    
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el artículo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'No',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {

        /// Llama a la funcion de borrar producto
        this.equipoService.borrarProducto(id_product).subscribe((res) =>{
          console.log('se elimino')
          this.ngOnInit()
          }, error => {
            console.log(error);
           })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Se ha eliminado el producto",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

  }
  
  usuario: user = {
    fk_id_user: ''
  }

  
////////////////////PAGINACION////////////////
pageSize=8;
desde:number= 0;
hasta:number=8;

cambiarPagina(e:PageEvent){
  console.log(e)
  this.desde=e.pageIndex*e.pageSize;
  this.hasta=this.desde+e.pageSize;
}

}

interface BookInfo {
  status : string ;
  msg: string;
}