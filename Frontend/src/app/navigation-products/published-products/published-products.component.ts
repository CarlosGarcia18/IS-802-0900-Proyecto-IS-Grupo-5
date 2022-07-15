import { Component, OnInit } from '@angular/core';
import { EquipoService, newProducto, traerProducto, user } from 'src/app/SERVICES/equipo.service';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ProductsComponent } from '../products/products.component';
import { PageEvent } from '@angular/material/paginator';

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
  /*getProducList(){
    this.equipoService.getProductos().subscribe({ /*Otra forma de hacerlo  data=>{
      console.log(data)
      this.productoList=data;
    }
      
       */
      /*
      next: (data:newProducto[]) =>{
       this.productoList=data;
       console.log(data)
      },
      /*EN caso de algun error */
      /*error:(err:any)=>{
        console.log('Error mostrado')
      }
      
    })
  }*/
  usuario: user = {
    fk_id_user: ''
  }


  eliminarProducto(id: any){
    if(confirm('Desea eliminar')){
      this.equipoService.eliminarProducto(id).subscribe((data) =>{
        this.getProducList();
      }, error => {
        console.log(error);
      })

      
    }

////////////////////PAGINACION////////////////


    /*
    this.equipoService.eliminarProducto(id).subscribe((data) =>{
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.getProducList();
    },error =>{
      console.log(error);
    
    })
    */
  }
  /*eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  } */
////////////////////PAGINACION////////////////
pageSize=6;
desde:number= 0;
hasta:number=6;
items :any[]=[{nombre: 'Producto 1',  precio: 'L.70', descr:'en buen estado, no se aceptan cambios'},
            {nombre: 'Producto 2', precio: 'L.90', descr:'en buen estado'},
            {nombre: 'Producto 3', precio: 'L.80', descr:'en buen estado'},
            {nombre: 'Producto 4', precio: 'L.220', descr:'en buen estado'},
            {nombre: 'Producto 5', precio: 'L.9230', descr:'en buen estado'},
            {nombre: 'Producto 6', precio: 'L.900', descr:'en buen estado'},
            {nombre: 'Producto 7', precio: 'L.19.00', descr:'en buen estado'},
            {nombre: 'Producto 8', precio: 'L.980',descr:'en buen estado'}];

cambiarPagina(e:PageEvent){
  console.log(e)
  this.desde=e.pageIndex*e.pageSize;
  this.hasta=this.desde+e.pageSize;
}
}
