import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStoreComponent } from './list-store/list-store.component';
import { ViewStoreComponent } from './view-store/view-store.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { CardStoreComponent } from './card-store/card-store.component';

@NgModule({
  declarations: [
    CardStoreComponent,
    ListStoreComponent,
    ViewStoreComponent,

  ],
  imports: [
    CommonModule,
    MaterialAngularModule
  ],
  exports:[
    ListStoreComponent,
    ViewStoreComponent,
    CardStoreComponent,
  ]
})
export class StoreModule { }
