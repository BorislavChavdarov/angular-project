import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { passwordMatch } from '../util';
import { AuthService } from "../../auth.service"
import { CreateUserDto } from 'src/app/core/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl(null, [passwordMatch(this.passwordControl)]),
    })
    
  });
  constructor(   private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  handleRegister(): void {
 
    if (this.registerFormGroup.valid) {
      const { email, passwords } = this.registerFormGroup.value;
      const body: CreateUserDto = {  
        email: email,
        password: passwords.password
      }
      console.log(this.registerFormGroup.value); 
      this.authService.register(body)
      .subscribe((data) => {
        this.router.navigate(['/home']);
    })
    
    
  }
}
}
