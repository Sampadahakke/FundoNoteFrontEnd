import { ChangeDetectorRef, Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ThisReceiver } from '@angular/compiler';
import { DataService } from 'src/app/Service/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  // recievedNoteList:any
   mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
  displayMode!: number;
  // display: number;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getData(val:string){
    console.warn(val)
  }

  keyUpFunction(event:any){
    console.log("event",event.target.value)
    this.data.changeMessage(event.target.value)
  }

// changeDisplay(mode: number): void {
//     this.display = mode;
//   }
//  onDisplayModeChange(mode: number): void {
//   this.displayMode = mode;
}



