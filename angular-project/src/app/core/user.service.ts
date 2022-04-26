import { Injectable } from '@angular/core';



export interface CreateUserDto { email: string, password: string }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
