import { Component, OnInit } from '@angular/core';
import { adminMenuList } from './menu-list';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  sideMenu = adminMenuList;
  collapse = false;
  constructor() { }

  ngOnInit(): void {
  }

}
