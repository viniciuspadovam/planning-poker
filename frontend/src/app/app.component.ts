import { Component } from '@angular/core';
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DashboardComponent]
})
export class AppComponent {

  constructor(private userService: UserService) {
    this.userService.init().subscribe();
  }

}
