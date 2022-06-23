import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = 'localhost:4200/api/user'
  constructor(private http: HttpClient) { }

}
