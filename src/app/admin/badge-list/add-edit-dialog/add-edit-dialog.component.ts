import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BadgeModel } from 'src/app/shared/model/badge-model';
import { BadgeListComponent } from '../badge-list.component';
import { AddEditDialogModel } from './add-edit-dialog-model.model';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.css']
})
export class AddEditDialogComponent {
  dialogTitle: string;
  badge: BadgeModel = {
    ownerId: "1",
    name: "",
    level: 1, 
    image: "",
    ownerEmail: '',
    assignmentDate: new Date(),
    iconId: '1',
    creationDate: new Date(),
  };
  
  badgeNameControl = new FormControl('', [
    Validators.required,
  ]);
  badgeLevelControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new InputBadgeStateMatcher();
  message;
  constructor(private _dialogRef: MatDialogRef<BadgeListComponent>,
              private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) data: AddEditDialogModel,
              ) {
    this.dialogTitle = data.dialogTitle;
    this.badge = data.badge;
    this.badgeNameControl.setValue(data.badge.name);
    this.badgeLevelControl.setValue(data.badge.level);
  }

  onCancel() {
    this._dialogRef.close();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
    });
  }

  onSave() {
    this.badge.name = this.badgeNameControl.value;
    //TO-DO add or edit use Badgeservice to subscribe 
  }
}

export class InputBadgeStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}