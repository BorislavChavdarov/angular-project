import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { CarListItemComponent } from './car-list-item/car-list-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCarPageComponent } from './add-car-page/add-car-page.component';
import { CarDetailsPageComponent } from './car-details-page/car-details-page.component';


@NgModule({
  declarations: [
    CarListComponent,
    CarListItemComponent,
    AddCarPageComponent,
    CarDetailsPageComponent,
    
  ],
  imports: [

    CarsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
   
    
  ]
})
export class CarsModule { }
