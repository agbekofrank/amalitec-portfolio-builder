//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TraineesService } from 'src/app/services/trainees.service';
import { Trainee } from '../../interfaces/trainee';

export interface UsersData {
  name: string;
  id: number;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  skills = [
    { id: 1, value: 1, name: 'js' },
    { id: 2, value: 2, name:'html' },
    { id: 3, value: 3, name: 'css' },
  ];

  action:string;
  local_data:any;

  constructor(
    public service: TraineesService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Trainee) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  onClose(){
    // this.service.form.reset()
    // this.service.initializeFormGroup();
    // this.dialog.close()
  }
  onClear(){}
  onSubmit(){}
}

