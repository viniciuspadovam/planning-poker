import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { User } from '../model/user';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: Subject<User[]> = new Subject();

  constructor(private socketService: SocketService) {}

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  public init(): Observable<User[]> {
    return this.socketService.on('sign_in').pipe(
      tap((users: User[]) => this._users.next(users)),
      catchError(err => of(err))
    );
  }
  
}
