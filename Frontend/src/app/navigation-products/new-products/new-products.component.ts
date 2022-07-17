import { ReadVarExpr } from '@angular/compiler';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NativeDateAdapter } from '@angular/material/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import {
  newProducto,
  EquipoService,
  uploadPhoto,
} from '../../SERVICES/equipo.service';

interface HtmlInputEvent extends Event {
  target: (HTMLInputElement & EventTarget) | null;
}

@Component({
  selector: 'new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css'],
})
export class NewProductsComponent implements OnInit {
  public previsualizacion: any;
  public archivos: any = []; //Sera de tipo array
  public image: any; //Enviar una imagen a la vez al servidor

  constructor(
    private equipoService: EquipoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.producto.fk_id_user = localStorage.getItem('token');
  }

  //agregar el formGrup
  productoForm = new FormGroup({
    // nombre: new FormControl('',[Validators.required, Validators.minLength(2) ]),
    titulo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    precio: new FormControl('', [Validators.required, Validators.minLength(2)]),
    categoria: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    decripcion: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    ubicacion: new FormControl('', [Validators.required]),
  });
  /*
get nombreControl():FormControl{
  return this.loginForm.get('nombre') as FormControl
}*/

  get tituloControl(): FormControl {
    return this.productoForm.get('titulo') as FormControl;
  }
  get precioControl(): FormControl {
    return this.productoForm.get('precio') as FormControl;
  }
  get categoriaControl(): FormControl {
    return this.productoForm.get('categoria') as FormControl;
  }
  get estadoControl(): FormControl {
    return this.productoForm.get('estado') as FormControl;
  }
  get descripcionControl(): FormControl {
    return this.productoForm.get('decripcion') as FormControl;
  }
  get ubicacionControl(): FormControl {
    return this.productoForm.get('ubicacion') as FormControl;
  }

  srcArray: any = [];

  capturarFile(event: any) {
    if (event.target.files.length > 0) {
      if (event.target.files.length <= 10) {
        let files = event.target.files;

        let file;
        for (let i = 0; i < files.length; i++) {
          if (this.archivos.length < 10) {
            file = files[i];
            this.archivos.push(file);
            const reader = new FileReader();
            reader.onload = (file) => {
              this.srcArray.push({
                img: reader.result,
                id: this.srcArray.length == 0 ? 0 : this.srcArray.length,
              });
            };
            reader.readAsDataURL(file);
          } else {
            window.alert('No mas de 10 imagenes');
          }
        }
      }else{
        window.alert('No mas de 10 imagenes');
      }
    }
  }

  deleteFile(id: number) {
    this.srcArray.splice(id, 1);
    this.archivos.splice(id, 1);

    for (let i = 0; i < this.srcArray.length; i++) {
      this.srcArray[i].id = i;
    }
  }
  
  producto: newProducto = {
    fk_id_user: '',
    fk_id_department: '',
    fk_id_product_category: '',
    fk_id_product_status: '',
    var_name: '',
    text_description: '',
    dou_price: 0,
  };

  /*agregarFavorito(){
    //console.log(this.dataEntrante);
    /*la vraible de servicio con atributo de servicio emite un atributo =emit */
  /*this.servicefavorito.disparadordeFavoritos.emit({
      data:this.dataEntrante
    })
  } */

  /* Para subir Archivo*/
  subirArchivo(): any {
    //Sube el producto
    this.equipoService.newProducto(this.producto).subscribe((res) => {
      var info: BookInfo = <any>res;

      //Recorre el arreglo de archivos
      this.archivos.forEach((archivo: any) => {
        const formularioDeDatos = new FormData();
        formularioDeDatos.append('image', archivo);
        console.log(archivo);

        //Sube archivo uno por uno
        this.equipoService
          .productoFoto(formularioDeDatos, info.id)
          .subscribe((res) => {
            console.log('Respuesta ', res);
          });
      });

      console.log('respuesta del servidor', res);
    });

    try {
    } catch (e) {
      console.log('Error', e);
    }
  }
}

interface BookInfo {
  status: string;
  id: string;
}
