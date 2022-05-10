import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ResetPasswordForm=this.formBuilder.group({
      NewPassword:['',Validators.required],
      ConfirmPassword:['',Validators.required]
    });
  }
  OnSubmit(){
    this.submitted=true;
    if(this.ResetPasswordForm.valid)
    {
      console.log(this.ResetPasswordForm.value);
    }
    else
    {
      console.log("enter data");
    }
  };

}
