import { Component } from '@angular/core';
import { SocketService } from './core/services/socket.service';
import { LoginComponent } from "./features/components/login/login.component";
import { RoomService } from './core/services/room.service';

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
    this.roomService.updateUsers().subscribe((data) => {
      console.log(data)
      this.users = data
    });
  }

}
