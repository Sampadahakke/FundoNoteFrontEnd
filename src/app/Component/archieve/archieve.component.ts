import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
noteList:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList=response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===true 
      })
    }
  )}
  displayMessage(event:any){
    this.GetAllNotes();
  }
 
}
