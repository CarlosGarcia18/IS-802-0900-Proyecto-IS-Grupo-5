import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
