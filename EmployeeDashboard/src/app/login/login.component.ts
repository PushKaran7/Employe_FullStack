import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private _login: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

  }







  onSubmit() {


    const data = this.loginForm.value;
    console.log('Form Submitted', data);


    if (this.loginForm.valid) {
      console.log("Data is present");
      this._login.loginUser(data).subscribe({
        next: (val: any) => {
          console.log('Response:', val);
          if (val.accessToken) {
            localStorage.setItem('token', val.accessToken);
            console.log("User permitted to enter");
            this.router.navigate(['/webpage']);

          }

        },
        error: (err) => {
          console.log(err); 
        }

      })

    } 
    else {
      console.log("User not Authorized")
    }


  }

  onCancel() {
    this.loginForm.reset();
  }

}
