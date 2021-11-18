import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/shared/model/badge-model';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {
  badges: Badge[]=[
    {
      id: "1",
      name: "Creativity",
      imagePath: "",
      level: 3,
      date: new Date("01/09/2021")
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
