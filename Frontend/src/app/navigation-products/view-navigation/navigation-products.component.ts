import { Component, OnInit } from '@angular/core';
import { EquipoService } from "../../SERVICES/equipo.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-navigation-products',
  templateUrl: './navigation-products.component.html',
  styleUrls: ['./navigation-products.component.css']
})
export class NavigationProductsComponent implements OnInit {

  constructor(private EquipoSetvice:EquipoService,private router: Router) {
    this.name = <any>null
  }

  name:user[]

  ngOnInit(): void {
    if (localStorage.getItem('token')!=null && localStorage.getItem('token') != ""){
      this.EquipoSetvice.getUser(localStorage.getItem('token')!).subscribe(
        res=>{
          this.name = <any>res;
        },
        err => console.log(err)
        );
    }else{
      this.router.navigate([`home/login`])
    }
    
  }

}

interface user{
    fk_id_department:number,
    var_email:string,
    var_name:string,
    var_lastname:string,
    bit_status:number,
    var_phone:string
}
