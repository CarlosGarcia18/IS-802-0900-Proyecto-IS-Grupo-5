import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/SERVICES/equipo.service';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-published-products',
  templateUrl: './published-products.component.html',
  styleUrls: ['./published-products.component.css']
})
export class PublishedProductsComponent implements OnInit {

  productoList:NewProductsComponent[] /* o el tipo que sera */ =[];

  constructor(private equipoService:EquipoService, newProductsComponent:NewProductsComponent) { }

  ngOnInit(): void {
    this.getProducList
  }

  getProducList(){
    this.equipoService.getProductos().subscribe({
      next: (data/*:NewProductsComponent[]*/) =>{
       // this.productoList=data;
      },
      /*EN caso de algun error */
      error:(err:any)=>{
        console.log('Error mostrado')
      }
    })
  }


}
