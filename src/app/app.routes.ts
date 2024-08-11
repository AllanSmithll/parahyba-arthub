import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { CardapioComponent } from './features/cardapio/cardapio.component';
import { ContatoComponent } from './features/contato/contato.component';

export const routes: Routes = [
    {
        path:"", component: LandingPageComponent
    },
    {
        path:"cardapio", component: CardapioComponent
    },
    {
        path:"contato", component: ContatoComponent
    }
];
