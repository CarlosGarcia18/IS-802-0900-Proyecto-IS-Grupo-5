import { Component, OnInit } from '@angular/core';
import { EquipoService, filter, traerProducto, wishList} from '../../SERVICES/equipo.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private equipoService:EquipoService, private router: Router) {
  }

  ngOnInit(): void {

      // Traer los departamentos
      this.equipoService.getDepartments().subscribe(res=>{
        this.departments = <any>res
      }, error =>{
        console.log(error) 
      })

      // Suscripción
      this.listaDeseos.fk_id_user = localStorage.getItem('token');

      // Filtro
      this.filtrar()
  }
  filterForm=new FormGroup({
    ubicacion: new FormControl(''),
    precio: new FormControl(''),
    categoria: new FormControl('')    
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

  lista:traerProducto[]=[]

  filtro: filter={
    fk_id_department:"",
    dou_price:"",
    fk_id_product_category:""
    }

  listaDeseos: wishList = {
    fk_id_user: "",
    fk_id_product_category: ""
  }
    
    
    filtrar(){

    this.listaDeseos.fk_id_product_category = this.filtro.fk_id_product_category;
    //Aparecer y desaparecer el boton de suscribirse
    if((this.filtro.fk_id_product_category) != ""){
      this.enableSubscription = true
    }else{
      this.enableSubscription = false
    }
    this.subscribed = false
    


    //Ejecutar funcion 
     this.equipoService.filtrar(this.filtro).subscribe(res=>{
        this.lista=<any>res
        this.router.navigate([`/navigationProducts`])
        console.log(this.lista)
    }, error =>{
      console.log(error)
    })
  }

  

    ////PAGINACION
    //DATA DE EJEMPLO
    items :any[]=[{nombre: 'Producto 1',  precio: 'L.70'},
  {nombre: 'Producto 2', precio: 'L.90'},
  {nombre: 'Producto 3', precio: 'L.80'},
  {nombre: 'Producto 4', precio: 'L.220'},
  {nombre: 'Producto 5', precio: 'L.9230'},
  {nombre: 'Producto 6', precio: 'L.900'},
  {nombre: 'Producto 7', precio: 'L.19.00'},
  {nombre: 'Producto 8', precio: 'L.980'}];

  pageSize=6;
  desde:number= 0;
  hasta:number=6;

  enableSubscription:boolean = false
  subscribed:boolean = false

  departments:any[] = []

  suscribirse(){

    if(this.subscribed === false){ /// Si no esta suscrito
      this.equipoService.addWishList(this.listaDeseos).subscribe(res=>{
        console.log(this.listaDeseos)
        var info:BookInfo = <any>res
        console.log(info.msg)

        this.subscribed = true
      }, error =>{
        console.log(error)
      })

    }else{
    }
    
  }

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
