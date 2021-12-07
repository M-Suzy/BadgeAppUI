import { Component, OnInit } from '@angular/core';
import { UserBadge } from 'src/app/user/user-badge-model.model';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrls: ['./badge-card.component.css']
})
export class BadgeCardComponent implements OnInit {
  badge: UserBadge;
  constructor() { }

  ngOnInit(): void {
  }

}
