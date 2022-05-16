import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
 base=environment.baseUrl;
 token:any;
  constructor(private httpservice:HttpServiceService) { 
    this.token=localStorage.getItem('token');
  }
  addNote(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': this.token,
      })
    }
    return this.httpservice.postService(this.base+'Note/AddNote', {} ,true,header)
  }

  getNote(){
    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': this.token,
      })
    }
    return this.httpservice.getService(this.base+'Note/GetAllNotes',true,header)
  }
}
