import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import { CarService } from 'src/app/core/car.service';

import { CreateUserDto } from 'src/app/core/user.service';
@Component({
  selector: 'app-add-car-page',
  templateUrl: './add-car-page.component.html',
  styleUrls: ['./add-car-page.component.css']
})
export class AddCarPageComponent implements OnInit {

  addCarFormGroup: FormGroup = this.formBuilder.group({

    make: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    model: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    imgUrl: new FormControl(null, [Validators.required, Validators.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)]),
    price: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    year: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    hp: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(3)]),

  })



  constructor(private formBuilder: FormBuilder, private carService: CarService, private router: Router) { }
  ngOnInit(): void {
  }
  submitNewCar(): void {

    if (this.addCarFormGroup.valid) {
      this.carService.postCar(this.addCarFormGroup.value)
        .subscribe((res) => {
          this.router.navigate(["/cars"])
        })
    }

  }
}
