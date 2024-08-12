import { Component } from '@angular/core';
import { CardStoreComponent } from "../card-store/card-store.component";
import Store from '../../shared/models/Store';
import StoreRepository from '../../shared/repository/store-repository';
import { MaterialAngularModule } from '../../material-angular/material-angular.module';

@Component({
  selector: 'app-list-store',
  standalone: true,
  imports: [CardStoreComponent,MaterialAngularModule],
  templateUrl: './list-store.component.html',
  styleUrl: './list-store.component.css'
})
export class ListStoreComponent {

  stores: Store[]=[]
  storeRepository: StoreRepository= new StoreRepository();


  ngOnInit(){
    this.stores = this.storeRepository.list();
  }
}
