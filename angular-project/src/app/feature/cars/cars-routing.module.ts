import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {path:"cars", component:CarListComponent}
];


export const CarsRoutingModule = RouterModule.forChild(routes);


