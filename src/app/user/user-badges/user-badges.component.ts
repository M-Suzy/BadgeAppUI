import { Component, OnInit } from '@angular/core';
import { BadgeListItem, userBadgeList } from 'src/app/admin/badge-list-model.model';
import { BadgeService } from 'src/app/shared/service/badges/badge.service';

@Component({
  selector: 'app-user-badges',
  templateUrl: './user-badges.component.html',
  styleUrls: ['./user-badges.component.css']
})
export class UserBadgesComponent implements OnInit {
  badgeListItems: BadgeListItem[] =  userBadgeList;
  receivedBadges;
  pendingBadges;
  rejectedBadges;
  allBadges;
  constructor(private _badgeService: BadgeService) { }

  ngOnInit(): void {
  }

}
