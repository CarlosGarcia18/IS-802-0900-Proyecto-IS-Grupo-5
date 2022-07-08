import { Component, OnInit } from '@angular/core';
import { filter, EquipoService } from 'src/app/SERVICES/equipo.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private EquipoService:EquipoService, private router: Router) { }

  ngOnInit(): void {
  }

  filterForm=new FormGroup({
    ubicacion: new FormControl(''),
    precio: new FormControl(''),
    categoria: new FormControl('', [Validators.email,Validators.required] ),
    
  });

  get ubicaControl():FormControl{
    return this.filterForm.get('ubicacion') as FormControl
  }
  get precioControl():FormControl{
    return this.filterForm.get('precio') as FormControl
  }
  get catControl():FormControl{
    return this.filterForm.get('categoria') as FormControl
  }


  pageSize=6;
  desde:number= 0;
  hasta:number=6;
  items :any[]=[{nombre: 'Producto 1',  precio: 'L.70'},
              {nombre: 'Producto 2', precio: 'L.90'},
              {nombre: 'Producto 3', precio: 'L.80'},
              {nombre: 'Producto 4', precio: 'L.220'},
              {nombre: 'Producto 5', precio: 'L.9230'},
              {nombre: 'Producto 6', precio: 'L.900'},
              {nombre: 'Producto 7', precio: 'L.19.00'},
              {nombre: 'Producto 8', precio: 'L.980'}];

  cambiarPagina(e:PageEvent){
    console.log(e)
    this.desde=e.pageIndex*e.pageSize;
    this.hasta=this.desde+e.pageSize;
  }

  filtro: filter={
    fk_id_department:0,
    dou_price:0,
    fk_id_product_category:0
    }


}
