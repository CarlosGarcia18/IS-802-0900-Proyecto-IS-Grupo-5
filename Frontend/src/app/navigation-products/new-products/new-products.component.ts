import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { newProduct, EquipoService,status } from "../../SERVICES/equipo.service";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  
/*
  photoSelected: string | ArrayBuffer;
  
  file: File;
*/
  constructor(private EquipoService:EquipoService) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
     // this.file= <File>event.target.files[0];
      //imagen previa
      const reader = new FileReader();
     // reader.onload = e => this.photoSelected = reader.result;
     // reader.readAsDataURL(this.file)



    }

  }

  //para subir la foto
  /*
  uploadPhoto(title:HtmlInputEvent,decripcion:HTMLTextAreaElement) boolean{
    this.EquipoService.newProducto(title.value,description.value,this.file)
     .subscribe(res => console.log(res),err => console.log(err))

    return false

  };*/
 
}


 /*
  urls = [];
  // observable para notificar cuando las imagenes se carguen
  notificarCargaCompleta = new Subject();
  constructor() {
    // suscripcion al observable
    this.notificarCargaCompleta.subscribe(r => {
      // código a ejecutar cuando lasimágene esten cargadas
      console.log("imagenes cargadas");
      console.log(this.urls);
    });
  }
/*
  onselect(event) {
    if (event.target.files) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);

          // si el arreglo ya tiene las tres imagenes
          // notificar la carga completa
          if (this.urls.length == filesAmount) {
            this.notificarCargaCompleta.next();
          }
        };
      }
    }
  }*/


