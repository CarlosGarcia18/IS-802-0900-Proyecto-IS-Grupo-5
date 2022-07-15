import { Component, OnInit } from '@angular/core';
import { EquipoService, filter, traerProducto, subscribe, requestSubscriptions, subscription} from '../../SERVICES/equipo.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

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

      // Traer todas las categorias
      this.equipoService.getProductCategories().subscribe(res=>{
        this.categories = <any>res
      }, error =>{
        console.log(error) 
      })

      // Suscripción
      this.nuevaSuscripcion.fk_id_user = localStorage.getItem('token');

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
    fk_id_product_category:""
    }

  nuevaSuscripcion: subscribe = {
    fk_id_user: "",
    fk_id_product_category: ""
  }

  eliminarSuscripcion: subscribe = {
    fk_id_user: "",
    fk_id_product_category: ""
  }
    
  // Traer lista de suscripciones del usuario
  private updateSubscriptionList(){
    if(this.nuevaSuscripcion.fk_id_user != null){
         
      this.equipoService.getSubscriptions("" + this.nuevaSuscripcion.fk_id_user).subscribe(res=>{
        var request:requestSubscriptions = <any>res
        this.UserSubscription = request.msg

        this.UserSubscriptionID = []
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
  categories:any[] = []
  UserSubscription:subscription[] = []
  UserSubscriptionID:number[] = []

  suscribirse(){

    if(this.subscribed === false){ /// Si no esta suscrito
      this.equipoService.addsubscription(this.nuevaSuscripcion).subscribe(res=>{
        var info:BookInfo = <any>res

        /// Alerta
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: info.msg,
          showConfirmButton: false,
          timer: 1500
        })

        console.log(info.msg)

        this.subscribed = true
        this.updateSubscriptionList()
      }, error =>{
        console.log(error)
      })

    }else{ /// Si esta suscrito, anular suscripción

      /// Alerta cancelar sub
      Swal.fire({
        title: '¿Anular la suscripción de ' + this.UserSubscription[this.UserSubscriptionID.indexOf(+this.nuevaSuscripcion.fk_id_product_category)].var_name + '?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'No',
        confirmButtonText: 'Anular'
      }).then((result) => {
        if (result.isConfirmed) {

          /// Llama a la funcion de borrar suscripción
          this.equipoService.deleteSubscription(this.nuevaSuscripcion).subscribe(res=>{
            var info:BookInfo = <any>res
            console.log(info.msg)
    
            this.subscribed = false
            this.updateSubscriptionList()
          }, error =>{
            console.log(error)
          })

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Suscripción anulada",
            showConfirmButton: false,
            timer: 1500
          })
        }
      })


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
