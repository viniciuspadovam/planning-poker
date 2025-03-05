import { Component } from '@angular/core';
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { LoginComponent } from './features/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
