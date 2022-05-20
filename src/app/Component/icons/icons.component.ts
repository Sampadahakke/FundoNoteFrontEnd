import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../Service/NoteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  data:any;
  isArchive:any;
  isTrash:any;
 
  @Input() notedata: any;
  @Output() archiveEvent = new EventEmitter<string>();
  @Output() trashEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();


  

  constructor(private note: NoteService,private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isArchive = this.notedata.isArchive;
    this.isTrash = this.notedata.isTrash;
  }
  archieve(note:any) {
    this.isArchive=!note.isArchive
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response.data);
      this.archiveEvent.emit(response)
      if (response.data.isArchive == true) {
        this._snackBar.open('Note Archived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      else {
        this._snackBar.open('Note Unarchived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
    }
    )
  }
  trash(note:any) {
    this.isTrash = !note.isTrash;
    this.note.trashNote(this.notedata.noteId,this.data).subscribe((response: any) => {
      console.log(response.data);
      this.trashEvent.emit(response)
      if(response.data.isTrash==true){
        this._snackBar.open('Note trashed successfully..', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      else{
        
          this._snackBar.open('failed to trash', '', {
            duration: 2000,
            verticalPosition: 'bottom'
    
          });
        }
      })
      
    }
    delete() {
      this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
        console.log("Note Deleted Successfully", response);
        this.deleteEvent.emit(response);
  
        this._snackBar.open('Note Deleted Successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      })
    }
  
    // changeColor(newcolor: any) {
    //   this.notesService.changeColor(newcolor, this.noteObj.noteId).subscribe((response: any) => {
    //     console.log("Note Background Color Changed Successfully", response);
    //     this.changeNoteEvent.emit(response);
    //   })
    // }
  }



