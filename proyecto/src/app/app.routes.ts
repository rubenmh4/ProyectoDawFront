import { SignInUpPagesComponent } from './pages/sign-in-up-pages/sign-in-up-pages.component';
import { Routes } from '@angular/router';
import { IndexPagesComponent } from './pages/index-pages/index-pages.component';
import { FormPagesComponent } from './pages/form-pages/form-pages.component';
import { PistasIndoorPagesComponent } from './pages/pistas-indoor-pages/pistas-indoor-pages.component';
import { InstalacionesPagesComponent } from './pages/instalaciones-pages/instalaciones-pages.component';
import { SectionUsuariosComponent } from './components/section-usuarios/section-usuarios.component';
import { PageUsuarioComponent } from './components/page-usuario/page-usuario.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexPagesComponent,
        pathMatch: 'full'
    },
    {
        path: 'contacto',
        component: FormPagesComponent
    },
    {
        path:'pistasIndoor',
        component: PistasIndoorPagesComponent
    },
    {
        path:'instalaciones',
        component:InstalacionesPagesComponent
    },
    {
        path:'form',
        component:SignInUpPagesComponent
    },
    {
        path:'usuarios',
        component:SectionUsuariosComponent
    },
    {
        path:'usuario',
        component:PageUsuarioComponent
    }
];
