import { Component, Input, input } from '@angular/core';
import Store from '../../shared/models/Store';
import { Router } from '@angular/router';
import { MaterialAngularModule } from '../../material-angular/material-angular.module';

@Component({
  selector: 'card-store',
  standalone:true,
  imports:[MaterialAngularModule],
  templateUrl: './card-store.component.html',
  styleUrl: './card-store.component.css'
})
export class CardStoreComponent {
  
  @Input() store !: Store;

  constructor(private router: Router) {

  }
  
  navigateToStore() {
    // Navega para a página da loja usando o ID da loja
    this.router.navigate(['/store', this.store?.id]);
  }

}
