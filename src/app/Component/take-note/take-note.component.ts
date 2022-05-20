import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../Service/NoteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  isShow = false;
  Title: any;
  Description: any;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private note: NoteService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  Show() {
    console.log("insideShow");
    this.isShow = true;
  }
  close() {
    this.isShow = false;
    if ((this.Title != null && this.Title != "") || (this.Description != null && this.Description != "")) {
      console.log(this.Title, this.Description)
      let data = {
        "title": this.Title,
        "description": this.Description,
        "bgColor": " ",
        "isArchive": false,
        "isReminder": false,
        "isPin": false,
        "isTrash": false
      }
      this.note.addNote(data).subscribe((res: any) => {
        console.log(res);
        this.messageEvent.emit("Hello")
        this._snackBar.open('Note Created successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }, error=>this._snackBar.open('Both Title and Description should not be empty', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
      )
    }
    else {
      console.log("Both Title and Description should not be null or empty");
      
    }

  }
}
