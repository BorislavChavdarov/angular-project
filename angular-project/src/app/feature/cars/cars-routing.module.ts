import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarPageComponent } from './add-car-page/add-car-page.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {path:"cars", component:CarListComponent},
  {path:"add-car", component: AddCarPageComponent}
];


export const CarsRoutingModule = RouterModule.forChild(routes);


