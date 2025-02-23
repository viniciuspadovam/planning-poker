import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public isVisible: boolean = true;
  public name!: string;

  constructor(private userService: UserService) {}

  public login(): void {
    this.userService.login(this.name);
    this.isVisible = false;
  }

}
