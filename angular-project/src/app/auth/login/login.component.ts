import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/auth.service';
import { CreateUserDto } from 'src/app/core/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });
  constructor(   private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

 

  handleLogin(): void {

    if (this.loginFormGroup.valid) {
      const { email, password } = this.loginFormGroup.value;
      const body: CreateUserDto = {  
        email: email,
        password: password
      }
      console.log(this.loginFormGroup.value); 
      this.authService.login(body)
      .subscribe((data) => {
console.log(data)
    })
    
    
  }
    
  }

 

}
