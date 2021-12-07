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

  constructor() { }

  ngOnInit(): void {
  }

  onReject(){

  }
  onAccept(){

  }


}
