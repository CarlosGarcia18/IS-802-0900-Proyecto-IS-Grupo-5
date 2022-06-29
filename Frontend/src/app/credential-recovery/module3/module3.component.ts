import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl } from "@angular/forms";
import { Router} from '@angular/router';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.scss']
})
export class Module3Component implements OnInit {

  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&-/_|])([A-Za-z\d$@$!%*?&]|[^ ]){7,40}$/;
  credential:FormGroup;

  get passControl():FormControl{
    return this.credential.get('password') as FormControl
  }
  get passValidateControl():FormControl{
    return this.credential.get('confirmPassword') as FormControl
  }

  constructor(private fb: FormBuilder,private router: Router) { 
    this.credential = this.fb.group({
      password: new FormControl('',[Validators.required, Validators.minLength(7), Validators.pattern(this.regex)]),
      confirmPassword: new FormControl('', [Validators.minLength(7),Validators.required])
    })
  }

  ngOnInit(): void {
  }

  match(firstControlName:any, secondControlName:any){
    return !(this.credential.get(firstControlName)?.value === this.credential.get(secondControlName)?.value); 
  };

  updatePassword(){
    console.log("Esta en funcionamiento")
    this.router.navigate(['home/login'])
  }
}

