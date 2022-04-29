import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CarListItemComponent } from '../feature/cars/car-list-item/car-list-item.component';
import { CarsModule } from '../feature/cars/cars.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
   // CarListItemComponent
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   CarsModule
  ]
})
export class AuthModule { }