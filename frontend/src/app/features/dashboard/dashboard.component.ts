import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { SocketService } from '../../core/services/socket.service';
import { LoginComponent } from "../../shared/components/login/login.component";
import { NamesComponent } from "../../shared/components/names/names.component";
import { LucideAngularModule, Eye, RotateCcw, Link } from 'lucide-angular';

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
