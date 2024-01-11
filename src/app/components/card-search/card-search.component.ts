import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
/* import {MatButtonToggleModule} from '@angular/material/button-toggle'; */

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss'
})
export class CardSearchComponent {
  @Input() src =''
  @Input() alt =''
}
