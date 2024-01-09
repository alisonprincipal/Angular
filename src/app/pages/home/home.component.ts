import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ContainerComponent } from '../../components/container/container.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
