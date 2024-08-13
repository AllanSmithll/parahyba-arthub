import { Component } from '@angular/core';
import {NavBarComponent} from "../landing-page/nav-bar/nav-bar.component";

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
