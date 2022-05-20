import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Service/NoteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
noteList:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===false
      })
    }
  )}
  receiveMessage(event:any){
    this.GetAllNotes();
  }
  updateMessage(event:any){
    this.GetAllNotes();
  }
  archiveMessage(event:any){
    this.GetAllNotes();
  }
 
  trashMessage(event:any){
    this.GetAllNotes();
  }
  deleteMessage(event:any){
    this.GetAllNotes();
  }
}
