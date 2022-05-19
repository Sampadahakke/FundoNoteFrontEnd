import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../Service/NoteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  @Input() notedata:any;
  @Output() archiveEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  archieve() {
    
    this.note.archieveNote(this.notedata.noteId).subscribe((response:any)=>{
      console.log(response);
      this.archiveEvent.emit("Hello")
    })
}
 delete(){
  this.note.deleteNote(this.notedata.noteId).subscribe((response:any)=>{
    console.log(response);
    this.deleteEvent.emit("Hello")
  })
 }

}

