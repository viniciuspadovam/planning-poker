import { Component } from '@angular/core';
import { Eye, Link, LucideAngularModule, RotateCcw } from 'lucide-angular';
import { SocketService } from '../../core/services/socket.service';
import { NamesComponent } from "../../shared/components/names/names.component";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  imports: [LoginComponent, NamesComponent, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public roomName: string = 'Room Name';
  public average: number = 8;
  public icons = {
    eye: Eye,
    restart: RotateCcw,
    link: Link
  };

}
