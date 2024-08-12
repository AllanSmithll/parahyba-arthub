import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { ItemComponent } from './features/item/item.component';
import { ContatoComponent } from './features/contato/contato.component';

export const routes: Routes = [
    {
        path:"", component: LandingPageComponent
    },
    {
        path:"item", component: ItemComponent
    },
    {
        path:"contato", component: ContatoComponent
    }
];
