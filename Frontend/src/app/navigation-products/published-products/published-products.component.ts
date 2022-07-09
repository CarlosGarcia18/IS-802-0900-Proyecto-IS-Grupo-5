import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/SERVICES/equipo.service';


@Component({
  selector: 'app-published-products',
  templateUrl: './published-products.component.html',
  styleUrls: ['./published-products.component.css']
})
export class PublishedProductsComponent implements OnInit {

  producto =[];

  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getProductos()
    .subscribe(
      //En caso de una respuesta y error
      res => {
        this.producto
      },
      err => console.log(err)
    )
  }

}
