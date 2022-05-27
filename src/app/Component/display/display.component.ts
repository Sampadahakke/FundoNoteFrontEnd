import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/Service/dataService/data.service';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';





@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
@Input()recievedNoteList:any;
@Output() displayEvent = new EventEmitter<string>();
filteredString:any;
titleSearch?:any;


@Output() DisplayEvent = new EventEmitter<string>();
  constructor(public dialog: MatDialog,private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message  => {
      console.log(message)
      this.titleSearch=message
    } )
  }
  
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent , {
      width: '500px',
      height:'200px',
      data:note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.displayEvent.emit("Hello")  
    });  

   
  }
  updateMessage(event:any){
    this.displayEvent.emit("Hello")
 }
}