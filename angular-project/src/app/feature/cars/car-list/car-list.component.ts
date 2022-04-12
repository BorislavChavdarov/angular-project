import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/car.service';
import { ICar } from 'src/app/core/interfaces/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList!: ICar[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.loadCarList().subscribe(carList => {
      
      this.carList=carList;
    })
  }

}



