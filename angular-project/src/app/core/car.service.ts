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
  getCarById(id: string): Observable<ICar>{
    return this.http.get<ICar>(`${environment.apiUrl}/data/cars/${id}`)
  }
  postCar(car: {description: string
    hp: number
    imgUrl: string
    make: string
    model: string
    price: number
    year: number
  }): Observable<ICar>{
      const user = JSON.parse(localStorage.getItem("currentUser")!);
      const userId = user._id
      console.log(user)
    return this.http.post<ICar>(`${environment.apiUrl}/data/cars`, JSON.stringify(car), {headers: {'content-type': 'application/json',
    "X-Authorization": user.accessToken}})
  }
  editCar(car: {description: string
    hp: number
    imgUrl: string
    make: string
    model: string
    price: number
    year: number}, carId: string): Observable<ICar>{
      const user = JSON.parse(localStorage.getItem("currentUser")!);
      const userId = user._id
      
    return this.http.put<ICar>(`${environment.apiUrl}/data/cars/${carId}`, JSON.stringify(car), {headers: {'content-type': 'application/json',
    "X-Authorization": user.accessToken}})
  }

  deleteCar(carId: string): Observable<ICar>{
      const user = JSON.parse(localStorage.getItem("currentUser")!);
      const userId = user._id
      
    return this.http.delete<ICar>(`${environment.apiUrl}/data/cars/${carId}`, {headers: {'content-type': 'application/json',
    "X-Authorization": user.accessToken}})
  }
}
