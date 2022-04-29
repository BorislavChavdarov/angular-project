import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  carId!: string;
  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("currentUser");
this.user = JSON.parse(this.user) || {};
console.log(this.isLoggedIn)


    this.activatedRoute.params.subscribe(params => {
      this.carId = params["carId"];
      this.carService.getCarById(this.carId).subscribe(car =>{
        this.car = car;
        this.isCreator = car._ownerId == this.user!._id
      })
     
    })
  }

  handleDelete(): void {
    this.carService.deleteCar(this.carId)
    .subscribe((res) => {
      this.router.navigate(['/cars']);
      }
    );
  }

}
