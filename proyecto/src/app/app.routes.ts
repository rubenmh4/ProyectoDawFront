import { Routes } from '@angular/router';
import { IndexPagesComponent } from './pages/index-pages/index-pages.component';
import { FormPagesComponent } from './pages/form-pages/form-pages.component';
import { PistasIndoorPagesComponent } from './pages/pistas-indoor-pages/pistas-indoor-pages.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexPagesComponent,
        pathMatch: 'full'
    },
    {
        path: 'inicioSesion',
        component: FormPagesComponent
    },
    {
        path:'pistasIndoor',
        component: PistasIndoorPagesComponent
    }
];
