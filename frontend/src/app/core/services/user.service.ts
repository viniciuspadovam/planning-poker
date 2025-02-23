import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { User } from '../model/user';
import { SocketService } from './socket.service';
import { SocketEvents } from '../model/socket';

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
    return this.socketService.on(SocketEvents.allUsers).pipe(
      tap((users: User[]) => this._users.next(users)),
      catchError(err => of(err))
    );
  }

  public login(name: string): void {
    this.socketService.emit(SocketEvents.signIn, name);
  }

  public setCardSeletion(value: number): void {
    this.socketService.emit(SocketEvents.selectCard, value);
  }

  public resetAllCards() {
    this.socketService.emit(SocketEvents.clearCards, null);
  }
  
}
