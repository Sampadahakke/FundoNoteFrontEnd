import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Service/NoteService/note-service.service';



@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any
  description: any
  bgColor: any
  image: any
  isArchive: any
  isPin: any
  isTrash: any
  noteId: any
  
  

  constructor(private _snackBar: MatSnackBar, private note: NoteService, public dialogRef: MatDialogRef<UpdateNotesComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.bgColor)
    this.title = this.data.title
    this.description = this.data.description
    this.bgColor=this.data.bgColor
    
  }
  onNoClick(): void {

    let data =
    {
      noteId:this.noteId,
      title: this.title,
      description: this.description,
      bgColor: this.bgColor,
      "isArchive": false,
      "isReminder": false,
      "isPin": false,
      "isTrash": false
    }
    this.note.updateNote(data, this.data.noteId).subscribe((res: any) => {
      console.log("update response=", res);
      console.log(this.data.noteId);
      this.dialogRef.close(res);
     
      this._snackBar.open('Note updated successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => {
      this._snackBar.open('Failed to update', '', {
        duration: 2000,
        verticalPosition: 'bottom'

      });
    }
    )

  }
  iconRefresh(event:any){
    
      if(event.data !== (null || undefined)){
        console.log(event.data)
      this.bgColor = event.data.bgColor} 
}

}