import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

import { ICar } from './interfaces/car';
import {environment} from "../../environments/environment"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CarService {

  constructor(private http:HttpClient) { }

  loadCarList(): Observable<ICar[]>{
    return this.http.get<ICar[]>(`${environment.apiUrl}/data/cars`)
  }
}
