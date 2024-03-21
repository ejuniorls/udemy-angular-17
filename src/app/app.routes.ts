import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioHomeComponent } from './projetos/portfolio/pages/home/home.component';
import { Secao04Component } from './pages/secao04/secao04.component';
import { Secao05Component } from './pages/secao05/secao05.component';
import { Secao06Component } from './pages/secao06/secao06.component';
import { Secao07Component } from './pages/secao07/secao07.component';
import { Secao08Component } from './pages/secao08/secao08.component';
import { Secao09Component } from './pages/secao09/secao09.component';
import { Secao10Component } from './pages/secao10/secao10.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'secao04', component: Secao04Component },
            { path: 'secao05', component: Secao05Component },
            { path: 'secao06', component: Secao06Component },
            { path: 'secao07', component: Secao07Component },
            { path: 'secao08', component: Secao08Component },
            { path: 'secao09', component: Secao09Component },
            { path: 'secao10', component: Secao10Component },
        ]
    },
    {
        path: 'portfolio',
        component: PortfolioHomeComponent
    }
];
