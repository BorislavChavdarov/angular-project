import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { CarService } from 'src/app/core/car.service';
import { ICar } from 'src/app/core/interfaces/car';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-car-details-page',
  templateUrl: './car-details-page.component.html',
  styleUrls: ['./car-details-page.component.css']
})
export class CarDetailsPageComponent implements OnInit {
  car!: ICar;
  user!: IUser | any;
  isCreator!: boolean;
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn();
  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("currentUser");
this.user = JSON.parse(this.user);

console.log(this.user)
    this.activatedRoute.params.subscribe(params => {
      const carId = params["carId"];
      this.carService.getCarById(carId).subscribe(car =>{
        this.car = car;
        this.isCreator = car.creator == this.user._id
      })
     
    })
  }

}
