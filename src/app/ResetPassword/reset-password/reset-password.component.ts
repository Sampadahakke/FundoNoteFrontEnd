import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Component/Service/UserService/user-service.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  [x: string]: any;
  ResetPasswordForm!:FormGroup;
  submitted=false;
  token:any

  constructor(private formBuilder: FormBuilder,private activeRoute:ActivatedRoute,private user:UserServiceService) { }

  ngOnInit(): void {
    this.ResetPasswordForm=this.formBuilder.group({
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  OnSubmit(){
    this.submitted=true;
    if(this.ResetPasswordForm.valid)
    {
      console.log('Valid',this.ResetPasswordForm.value);
      let data={
        newPassword:this.ResetPasswordForm.value.newPassword,
        confirmPassword:this.ResetPasswordForm.value.confirmPassword
      }
      this.user.ResetPassword(data,this.token).subscribe((res:any)=>{console.log(res);})

    }
    else
    {
      console.log("enter data");
    }
  };

}
