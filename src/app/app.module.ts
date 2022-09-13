import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { NotificationssComponent } from './pages/notificationss/notificationss.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivilegesComponent } from './pages/privileges/privileges.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { TermAndConditionsFormComponent } from './pages/terms-and-conditions/term-and-conditions-form/term-and-conditions-form.component';

import { PrivilegesFormComponent } from './pages/privileges/privileges-form/privileges-form.component';
import { LoginComponent } from './pages/login/login.component';

import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';

import { ListNotificationsComponent } from './pages/notificationss/list-notifications/list-notifications.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { DistribuidoresComponent } from './components/distribuidores/distribuidores.component';
import { DistribuidoresFormComponent } from './components/distribuidores/distribuidores-form/distribuidores-form.component';
import { EmpleadosFormComponent } from './components/empleados/empleados-form/empleados-form.component';
import { ServiciosFormComponent } from './components/servicios/servicios-form/servicios-form.component';
import { ClientesFormComponent } from './components/clientes/clientes-form/clientes-form.component';
import { RecargasFormComponent } from './components/recargas/recargas-form/recargas-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { RecargasComponent } from "./components/recargas/recargas.component";
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
    NotificationssComponent,
    TermsAndConditionsComponent,
    PrivilegesComponent,
   
    TermAndConditionsFormComponent,
    
    PrivilegesFormComponent,
    LoginComponent,
   
    ServiciosComponent,
    RecargasComponent,
    ListNotificationsComponent,
    ClientesComponent,
    EmpleadosComponent,
    DistribuidoresComponent,
    DistribuidoresFormComponent,
    EmpleadosFormComponent,
    ServiciosFormComponent,
    ClientesFormComponent,
    RecargasFormComponent,
    ProfileComponent,
    ModalComponent,
    
    
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
