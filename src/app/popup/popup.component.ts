import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class PopupComponent implements OnInit {

  visible : boolean = false;
  // constructor(
  //   public dialogRef: MatDialogRef<PopupComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  open(){
    const me = this;
    me.visible = true;

  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
