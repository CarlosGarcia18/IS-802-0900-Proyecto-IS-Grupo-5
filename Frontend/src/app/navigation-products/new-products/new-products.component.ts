import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Title } from '@angular/platform-browser';
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
    //1 Captura el archivo
    const archivoCapturado =event.target.files[0]
    //imagen Codificada COn el base 64
    this.archivos(archivoCapturado).then((imagen: any) =>{
      this.previsualizacion= imagen.base;
      console.log(imagen);
    })
    //2 Inserta el archivo Capturado en la variable de archivos
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);
    //Previsualizacion
  }


  //Extraer el base 64
  
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
  



  producto:newProducto={
    fk_id_user: '',
    fk_id_department: '',
    fk_id_product_category:'',
    fk_id_product_status: '',
    var_name: 'sddd',
    text_description: '',
    dou_price: ''
  }

  /* Para subir Archivo*/
  subirArchivo():any{
    try{
      
      const formularioDeDatos= new FormData();

      this.archivos.forEach((archivo:any) => {
        formularioDeDatos.append('file',archivo)
        console.log(archivo);
      })
      //Para agregar mas datos en la funcion

     
      this.equipoService.newProducto(this.producto)
      .subscribe(res=>{
        console.log('respuesta del servidor',res);
      })
      this.equipoService.productoFoto(formularioDeDatos)
      .subscribe(res=>{
        console.log('Respuesta ',res)
      })
    }catch(e){
      console.log('Error',e);
    }
  }
}


 
