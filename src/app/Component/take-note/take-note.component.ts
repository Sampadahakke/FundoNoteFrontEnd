import { Component, OnInit } from '@angular/core';
import { NoteService } from '../Service/NoteService/note.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
 isShow=false;
 Title:any;
 Description:any;
 constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  Show(){
   console.log("insideShow");
  this.isShow=true;
 }
 close(){
  this.isShow=false;
   console.log(this.Title,this.Description)
   let data={
    "title": this.Title,
  "description": this.Description,
  "bgColor": " ",
  "isArchive": false,
  "isReminder": false,
  "isPin": false,
  "isTrash":false
   }
   this.note.addNote(data).subscribe((res:any)=>{console.log(res);})
 }
}
