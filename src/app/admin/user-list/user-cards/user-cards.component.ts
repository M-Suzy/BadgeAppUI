import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/users-detailed-model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {
  userList: User[] = [
    {
      id: 1, 
      name: 'Suzy Melkonyan', 
      email: 'melkonyansuzie@gmail.com', 
      badgeNum: 5
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
