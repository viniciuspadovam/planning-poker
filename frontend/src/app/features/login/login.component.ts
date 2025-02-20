import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../core/services/socket.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public isVisible: boolean = true;
  public name!: string;

  constructor(private socketService: SocketService) {}

  public login(): void {
    this.socketService.emit('sign_in', this.name);
    this.isVisible = false;
  }

}
