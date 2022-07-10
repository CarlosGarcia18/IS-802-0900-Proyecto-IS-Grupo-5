import { Component, OnInit } from '@angular/core';
import { EquipoService, newProducto } from 'src/app/SERVICES/equipo.service';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-published-products',
  templateUrl: './published-products.component.html',
  styleUrls: ['./published-products.component.css']
})
export class PublishedProductsComponent implements OnInit {
  //newProducto[] se importa la clase
  productoList:newProducto[]=[];

  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    this.getProducList
  }

  getProducList(){
    this.equipoService.getProductos().subscribe({ /*Otra forma de hacerlo  data=>{
      console.log(data)
      this.productoList=data;
    }
      
       */
      next: (data:newProducto[]) =>{
       this.productoList=data;
      },
      /*EN caso de algun error */
      error:(err:any)=>{
        console.log('Error mostrado')
      }
    })
  }



  eliminarProducto(id: any){
    if(confirm('Desea eliminar')){
      this.equipoService.eliminarProducto(id).subscribe((data) =>{
        this.getProducList();
      }, error => {
        console.log(error);
      })
    }



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


}
