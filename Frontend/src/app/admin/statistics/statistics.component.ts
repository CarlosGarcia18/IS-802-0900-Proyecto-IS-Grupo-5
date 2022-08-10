import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
  labels:string[] = ["mes","dia","año","semana","estado","manana","hola","e","mes","dia","año","semana","estado","manana","hola","e","mes"]
  data:number[] = [1,2,45,23,12,243,34,4,23,12,55,34,34,23,76,124,123]
  ngOnInit(): void {
  }

}
