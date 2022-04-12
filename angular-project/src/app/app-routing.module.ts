import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './feature/pages/about-us/about-us.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
const routes: Routes = [
  {path:"home", component: HomePageComponent},
  {path:"about-us", component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
