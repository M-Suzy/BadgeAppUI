import { Component, OnInit } from '@angular/core';
import { BadgeModel } from 'src/app/shared/model/badge-model';

@Component({
  selector: 'app-badge-request-cards',
  templateUrl: './badge-request-cards.component.html',
  styleUrls: ['./badge-request-cards.component.css']

})
export class BadgeRequestCardsComponent implements OnInit {
  requestInfo = {
    "user_name": '', 
    "badgeIcon": '', 
    "badgeName": '', 
    "request_date": Date
  };

  badges: BadgeModel[]=[
    {
      ownerId: "1",
      name: "Creativity",
      level: 3,
      image: "../../assets/images/badges/Creativity.svg",
      ownerEmail: 'nnma@gmail.com',
      assignmentDate: new Date(),
      iconId: '1',
      creationDate: new Date("01/09/2021")
    },
    {
      ownerId: "2",
      name: "Creativity",
      level: 2,
      image: "../../assets/images/badges/Bravery.svg", 
      ownerEmail: 'nnma@gmail.com',
      assignmentDate: new Date(),
      iconId: '2',
      creationDate: new Date("04/09/2021")
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onReject(){

  }
  onAccept(){

  }


}
