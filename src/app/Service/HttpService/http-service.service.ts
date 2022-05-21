import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  postService(url:any,payload:any,token:boolean=false,httpOptions:any){
    return this.http.post(url,payload,token && httpOptions)
  }

  putService(url:any,payload:any,token:boolean=true,httpOptions:any){
    return this.http.put(url,payload,token && httpOptions)
  }
  getService(url:any,token:boolean=true,httpOptions:any){
    return this.http.get(url,token && httpOptions)
  }
  deleteService(url:any,token:boolean=true,httpOptions:any){
    return this.http.delete(url,token && httpOptions)
  }
}
