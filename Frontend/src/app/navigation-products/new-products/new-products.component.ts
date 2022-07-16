import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { newProducto, EquipoService, uploadPhoto } from "../../SERVICES/equipo.service";




interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget | null;
}

@Component({
  selector: 'new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  public previsualizacion:any;
  public archivos: any=[] //Sera de tipo array
  public image: any //Enviar una imagen a la vez al servidor

  constructor(private equipoService:EquipoService, private sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
    this.producto.fk_id_user=localStorage.getItem('token')
  }

//agregar el formGrup
productoForm=new FormGroup({
  // nombre: new FormControl('',[Validators.required, Validators.minLength(2) ]),
  titulo: new FormControl('',[Validators.required]),
  precio: new FormControl('',[Validators.required]),
  categoria:new FormControl('',[Validators.required]),
  estado:new FormControl('',[Validators.required]),
  decripcion:new FormControl('',[Validators.required]),
  ubicacion:new FormControl('',[Validators.required])
})
/*
get nombreControl():FormControl{
  return this.loginForm.get('nombre') as FormControl
}*/

get tituloControl():FormControl{
  return this.productoForm.get('titulo') as FormControl
}
get precioControl():FormControl{
  return this.productoForm.get('precio') as FormControl
}
get categoriaControl():FormControl{
  return this.productoForm.get('categoria') as FormControl
}
get estadoControl():FormControl{
  return this.productoForm.get('estado') as FormControl
}
get descripcionControl():FormControl{
  return this.productoForm.get('decripcion') as FormControl
}
get ubicacionControl():FormControl{
  return this.productoForm.get('ubicacion') as FormControl
}

capturarFile(event:any): any{
  Array.from(event.target.files).forEach((element:any) => {
    this.loadFile(element);
    if(this.archivos.length < 10){
      this.archivos.push(element)
      console.log("\n\n<<<<"+this.archivos.length+"\n\n");
    }else{
      window.alert('no mas de 10 imagenes')
      return
    }
  });
}

  loadFile(file:File){
    const reader=new FileReader();
    reader.onload=()=>{
      console.log(reader.result)

    this.previsualizacion=reader.result

    //this.archivos.push(reader.result)

    };
    reader.readAsDataURL(file);

  }



  //Extraer el base 64
  /*
  extraerBase64 =async ($event:any) => new Promise((resolve,reject) =>{
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image= this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();

      reader.readAsDataURL($event);
      reader.onload =() =>{
        resolve({
          base:reader.result
        });
      };
      reader.onerror = error =>{
        resolve({
          base:null
        });
      }; return null;
    }catch(e){
      return null;
    }
  });
  */




  producto:newProducto={
    fk_id_user: '',
    fk_id_department: '',
    fk_id_product_category:'',
    fk_id_product_status: '',
    var_name: '',
    text_description: '',
    dou_price: ''
  }

  /*agregarFavorito(){
    //console.log(this.dataEntrante);
    /*la vraible de servicio con atributo de servicio emite un atributo =emit */
    /*this.servicefavorito.disparadordeFavoritos.emit({
      data:this.dataEntrante
    })
  } */

  /* Para subir Archivo*/
  subirArchivo():any{

    //Sube el producto
    this.equipoService.newProducto(this.producto)
    .subscribe(res=>{

      var info:BookInfo = <any>res

      //Recorre el arreglo de archivos
      this.archivos.forEach((archivo:any) => {
        const formularioDeDatos = new FormData();
        formularioDeDatos.append('image',archivo)
        console.log(archivo)

        //Sube archivo uno por uno
        this.equipoService.productoFoto(formularioDeDatos, info.id)
          .subscribe(res=>{
            console.log('Respuesta ',res)
        })

      })

      console.log('respuesta del servidor',res);

    })


    try{
    }catch(e){
      console.log('Error',e);
    }
  }
}

interface BookInfo {
  status : string ;
  id: string;
}
