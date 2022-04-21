import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });
  constructor(   private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

 

  handleLogin(): void {
    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.value); 
    } 
    // else {
    //   console.log("This form is invalid!!!")
    // }
    
  }

 

}
