import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userName: string = 'David';
  gender: string = 'male';
  receivedBadges = 0;
  pendingBadges = 0;
  rejectedBadges = 0;
  illustrationURL ="./../../../assets/images/" + ((this.gender == 'male') ? 
                  "user_dashboard_male_ill.svg" : "user_dashboard_female_ill.svg");

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  getDashboardInfo() {
        const dashboardInfo = {
            greeting : "Hi, "+this.userName, 
            content: "Ready to start your day with a new badge?"
        }; 
        return dashboardInfo;
    }

    getIllustrationUrl(){
      return "url('"+this.illustrationURL+"')";

    }
}
