import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AddCarPageComponent } from './add-car-page/add-car-page.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: "cars", component: CarListComponent },
  { path: "add-car", canActivate:[AuthGuard], component: AddCarPageComponent }
];


export const CarsRoutingModule = RouterModule.forChild(routes);


