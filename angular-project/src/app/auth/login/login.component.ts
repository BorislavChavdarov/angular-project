import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CreateUserDto } from 'src/app/core/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 error!:HttpErrorResponse | null;
  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });
  constructor(   private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

 

  handleLogin(): void {
this.loginFormGroup.markAllAsTouched();
    if (this.loginFormGroup.valid) {
      const { email, password } = this.loginFormGroup.value;
      const body: CreateUserDto = {  
        email: email,
        password: password
      }
      console.log(this.loginFormGroup.value); 
      this.authService.login(body)
      .subscribe(
        (data) => {this.router.navigate(['/home'])},
        (err) => {
          
          this.error=err
          setTimeout(() => {
            this.error = null
           }, 3000)
        }
    )
    
    
  }
    
  }

 

}
