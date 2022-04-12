import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/core/interfaces/car';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent implements OnInit {
@Input() car!: ICar;
  constructor() { }

  ngOnInit(): void {
  }

}
