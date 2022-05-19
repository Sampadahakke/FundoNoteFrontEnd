import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../Service/NoteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
noteList:any
@Output() trashEvent = new EventEmitter<string>();
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList=response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===true
      })
    }
  )}
  // trashMessage(event:any){
  //   this.GetAllNotes();
}

