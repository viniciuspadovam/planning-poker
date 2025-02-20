import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { catchError, of, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static _users: User[];

  constructor(private socketService: SocketService) {
      this.socketService.on('sign_in').pipe(
        tap((users: User[]) => {
          console.log(users);
          UserService._users = users;
        }),
        catchError(err => of(err))
      ).subscribe();
    }

    get users(): User[] {
      return UserService._users;
    }
  
}
