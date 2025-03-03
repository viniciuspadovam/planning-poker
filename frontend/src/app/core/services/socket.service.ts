import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io, Socket} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket!: Socket;

  constructor() {
    this.create();
  }

  private create(): void {
    this.socket = io('http://localhost:3000');
  }

  protected emit(event: string, ...data: any): void {
    this.socket.emit(event, ...data);
  }

  protected on(event: string): Observable<any> {
    return new Observable(obervable => {
      this.socket.on(event, (data) => obervable.next(data));
    })
  }

}
