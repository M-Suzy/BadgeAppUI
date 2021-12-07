import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BadgeListComponent } from '../badge-list.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  private badgeId: string;

  constructor(@Inject(MAT_DIALOG_DATA) badgeId: string,
              private dialogRef: MatDialogRef<BadgeListComponent>){
            //  private badgeService: BadgeService) {
    this.badgeId = badgeId;
  }

  onYesClick(): void {
    ///this.badgeService.delete(this.badgeId).subscribe(
    ///  response => {
    ///    this.dialogRef.close(response.status);
    //  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
