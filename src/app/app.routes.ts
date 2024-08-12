import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { CardapioComponent } from './features/cardapio/cardapio.component';
import { ContatoComponent } from './features/contato/contato.component';
import { ListStoreComponent } from './store/list-store/list-store.component';
import { ViewStoreComponent } from './store/view-store/view-store.component';

export const routes: Routes = [
    { 
        path: "", redirectTo: '/home', pathMatch: 'full' 
    },
    {
        path:"home", component: LandingPageComponent
    },
    {
        path:"cardapio", component: CardapioComponent
    },
    {
        path:"contato", component: ContatoComponent
    },
    {
        path:"lojas", component: ListStoreComponent 
    },
    {
        path:"loja/:id", component: ViewStoreComponent 
    }
];
