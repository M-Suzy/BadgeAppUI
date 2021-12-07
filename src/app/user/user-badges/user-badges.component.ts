import { Component, OnInit } from '@angular/core';
import { BadgeListItem, userBadgeList } from 'src/app/admin/badge-list-model.model';

@Component({
  selector: 'app-user-badges',
  templateUrl: './user-badges.component.html',
  styleUrls: ['./user-badges.component.css']
})
export class UserBadgesComponent implements OnInit {
  badgeListItems: BadgeListItem[] =  userBadgeList;
  constructor() { }

  ngOnInit(): void {
  }

}
