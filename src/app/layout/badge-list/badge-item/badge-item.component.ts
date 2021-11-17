import { Component, Input, OnInit } from '@angular/core';
import { BadgeModel } from 'src/app/shared/model/badge-model';

@Component({
  selector: 'app-badge-item',
  templateUrl: './badge-item.component.html',
  styleUrls: ['./badge-item.component.css']
})
export class BadgeItemComponent implements OnInit {
  @Input() badge: BadgeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
