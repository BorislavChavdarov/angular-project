import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  login(userData: {email:string, password:string}): Observable<IUser> {
    return this.httpClient
    .post<IUser>(`${environment.apiUrl}/users/login`, userData, {})
    
  }
  register(userData: {email:string, password:string}): Observable<IUser> {
    return this.httpClient
    .post<IUser>(`${environment.apiUrl}/users/register`, userData, {})
    
  }
//   register- {
//     "email": "asd@email.com",
//     "password": "asd123",
//     "_createdOn": 1650993005645,
//     "_id": "48565d60-4e6e-4a12-b3d2-6327d38e2aff",
//     "accessToken": "e2753aaabfd3f73179ce859e2851a83e4f4bd24db70811e2c0a3c42a20d999e9"
// }

// login - {
//   "email": "asd@email.com",
//   "password": "asd123",
//   "_createdOn": 1650993005645,
//   "_id": "48565d60-4e6e-4a12-b3d2-6327d38e2aff",
//   "accessToken": "6e3b112ecd970e0b67e0584e32224680b5c0cf9963e955e98a0afde3e707b8f0"
// }
}