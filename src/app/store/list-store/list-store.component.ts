import { Component } from '@angular/core';
import Store from '../../shared/models/Store';
import StoreRepository from '../../shared/repository/store-repository';

@Component({
  selector: 'app-list-store',
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
