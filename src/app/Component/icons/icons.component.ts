  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Service/NoteService/note-service.service';
import { ArchieveComponent } from '../archieve/archieve.component';
import { DisplayComponent } from '../display/display.component';
import { TrashComponent } from '../trash/trash.component';
import { ActivatedRoute } from '@angular/router';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';


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
  
  isTrashComponent=false;
  isDisplayComponent=false;
  isArchieveComponent= false;

  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},{Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},{Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];
  

  constructor(private note: NoteService,private _snackBar: MatSnackBar, public dialog: MatDialog,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    let comp = this.route.snapshot.component;
    if (comp == GetAllNotesComponent) {
      this.isDisplayComponent = true;
    }

    if (comp == TrashComponent) {
      this.isTrashComponent = true;
      // console.log(this.isTrashComponent);
    }
    if (comp == ArchieveComponent) {
      this.isArchieveComponent = true;
      // console.log(this.isArchiveComponent);
    }
    
  }
  archieve() {
    this.isArchive=false;
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.archiveEvent.emit(response)
      if(this.isArchieveComponent==false){
        this._snackBar.open('Note Archived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
        
      }
      
      else
       {
        this._snackBar.open('Note Unarchived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
  })
    
  }

  

  trash(note:any) {
    this.isTrash = !note.isTrash;
    this.note.trashNote(this.notedata.noteId,this.data).subscribe((response: any) => {
      console.log(response);
      this.trashEvent.emit(response)
      if(this.isTrashComponent==false){
        this._snackBar.open('Note trashed successfully..', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
     else if(this.isTrashComponent==true){
      this._snackBar.open('Note restored successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
     }
     }, error=>this._snackBar.open('failed to trash', '', {
      duration: 2000,
      verticalPosition: 'bottom'

    })
    )
      
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
  
    changeColor(color:any){
      console.log(color);

      this.note.changeColor(this.notedata.noteId,color).subscribe((response: any) => {
        console.log(response);
        
        this.trashEvent.emit(response)
        this._snackBar.open('Color changed successfully..', '', {
            duration: 3000,
            verticalPosition: 'bottom'
          })
       }, error=>this._snackBar.open('failed to change color', '', {
        duration: 2000,
        verticalPosition: 'bottom'
  
      })
      )
    }

    
  }



