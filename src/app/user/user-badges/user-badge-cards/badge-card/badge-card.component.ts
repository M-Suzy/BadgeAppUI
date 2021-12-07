import { Component, Input, OnInit } from '@angular/core';
import { UserBadge } from 'src/app/user/user-badge-model.model';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrls: ['./badge-card.component.css']
})
export class BadgeCardComponent implements OnInit {
  @Input() badge: UserBadge;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if(this.badge.status==='received'){
      return '#1ED392';
    }
    else if(this.badge.status==='pending'){
      return '#FFAA2E';
    }
    return '#F8174D';
  }

}
