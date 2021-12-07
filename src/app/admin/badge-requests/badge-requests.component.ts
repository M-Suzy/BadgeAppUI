import { Component, OnInit } from '@angular/core';
import { BadgeListItem, requestedBadges } from '../badge-list-model.model';

@Component({
  selector: 'app-badge-requests',
  templateUrl: './badge-requests.component.html',
  styleUrls: ['./badge-requests.component.css']
})
export class BadgeRequestsComponent implements OnInit {
  badgeRequestItems: BadgeListItem[] = requestedBadges;
  constructor() { }

  ngOnInit(): void {
  }

}
