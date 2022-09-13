import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { TermsAndConditionsComponent } from 'app/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivilegesComponent } from 'app/pages/privileges/privileges.component';

import { NotificationssComponent } from 'app/pages/notificationss/notificationss.component';

import { TermAndConditionsFormComponent } from 'app/pages/terms-and-conditions/term-and-conditions-form/term-and-conditions-form.component';

import { PrivilegesFormComponent } from 'app/pages/privileges/privileges-form/privileges-form.component';
import { LoginComponent } from 'app/pages/login/login.component';


import { ServiciosFormComponent } from 'app/components/servicios/servicios-form/servicios-form.component';
import { RecargasFormComponent } from 'app/components/recargas/recargas-form/recargas-form.component';
import { ClientesComponent } from 'app/components/clientes/clientes.component';
import { ClientesFormComponent } from 'app/components/clientes/clientes-form/clientes-form.component';
import { EmpleadosComponent } from 'app/components/empleados/empleados.component';
import { EmpleadosFormComponent } from 'app/components/empleados/empleados-form/empleados-form.component';
import { DistribuidoresComponent } from 'app/components/distribuidores/distribuidores.component';
import { DistribuidoresFormComponent } from 'app/components/distribuidores/distribuidores-form/distribuidores-form.component';
import { ServiciosComponent } from 'app/components/servicios/servicios.component';
import { RecargasComponent } from 'app/components/recargas/recargas.component';
import { ProfileComponent } from 'app/components/profile/profile.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'user',      component: UserComponent },
  
    { path: 'Perfil',           component: ProfileComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Servicios',           component: ServiciosComponent },
    { path: 'Servicios/create',           component: ServiciosFormComponent },
    { path: 'Servicios/edit/:id',           component: ServiciosFormComponent },
    { path: 'Recargas',           component: RecargasComponent },
    { path: 'Recargas/create',           component: RecargasFormComponent },
    { path: 'Recargas/edit/:id',           component: RecargasFormComponent },
    { path: 'Clientes',           component: ClientesComponent },
    { path: 'Clientes/create',           component: ClientesFormComponent },
    { path: 'Clientes/edit/:id',           component: ClientesFormComponent },
    { path: 'Empleados',           component: EmpleadosComponent },
    { path: 'Empleados/create',           component: EmpleadosFormComponent },
    { path: 'Empleados/edit/:id',           component: EmpleadosFormComponent },
    { path: 'Distribuidores',           component: DistribuidoresComponent },
    { path: 'Distribuidores/create',           component: DistribuidoresFormComponent },
    { path: 'Distribuidores/edit/:id',           component: DistribuidoresFormComponent },
    
    { path: 'privilegios',           component: PrivilegesComponent },
    { path: 'privilegios/create',           component: PrivilegesFormComponent },
    { path: 'privilegios/edit/:id',           component: PrivilegesFormComponent },
    
    { path: 'upgrade',        component: UpgradeComponent }
];
