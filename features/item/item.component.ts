import { Component } from '@angular/core';
import {NavBarComponent} from "../landing-page/nav-bar/nav-bar.component";

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {



}
