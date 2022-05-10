import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  base=environment.baseUrl;
  constructor(private httpservice:HttpServiceService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpservice.postService(this.base+'User/register', data ,false,header)
  }

  login(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpservice.postService(this.base+`User/Login/${data.email}/${data.password}`, {} ,false,header)
  }

  ForgotPassword(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpservice.postService(this.base+`User/ForgetPassword/${data.email}`, {} ,false,header)
  }
}
 