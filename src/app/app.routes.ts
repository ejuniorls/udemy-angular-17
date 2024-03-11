import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Secao04Component } from './pages/secao04/secao04.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'secao04', component: Secao04Component }
        ]
    }
];
