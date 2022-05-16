
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms'
import { UserServiceService } from '../../Service/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
LoginForm!:FormGroup;
submitted=false;

  constructor(private FormBuilder:FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.LoginForm=this.FormBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]   
    });
  }

  OnSubmit(){
    this.submitted=true;
    if(this.LoginForm.valid)
    {
      console.log("Valid Email",this.LoginForm.value);
      let data={
        email:this.LoginForm.value.email,
        password:this.LoginForm.value.password,
      }
      this.user.login(data).subscribe((res:any)=>{console.log(res);
        localStorage.setItem('token', res.data)
      })
      
    }
    else
    {
      console.log("Invalid data");
    }
  }

  }


