import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { emailCredential, EquipoService, status } from "../../SERVICES/equipo.service";
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  constructor(private EquipoService:EquipoService, private router: Router) { }

  module1Form = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required] )
  })

  get emailControl():FormControl{
    return this.module1Form.get('email') as FormControl
  }

  module1: emailCredential={
    var_email:"",
    bit_status:false
  }

  deleteUser:boolean = false

  sendEmail(){


      let result = this.EquipoService.emailModule1(this.module1).subscribe(
        res => {

          this.router.navigate(['module2/' + this.module1.var_email]);
          /*
          console.log(this.module1.bit_status)
          if(!this.module1.bit_status){
            this.deleteUser = true;
          }*/
      
        },
        err => console.log(err)
      );

  }



      /*console.log(result) */

  

  ngOnInit(): void {
  }

}
