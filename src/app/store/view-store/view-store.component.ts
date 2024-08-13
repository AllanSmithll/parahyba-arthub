import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Store from '../../shared/models/Store';
import StoreRepository from '../../shared/repository/store-repository';

@Component({
  selector: 'app-view-store',
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

  formatData():String{
    let formattedDate:String= ""
    
    if (this.store){
      // Obtém o dia, mês e ano da data
      const day = this.store?.shopSince.getUTCDate();
      const month = this.store.shopSince.getUTCMonth() + 1; // +1 porque getUTCMonth() retorna valores de 0 a 11
      const year = this.store?.shopSince.getUTCFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate    
    }  
    
    return formattedDate    
  }
}
