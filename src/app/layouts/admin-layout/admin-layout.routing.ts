import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ModelosComponent } from 'app/pages/modelos/modelos.component';
import { SliderbeginComponent } from 'app/pages/sliderbegin/sliderbegin.component';
import { SliderEventsComponent } from 'app/pages/slider-events/slider-events.component';
import { TermsAndConditionsComponent } from 'app/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivilegesComponent } from 'app/pages/privileges/privileges.component';
import { CategoryBeginComponent } from 'app/pages/category-begin/category-begin.component';
import { CategoryEventsComponent } from 'app/pages/category-events/category-events.component';
import { NotificationssComponent } from 'app/pages/notificationss/notificationss.component';
import { SliderBeginFormComponent } from 'app/pages/sliderbegin/slider-begin-form/slider-begin-form.component';
import { SliderEventsFormComponent } from 'app/pages/slider-events/slider-events-form/slider-events-form.component';
import { TermAndConditionsFormComponent } from 'app/pages/terms-and-conditions/term-and-conditions-form/term-and-conditions-form.component';
import { CategoryBeginFormComponent } from 'app/pages/category-begin/category-begin-form/category-begin-form.component';
import { CategoryEventsFormComponent } from 'app/pages/category-events/category-events-form/category-events-form.component';
import { PrivilegesFormComponent } from 'app/pages/privileges/privileges-form/privileges-form.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { RecargasComponent } from 'app/pages/recargas/recargas.component';
import { ServiciosComponent } from 'app/pages/servicios/servicios.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'user',      component: UserComponent },
    { path: 'modelos',      component: ModelosComponent },
    { path: 'recargas',      component: RecargasComponent },
    { path: 'servicios',      component: ServiciosComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'sliderInicio',           component: SliderbeginComponent },
    { path: 'sliderInicio/create',           component: SliderBeginFormComponent },
    { path: 'sliderInicio/edit/:id',           component: SliderBeginFormComponent },
    { path: 'slidersEvento',          component: SliderEventsComponent },
    { path: 'slidersEvento/create',           component: SliderEventsFormComponent },
    { path: 'slidersEvento/edit/:id',           component: SliderEventsFormComponent },
    { path: 'categoriaInicio',          component: CategoryBeginComponent },
    { path: 'categoriaInicio/create',          component: CategoryBeginFormComponent },
    { path: 'categoriaInicio/edit/:id',          component: CategoryBeginFormComponent },
    { path: 'categoriaEventos',          component: CategoryEventsComponent },
    { path: 'categoriaEventos/create',          component: CategoryEventsFormComponent },
    { path: 'categoriaEventos/edit/:id',          component: CategoryEventsFormComponent },
    { path: 'notificaciones',     component: NotificationssComponent },
    { path: 'terminosycondiciones',          component: TermsAndConditionsComponent },
    { path: 'terminosycondiciones/create',          component: TermAndConditionsFormComponent },
    { path: 'terminosycondiciones/edit/:id',          component: TermAndConditionsFormComponent },
    { path: 'privilegios',           component: PrivilegesComponent },
    { path: 'privilegios/create',           component: PrivilegesFormComponent },
    { path: 'privilegios/edit/:id',           component: PrivilegesFormComponent },
    
    { path: 'upgrade',        component: UpgradeComponent }
];
