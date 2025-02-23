import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { SocketService } from '../../../core/services/socket.service';
import { catchError, of, tap } from 'rxjs';
import { CardComponent } from "../card/card.component";
import { User } from '../../../core/model/user';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-names',
  imports: [CardComponent],
  templateUrl: './names.component.html',
  styleUrl: './names.component.css'
})
export class NamesComponent {

  @ViewChildren(CardComponent)
  private cards!: QueryList<CardComponent>;

  public users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.users.pipe(
      tap(users => this.users = users),
      catchError(err => of(err))
    ).subscribe();
  }

  flipAllCards(state: boolean) {
    if(this.cards.length > 0) {
      this.cards.forEach(card => card.flipTo(state));
    }
  }

}
