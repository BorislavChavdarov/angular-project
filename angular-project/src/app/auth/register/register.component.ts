import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //TODO: boby4a - make validation for repass
  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    rePassword: new FormControl(null, []),
  });
  constructor(   private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  }
  handleRegister(): void {
    if (this.registerFormGroup.valid) {
      console.log(this.registerFormGroup.value); 
    } 
    // else {
    //   console.log("This form is invalid!!!")
    // }
    
  }
}
