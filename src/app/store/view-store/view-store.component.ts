import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Store from '../../shared/models/Store';
import StoreRepository from '../../shared/repository/store-repository';

@Component({
  selector: 'app-view-store',
  standalone: true,
  imports: [],
  templateUrl: './view-store.component.html',
  styleUrl: './view-store.component.css'
})
export class ViewStoreComponent {

  private storeID ?: string;

  private storeRepository: StoreRepository = new StoreRepository();

  store ?: Store |null;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.storeID = this.route.snapshot.paramMap.get('id')!;
    this.store = this.getStore(this.storeID);

  }


  private getStore(id: string) : Store | null {
    return this.storeRepository.get(id);
  }

}
