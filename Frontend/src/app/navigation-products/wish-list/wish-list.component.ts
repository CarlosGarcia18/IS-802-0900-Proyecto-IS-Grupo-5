import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { EquipoService,wishListProducts,deleteWishlist } from '../../SERVICES/equipo.service'

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {

  constructor(private paginator: MatPaginatorIntl,private equipoService:EquipoService) {
    paginator.itemsPerPageLabel = "Productos por pagina:"
    paginator.firstPageLabel = "Primer página"
    paginator.lastPageLabel = "Ultima página"
    paginator.nextPageLabel = "Siguiente página"
    paginator.previousPageLabel = "Página anterior"
    console.log(paginator)

  }

errorDelete = false
error = false
  afterGet:after={
    status:"0",
    msg:[
      {
        id_photographs : 0,
        id_product: 0,
        var_name_photo: "null",
        var_name: "null",
        text_description: "null",
        dou_price: 0
      }
    ]
  }

  afterDelete:after={
    status:"0",
    msg:[
      {
        id_photographs : 0,
        id_product: 0,
        var_name_photo: "null",
        var_name: "null",
        text_description: "null",
        dou_price: 0
      }
    ]
  }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.equipoService.listWishlist(localStorage.getItem("token")).subscribe(
      res=>{
        this.afterGet = <any>res
        console.log(this.afterGet);
        
        if (this.afterGet.status == "202") {
          this.error = true
        }else if (this.afterGet.status == "201") {
          this.error = true
        }else if (this.afterGet.status != "200"){
          this.error = true
        }
      },
      err=> this.error = true
    )
  }

  pageSize = 12;
  desde: number = 0;
  hasta: number = 6;

  cambiarPagina(e: PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  removeProduct(id:string){
    let resultado = window.confirm('¿Esta seguro de eliminar el producto?')
    if (resultado) {
      let data:deleteWishlist = {
        id_user:localStorage.getItem("token"),
        id_product:id
      }
      this.equipoService.deleteWishlist(data).subscribe(
        res=>{
          this.afterDelete = <any> res
          if (this.afterDelete.status=="201" ||
            this.afterDelete.status=="202" ||
            this.afterDelete.status=="203" ||
            this.afterDelete.status=="0") {
              this.errorDelete = true
          } else{
            this.loadProducts()
          }
        }
      )
      
    }
  }
}

interface after{
  "status": string,
  "msg": wishListProducts[]
}