import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BadgeModel } from 'src/app/shared/model/badge-model';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-badge-cards',
  templateUrl: './badge-cards.component.html',
  styleUrls: ['./badge-cards.component.css']
})
export class BadgeCardsComponent implements OnInit {
  badges: BadgeModel[]=[
    {
      id: "1",
      name: "Creativity",
      image: "../../assets/images/badges/Creativity.svg",
      level: 3,
      date: new Date("01/09/2021")
    },
    {
      id: "2", 
      name: "Bravery",
      image: "../../assets/images/badges/Bravery.svg", 
      level: 2,
      date: new Date("05/09/2021")
    }
  ];
  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditBadgeDialog(dialogTitle: string) {
    const dialogRef = this._dialog.open(AddEditDialogComponent, {
      width: '36.5%',
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

  openDeleteBadgeDialog(badge: BadgeModel){
    const badgeIndex = this.badges.indexOf(badge);
    const dialogRef = this._dialog.open(DeleteDialogComponent, {
      width: '25%',
      position: {
      left: '27.34%',
      right: '27.34%',
      top: '9.77%',
      bottom: '42.58%'
      },
      data: badge.id
    });
  }

}
