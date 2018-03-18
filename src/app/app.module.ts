import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule} from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectModule } from 'ng2-select';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { TargetListService } from './_services/targetList.service';
import { LoaderService } from './_services/loader.service';
import { ToasterService } from './_services/toaster.service';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TargetsComponent } from './targets/targets.component';
import { ChartComponent } from './chart/chart.component';
import { AddEditTargetComponent } from './add-edit-target/add-edit-target.component';


@NgModule({

  // here goes all your components (e.g. AppComponent, TargetsComponent)
  declarations: [
    AppComponent,
    TargetsComponent,
    ChartComponent,
    AddEditTargetComponent
  ],

  // routes and modules go here.
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ChartsModule,
    ModalModule.forRoot(),
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    SelectModule,
    FormsModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  // the services that are used will go here.
  providers: [
    HttpClientModule,
    HttpModule,
    TargetListService,
    LoaderService,
    AngularFireDatabase,
    ToasterService
  ],
  entryComponents: [AddEditTargetComponent, ChartComponent],

  // list the component you want to load when the app starts. In our case is AppComponent.
  bootstrap: [AppComponent]
})
export class AppModule { }
