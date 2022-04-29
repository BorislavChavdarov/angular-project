import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFav } from './interfaces/fav';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor(private http:HttpClient) { }


  addInFavs(carId: string):Observable<IFav> {
    const user = JSON.parse(localStorage.getItem("currentUser")!);
    const userId = user._id;
    return this.http.post<IFav>(`${environment.apiUrl}/data/favs`, JSON.stringify({userId, carId}), {headers: {'content-type': 'application/json',
    "X-Authorization": user.accessToken}})
  } 
  getUserFavs():Observable<string[]> {
    const user = JSON.parse(localStorage.getItem("currentUser")!);
    const userId = user._id
    return this.http.get<IFav[]>(`${environment.apiUrl}/data/favs`, {headers: {'content-type': 'application/json',
    "X-Authorization": user.accessToken}})
    .pipe(
  
       map(favs => favs.filter(x => x.userId==userId)),
       map(favs => favs.map(x => x.carId))
    )
  }
  isCarInFav(carId:string):Observable<boolean> {
    const user = JSON.parse(localStorage.getItem("currentUser")!);
    const userId = user._id 
   
    return this.http.get<IFav[]>(`${environment.apiUrl}/data/favs`, {headers: {'content-type': 'application/json',
    "X-Authorization": user.accessToken}})
    .pipe(
      map(favs => favs.filter(x => x.carId==carId)),
  map(favs => {
    if (favs.length < 1) {
      return false;
    }
    let a = false;
  favs.forEach(x => {
if(x.userId== userId) {
a= true
}
  })

   return a
  })
       
    
    )
  }
}
