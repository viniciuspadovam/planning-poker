import { Component } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { catchError, of, tap } from 'rxjs';
import { CardComponent } from "../card/card.component";
import { User } from '../../../core/model/user';

@Component({
  selector: 'app-names',
  imports: [CardComponent],
  templateUrl: './names.component.html',
  styleUrl: './names.component.css'
})
export class NamesComponent {

  public users: User[] = [];

  constructor(private socketService: SocketService) {
    this.socketService.on('sign_in').pipe(
      tap((users: User[]) => {
        console.log(users);
        this.users = users;
      }),
      catchError(err => of(err))
    ).subscribe();
  }

}
