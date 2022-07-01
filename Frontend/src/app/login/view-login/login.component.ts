import { Component, OnInit } from '@angular/core';
import { EquipoService, login } from "../../SERVICES/equipo.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&-/_|])([A-Za-z\d$@$!%*?&]|[^ ]){7,40}$/;

  loginForm=new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required] ),
    password: new FormControl('', [Validators.required, Validators.pattern(this.regex)])
  });

  get emailControl():FormControl{
    return this.loginForm.get('email') as FormControl
  }

  get passControl():FormControl{
    return this.loginForm.get('password') as FormControl
  }
  
  login: login={
    var_email:"",
    tex_password:""
    }

  constructor(private EquipoService:EquipoService, private router: Router) { }

  ngOnInit(): void {
  }

  autenticar(){
    this.EquipoService.authLogin(this.login).subscribe(
      res => {
        var status:BookInfo = <any>res
        console.log(status.status)
        //console.log(hola)
        if (status.status == '200') {
          this.EquipoService.setToken(status.id)
          localStorage.setItem('token',status.id)
          this.router.navigate([`navigationProducts`])
        }else{
          console.log(status.status)
        }
      },
      err => console.log(err)
    );
  }

}

interface BookInfo {
  status : string ;
  id: string;
}

