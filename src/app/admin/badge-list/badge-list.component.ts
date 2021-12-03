import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BadgeModel } from 'src/app/shared/model/badge-model';
import { AddEditDialogComponent } from './add-edit-dialog/add-edit-dialog.component';
import { badgeList, BadgeListItem } from './badge-list-model.model';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {
  badgeListItems: BadgeListItem[] = badgeList;
  badges: BadgeModel[] = [];
  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogForAddBadge(dialogTitle: string) {
    const dialogRef = this._dialog.open(AddEditDialogComponent, {
      width: '40%',
      position: {
      left: '27.34%',
      right: '27.34%',
      top: '9.77%',
      bottom: '42.58%'
      },
      data: {
        dialogTitle: dialogTitle,
        badge: new BadgeModel()
      }
    });
  }
}
