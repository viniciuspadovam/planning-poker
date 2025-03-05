import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Eye, Link, LucideAngularModule, RotateCcw } from 'lucide-angular';
import { RoomService } from '../../core/services/room.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public roomName: string | null = '';
  public average!: number;

  public readonly Eye = Eye;
  public readonly RotateCcw = RotateCcw;
  public readonly Link = Link;

  constructor(private roomService: RoomService) {
    this.roomService.roomNameSubject.subscribe(name => this.roomName = name);
  }

  public reveal() {
    console.log('Reveal all votes.');
  }

  public restart() {
    console.log('Reset all votes.');
  }

  public invite() {
    console.log('Copy to clipboard room link.')
  }

}
