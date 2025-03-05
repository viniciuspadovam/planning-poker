import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends SocketService {

  private _roomName: string | null = null;
  private _roomNameSubject: BehaviorSubject<string | null> = new BehaviorSubject(this._roomName);

  constructor() {
    super();
  }

  get roomName(): string | null {
    return this._roomName;
  }

  get roomNameSubject(): Observable<string | null> {
    return this._roomNameSubject.asObservable();
  }

  set roomName(name: string) {
    if(!this._roomName) {
      this._roomName = name;
      this._roomNameSubject.next(name);
    }
  }

  public joinRoom(room: string, username: string) {
    this.roomName = room;
    this.emit('join-room', this.roomName, username);
  }

  public updateUsers(): Observable<any> {
    return this.on('update-users');
  }

}
