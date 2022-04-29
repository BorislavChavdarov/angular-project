import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AddCarPageComponent } from './add-car-page/add-car-page.component';
import { CarDetailsPageComponent } from './car-details-page/car-details-page.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: "cars", component: CarListComponent },
  { path: "cars/add-car", canActivate:[AuthGuard], component: AddCarPageComponent },
  {path:"cars/edit/:carId", canActivate:[AuthGuard],component: CarEditComponent},
  {path:"cars/:carId", component: CarDetailsPageComponent},
  
];


export const CarsRoutingModule = RouterModule.forChild(routes);


