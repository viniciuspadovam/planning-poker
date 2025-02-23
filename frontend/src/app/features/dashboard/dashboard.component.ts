import { Component, ViewChild } from '@angular/core';
import { Eye, Link, LucideAngularModule, RotateCcw } from 'lucide-angular';
import { NamesComponent } from "../../shared/components/names/names.component";
import { LoginComponent } from '../login/login.component';
import { OptionCardSelectComponent } from "../../shared/components/option-card-select/option-card-select.component";
import { UserService } from '../../core/services/user.service';
import { SelectionType } from '../../core/model/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [LoginComponent, NamesComponent, LucideAngularModule, OptionCardSelectComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @ViewChild(NamesComponent)
  private cardContainer!: NamesComponent;

  public roomName: string = 'Room Name';
  public average: number = 8;
  public icons = {
    eye: Eye,
    restart: RotateCcw,
    link: Link
  };
  public selectionType: SelectionType = 'days';

  constructor(private userService: UserService) {}

  public flipAllToFront(): void {
    this.cardContainer.flipAllCards(false);
  }

  public resetAllCards(): void {
    this.userService.resetAllCards();
  }

}
