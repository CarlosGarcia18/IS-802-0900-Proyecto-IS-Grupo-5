import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/SERVICES/equipo.service';


@Component({
  selector: 'app-published-products',
  templateUrl: './published-products.component.html',
  styleUrls: ['./published-products.component.css']
})
export class PublishedProductsComponent implements OnInit {

  photos =[];

  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getProducto()
    .subscribe(
      res =>{
        //this.photos =res;
      },
      err =>console.log(err)
    )

  }

}
