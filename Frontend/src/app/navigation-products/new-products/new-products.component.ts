import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { newProducto, EquipoService,status } from "../../SERVICES/equipo.service";




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

  constructor(private equipoService:EquipoService, private sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
  }

  capturarFile(event:any): any{
    //1 Captura el archivo
    const archivoCapturado =event.target.files[0]
    //imagen Codificada COn el base 64
    this.extraerBase64(archivoCapturado).then((imagen: any) =>{
      this.previsualizacion= imagen.base;
      console.log(imagen);
    })
    //2 Inserta el archivo Capturado en la variable de archivos
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);
    //Previsualizacion
  }


  //Extraer el base 64
  extraerBase64 =async ($event:any) => new Promise/*<void>*/((resolve,reject) =>{ 
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
      };
    }catch(e){
      return null;
    }
  });


/*
  producto:newProduct={
    user:'',
    department:'',
    product_category:'',
    product_status:'',
    var_name: '',
    text_description: '',
    price:'',
    availability:'',

    imagePath: ''

  }*/

  /* Para subir Archivo*/
  subirArchivo():any{
    try{
      
      const formularioDeDatos= new FormData();
      this.archivos.forEach((archivo:any) => {
        formularioDeDatos.append('files',archivo)
        console.log(archivo);
      })
      //Para agregar mas datos en la funcion
      //formularioDeDatos.append('titulo','mi titulo')
/*
      this.equipoService.newProducto(formularioDeDatos)
      .subscribe(res=>{
        console.log('respuesta del servidor',res);
      })*/
    }catch(e){
      console.log('Error',e);
    }
  }
}


 
