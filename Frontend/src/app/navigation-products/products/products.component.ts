import { Component, OnInit } from '@angular/core';
import { EquipoService, filter } from '../../SERVICES/equipo.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  items :any[]=[];
  
  constructor(private EquipoService:EquipoService, private router: Router) { }


  ngOnInit(): void {
    this.EquipoService.filter(this.filtro).subscribe(res=>{
      this.items=<any>res
      console.log(res)
    })
  }


  filtrar(){
    this.EquipoService.filter(this.filtro).subscribe(res=>{
      this.items=<any>res
      console.log(res)

    });

  }
  filterForm=new FormGroup({
    ubicacion: new FormControl(''),
    precio: new FormControl(''),
    categoria: new FormControl(''),
    
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


  filtro: filter={
    fk_id_department:0,
    dou_price:0,
    fk_id_product_category:0
    }

    
  
    
  ///PAGINACION///
  pageSize=6;
  desde:number= 0;
  hasta:number=6;

  
  

  cambiarPagina(e:PageEvent){
    console.log(e)
    this.desde=e.pageIndex*e.pageSize;
    this.hasta=this.desde+e.pageSize;
  }

  



}
