import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserServiceService } from '../../Service/UserService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;

  constructor(private FormBuilder: FormBuilder, private user: UserServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.LoginForm = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  OnSubmit() {
    this.submitted = true;
    if (this.LoginForm.valid) {
      console.log("Valid Email", this.LoginForm.value);
      let data = {
        email: this.LoginForm.value.email,
        password: this.LoginForm.value.password,
      }
      this.user.login(data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.data)
        this._snackBar.open('Login successful..', '', {
          duration: 2000,
          verticalPosition: 'bottom'
        })
      }, error => {
        this._snackBar.open('Please enter correct data', '', {
          duration: 2000,
          verticalPosition: 'bottom'

        });

      })

    }
    else {
      console.log("Invalid data");
    }
  }

}


