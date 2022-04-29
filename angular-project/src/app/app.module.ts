import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { CarsModule } from './feature/cars/cars.module';
import { PagesModule } from './feature/pages/pages.module';
import { CarListItemComponent } from './feature/cars/car-list-item/car-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CarsModule,
    PagesModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
