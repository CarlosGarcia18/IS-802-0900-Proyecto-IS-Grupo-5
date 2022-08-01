import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { EquipoService,wishListProducts,deleteWishlist, getProduct, Images, qualification, reqQualify } from '../../SERVICES/equipo.service'
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})

  
export class WishListComponent implements OnInit {
  producto: getProduct[]=[]
  images: Images[]=[]
  firstImage: string=''
  qlfy: qualification ={
    fk_id_user_qualified: 0,
    fk_id_user_review: '', 
    tin_score: 0
  }
  response: reqQualify={
    status:'',
    msg:''
  }
  public toggleButton: boolean = false;
  public paragraph:string=''
  
  constructor(private paginator: MatPaginatorIntl,private equipoService:EquipoService) {
    paginator.itemsPerPageLabel = "Productos por pagina:"
    paginator.firstPageLabel = "Primer página"
    paginator.lastPageLabel = "Ultima página"
    paginator.nextPageLabel = "Siguiente página"
    paginator.previousPageLabel = "Página anterior"
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
    this.toggleButton=false
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
  hasta: number = 12;

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
  
  
  cargarProducto(id_producto:string){
  this.equipoService.getOneProduct(id_producto).subscribe(res=>{
    this.producto=<any>res
    this.qlfy.fk_id_user_qualified=this.producto[0].fk_id_user
    this.qlfy.fk_id_user_review=localStorage.getItem('token')

    console.log(this.producto)
  })
  }

  cargarImagenes(id_producto:string){
    this.equipoService.getImages(id_producto).subscribe(res=>{
      this.images=<any>res
      this.firstImage=this.images[0].var_name
    })
  }

  calificar(score:number){
    this.qlfy.tin_score=score
    //this.toggleButton=true;

    this.equipoService.qualify(this.qlfy).subscribe(res=>{
      this.response=<any>res
     // console.log(this.response)
      if(this.response.status=='203'){
        this.toggleButton=true
        this.paragraph="Ya has calificado a este vendedor anteriormente"
        console.log('Usuario ya fue calificado')}
        else {
        this.toggleButton=false
        console.log(this.qlfy)
        }
    })
  }
  
  sumaVista(id:string){
    this.equipoService.views(id).subscribe(res=>{
      console.log(res)
    })
  }
  
}



interface after{
  "status": string,
  "msg": wishListProducts[]
}