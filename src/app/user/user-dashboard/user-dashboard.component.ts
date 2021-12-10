import { Component, OnInit } from '@angular/core';
import { DashboardSummary } from 'src/app/shared/model/dashboard-summary.model';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  illustrationURL:string; 
  gender: string = 'female';
  dashboardSummary: DashboardSummary = {
    name: '',
    receivedBadges: 0,
    rejectedBadges: 0,
    pendingBadges: 0
  }

  constructor(private _userService: UserService) {
    this._userService.getDashboardSummary().subscribe(
      response => {
         this.dashboardSummary = response.body;
        });
   }

  ngOnInit(): void {
  }

  getDashboardInfo() {
        const dashboardInfo = {
            greeting : "Hi, "+this.dashboardSummary.name, 
            content: "Ready to start your day with a new badge?"
        }; 
        return dashboardInfo;
    }

    getIllustrationUrl(){
      return "url('"+this.illustrationURL+"')";
    }
}
