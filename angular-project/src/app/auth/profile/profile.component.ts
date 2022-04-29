import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/core/car.service';
import { FavsService } from 'src/app/core/favs.service';
import { ICar } from 'src/app/core/interfaces/car';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //favCarsIds!: Observable<string[]>;
  carList!:ICar[];
  user!: IUser | any;
  constructor(private favsService: FavsService, private carService: CarService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("currentUser");
    this.user = JSON.parse(this.user) || {};
    //console.log(this.isLoggedIn)
    let cars:ICar[] = [];
     this.favsService.getUserFavs()
    .subscribe(res => {
      res.forEach( carId => {
        this.carService.getCarById(carId).subscribe(car => {
        
            
         
            cars.push(car)
          
          
        })
      });
      this.carList=cars;
      
    });
    
  }
  

}
