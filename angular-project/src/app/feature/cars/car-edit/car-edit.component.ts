import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CarService } from 'src/app/core/car.service';
import { ICar } from 'src/app/core/interfaces/car';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  car!: ICar;
  user!: IUser | any;
  isCreator!: boolean;
  carId!: string
  editCarFormGroup: FormGroup = this.formBuilder.group({

    make: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    model: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    imgUrl: new FormControl(null, [Validators.required, Validators.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)]),
    price: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    year: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    hp: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(3)]),

  })


  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private carService: CarService, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.user = localStorage.getItem("currentUser");
    this.user = JSON.parse(this.user);
    
    console.log(this.user)
        this.activatedRoute.params.subscribe(params => {
          this.carId = params["carId"];
          this.carService.getCarById(this.carId).subscribe(car =>{
            this.car = car;
            this.isCreator = car._ownerId == this.user._id
            console.log(this.car)
          })
         
        })
  }
  handleEditCar():void {


   if (this.editCarFormGroup.valid) {
    console.log(this.editCarFormGroup.value, this.carId)
      this.carService.editCar(this.editCarFormGroup.value, this.carId)
        .subscribe((res) => {
          this.router.navigate(["/cars"])
        })
    }
 }  

 

  
}
