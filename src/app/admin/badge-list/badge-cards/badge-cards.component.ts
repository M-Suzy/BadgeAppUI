import { Component, OnInit } from '@angular/core';
import { BadgeModel } from 'src/app/shared/model/badge-model';

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
  constructor() { }

  ngOnInit(): void {
  }

}
