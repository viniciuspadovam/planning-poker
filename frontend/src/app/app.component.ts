import { Component } from '@angular/core';
import { RoomService } from './core/services/room.service';
import { LoginComponent } from './features/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public users: any = {};

  constructor(private roomService: RoomService) {
    this.onUpdateUsers();
  }

  get usersStringify() {
    return JSON.stringify(this.users);
  }

  private onUpdateUsers(): void {
    this.roomService.updateUsers().subscribe((data) => this.users = data);
  }

}
