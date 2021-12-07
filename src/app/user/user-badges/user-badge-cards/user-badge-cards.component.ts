import { Component, OnInit } from '@angular/core';
import { UserBadge } from '../../user-badge-model.model';

@Component({
  selector: 'app-user-badge-cards',
  templateUrl: './user-badge-cards.component.html',
  styleUrls: ['./user-badge-cards.component.css']
})
export class UserBadgeCardsComponent implements OnInit {
  
  badges: UserBadge[] = [
    {
      id: '1',
      name: 'Creativity', 
      level: 1,
      status : 'received',
      date: new Date("01/09/2021"),
      icon: new Blob()
   },
   {
    id: '2',
    name: 'Creativity', 
    level: 3,
    status : 'rejected',
    date: new Date("01/09/2021"),
    icon: new Blob()
 },
];

  constructor() { }

  ngOnInit(): void {
  }

}
