import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserServiceService } from '../Service/UserService/user-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public RegistrationForm!:FormGroup;
  submitted=false;
  
  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.RegistrationForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      Confirm:['',Validators.required],
      address:['',Validators.required], 
      
    });
  }
  OnSubmit(){
    this.submitted=true;
    if(this.RegistrationForm.valid)
    {
      console.log( "Valid data",this.RegistrationForm.value);
      let data={
        firstName:this.RegistrationForm.value.firstName,
        lastName:this.RegistrationForm.value.lastName,
        email:this.RegistrationForm.value.email,
        password:this.RegistrationForm.value.password,
        address: this.RegistrationForm.value.address
      }
      this.user.registration(data).subscribe((res:any)=>{console.log(res);})
    }
    else
    {
      console.log("Invalid data");
    }
  };
  
}
