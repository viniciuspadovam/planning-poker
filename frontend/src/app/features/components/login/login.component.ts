import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../../core/services/room.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public isVisible: boolean = true;
  public roomName!: string;
  public username!: string;

  constructor(private roomService: RoomService) {}

  get hasRoom(): boolean {
    return new Boolean(this.roomService.roomName).valueOf();
  }

  public joinRoom(): void {
    this.roomService.joinRoom(this.roomName, this.username);
    this.close();
  }

  private close(): void {
    this.isVisible = false;
  }

}
