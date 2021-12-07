import { Component, Input, OnInit } from '@angular/core';
import { adminMenuList, MenuItem, userMenuList } from './menu-list';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  sideMenu: MenuItem[];
  collapse = false;
  @Input() isAdmin: boolean;


  constructor() { 
  }

  ngOnInit(): void {
    if(this.isAdmin){
      this.sideMenu = adminMenuList;
    }
    else{
      this.sideMenu = userMenuList;
    }
  }

}
