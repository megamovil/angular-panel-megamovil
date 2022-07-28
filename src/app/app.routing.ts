import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsModelosComponent } from './pages/modelos/details-modelos/details-modelos.component';
import { FormModelosComponent } from './pages/modelos/form-modelos/form-modelos.component';

export const AppRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: 'modelos/create',component:FormModelosComponent},
      {path: 'modelos/edit/:id',component:FormModelosComponent},
      {path: 'modelos/details/:id',component:DetailsModelosComponent},
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
