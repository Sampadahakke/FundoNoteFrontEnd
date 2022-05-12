import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/Component/Service/UserService/user-service.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
 ForgotPasswordForm!:FormGroup;
 submitted=false;
 
  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.ForgotPasswordForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
    });
  }
  OnSubmit(){
    this.submitted=true;
    if(this.ForgotPasswordForm.valid)
    {
      console.log('Valid',this.ForgotPasswordForm.value);
      let data={
        email:this.ForgotPasswordForm.value.email,
      }
      this.user.ForgotPassword(data).subscribe((res:any)=>{console.log('Reset link sent successfully',res);})
    }
    else
    {
      console.log("Invalid data");
    }
  };
}