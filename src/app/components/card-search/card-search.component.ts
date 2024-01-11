import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss'
})
export class CardSearchComponent {

}
