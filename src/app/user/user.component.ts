import { Component, OnInit } from '@angular/core';
import { DashboardSummary } from '../shared/model/dashboard-summary.model';
import { UserService } from '../shared/service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isAdmin: boolean = false;
  userNameSurname: string = 'Suzy Melkonyan'

  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

}
