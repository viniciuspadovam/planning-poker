import { Component } from '@angular/core';
import { DashboardComponent } from "./features/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DashboardComponent]
})
export class AppComponent {}
