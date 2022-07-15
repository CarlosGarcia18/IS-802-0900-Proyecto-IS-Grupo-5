import { Component, OnInit } from '@angular/core';
import { EquipoService, filter, traerProducto, subscribe, subscription,deleteWishlist} from '../../SERVICES/equipo.service';
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
      this.nuevaSuscripcion.fk_id_user = localStorage.getItem('token');
      this.filtro.id_user = localStorage.getItem('token');

      this.updateSubscriptionList()

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
    fk_id_product_category:"",
    id_user:""
    }

  nuevaSuscripcion: subscribe = {
    fk_id_user: "",
    fk_id_product_category: ""
  }
    
  // Traer lista de suscripciones del usuario
  private updateSubscriptionList(){
    if(this.nuevaSuscripcion.fk_id_user != null){
         
      this.equipoService.getSubscriptions("" + this.nuevaSuscripcion.fk_id_user).subscribe(res=>{
        this.UserSubscription = <any>res

        for(var index in this.UserSubscription){
          this.UserSubscriptionID.push(this.UserSubscription[index].id_product_category)
        }

      }, error =>{
        console.log(error) 
      })

    } 

  }
    
  filtrar(){

    this.nuevaSuscripcion.fk_id_product_category = this.filtro.fk_id_product_category;
    //Aparecer y desaparecer el boton de suscribirse
    if((this.filtro.fk_id_product_category) != "" && this.nuevaSuscripcion.fk_id_user != "" && this.nuevaSuscripcion.fk_id_user != null){
      this.enableSubscription = true

      if(this.UserSubscriptionID.includes(+this.filtro.fk_id_product_category)){
        this.subscribed = true
      }else{
        this.subscribed = false
      }

    }else{
      this.enableSubscription = false
    }

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
  UserSubscription:subscription[] = []
  UserSubscriptionID:number[] = []

  suscribirse(){

    if(this.subscribed === false){ /// Si no esta suscrito
      this.equipoService.addsubscription(this.nuevaSuscripcion).subscribe(res=>{
        console.log(this.nuevaSuscripcion)
        var info:BookInfo = <any>res
        console.log(info.msg)

        this.subscribed = true
        this.updateSubscriptionList()
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

  addWihlist(id:string,item:traerProducto){
    let data:deleteWishlist = {
      id_user:localStorage.getItem("token"),
      id_product:id
    }
    this.equipoService.addWishlist(data).subscribe(
      res=>{
        let afterDelete:after = <any> res
        if (afterDelete.status=="201" ||
          afterDelete.status=="202" ||
          afterDelete.status=="203" ||
          afterDelete.status=="0") {
            window.alert(afterDelete.msg)
        } else{
          item.whishlist="true"
        }
      }
    )
  }

  deleteWihlist(id:string,item:traerProducto){
    let data:deleteWishlist = {
      id_user:localStorage.getItem("token"),
      id_product:id
    }
    this.equipoService.deleteWishlist(data).subscribe(
      res=>{
        let afterDelete:after = <any> res
        if (afterDelete.status=="201" ||
          afterDelete.status=="202" ||
          afterDelete.status=="203" ||
          afterDelete.status=="0") {
            window.alert(afterDelete.msg)
        } else{
          item.whishlist="false"
        }
      }
    )
  }
}

interface BookInfo {
  status : string ;
  msg: string;
}

interface after{
  "status": string,
  "msg": string
}