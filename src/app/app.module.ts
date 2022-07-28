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
import { ModelosComponent } from './pages/modelos/modelos.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormModelosComponent } from './pages/modelos/form-modelos/form-modelos.component';
import { SliderbeginComponent } from './pages/sliderbegin/sliderbegin.component';
import { SliderEventsComponent } from './pages/slider-events/slider-events.component';
import { CategoryBeginComponent } from './pages/category-begin/category-begin.component';
import { CategoryEventsComponent } from './pages/category-events/category-events.component';
import { NotificationssComponent } from './pages/notificationss/notificationss.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivilegesComponent } from './pages/privileges/privileges.component';
import { SliderBeginFormComponent } from './pages/sliderbegin/slider-begin-form/slider-begin-form.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { SliderEventsFormComponent } from './pages/slider-events/slider-events-form/slider-events-form.component';
import { TermAndConditionsFormComponent } from './pages/terms-and-conditions/term-and-conditions-form/term-and-conditions-form.component';
import { CategoryBeginFormComponent } from './pages/category-begin/category-begin-form/category-begin-form.component';
import { CategoryEventsFormComponent } from './pages/category-events/category-events-form/category-events-form.component';
import { PrivilegesFormComponent } from './pages/privileges/privileges-form/privileges-form.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsModelosComponent } from './pages/modelos/details-modelos/details-modelos.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { RecargasComponent } from './pages/recargas/recargas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ListNotificationsComponent } from './pages/notificationss/list-notifications/list-notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ModelosComponent,
    FormModelosComponent,
    SliderbeginComponent,
    SliderEventsComponent,
    CategoryBeginComponent,
    CategoryEventsComponent,
    NotificationssComponent,
    TermsAndConditionsComponent,
    PrivilegesComponent,
    SliderBeginFormComponent,
    SliderEventsFormComponent,
    TermAndConditionsFormComponent,
    CategoryBeginFormComponent,
    CategoryEventsFormComponent,
    PrivilegesFormComponent,
    LoginComponent,
    DetailsModelosComponent,
    RecargasComponent,
    ServiciosComponent,
    ListNotificationsComponent,
    
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
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
    provideFunctions(() => getFunctions())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
