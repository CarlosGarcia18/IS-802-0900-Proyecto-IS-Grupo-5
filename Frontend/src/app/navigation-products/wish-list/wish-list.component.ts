import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  list = {
    id_photographs: '1',
    var_name_photo: 'iJhsg37391jksnjiBnGG.jpg',
    fk_id_user: '2',
    fk_id_department: '3',
    var_name: 'Luis Ernesto castillo el escamich',
    text_description: 'Mucho texto',
    dou_price: 1234,
    publication_date: '12/12/12',
  };

  lista: any[] = [this.list, this.list, this.list];

  constructor(private paginator: MatPaginatorIntl) {
    paginator.itemsPerPageLabel = "Productos por pagina:"
    paginator.firstPageLabel = "Primer página"
    paginator.lastPageLabel = "Ultima página"
    paginator.nextPageLabel = "Siguiente página"
    paginator.previousPageLabel = "Página anterior"
    console.log(paginator)

  }

  ngOnInit(): void {}

  pageSize = 12;
  desde: number = 0;
  hasta: number = 6;

  cambiarPagina(e: PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  removeProduct(){
    console.log("elimina wishlist")
  }
}
