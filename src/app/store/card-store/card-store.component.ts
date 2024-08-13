import { Component, Input } from '@angular/core';
import Store from '../../shared/models/Store';
import { Router } from '@angular/router';

@Component({
  selector: 'card-store',
  templateUrl: './card-store.component.html',
  styleUrl: './card-store.component.css'
})
export class CardStoreComponent {
  
  @Input() store !: Store;

  constructor(private router: Router) {

  }
  
  navigateToStore() {
    this.router.navigate(['/loja', this.store?.id]);
  }

}
