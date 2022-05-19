import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  base = environment.baseUrl;
  token: any;
  noteId: any;
  constructor(private httpservice: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }
  addNote(data: any) {

    console.log(data, this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService(this.base + 'Note/AddNote', data, true, header)
  }

  getNote() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService(this.base + 'Note/GetAllNotes', true, header)
  }

  updateNote(data: any, noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.putService(this.base + `Note/UpdateNote/${noteId}`, data, true, header)
  }

  archieveNote( noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.putService(this.base + `Note/ArchieveNote/${noteId}`,{}, true, header)
  }

  deleteNote( noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.deleteService(this.base + `Note/DeleteNote/${noteId}`, true, header)
  }
}


