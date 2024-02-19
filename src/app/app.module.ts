import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './init/sidebar/sidebar.component';
import { NavbarComponent } from './init/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusListComponent } from './Pages/bus/bus-list/bus-list.component';
import { TableComponent } from './component/table/table.component';
import { AlertComponent } from './component/alert/alert.component';
import { AddModalComponent } from './component/add-modal/add-modal.component';
import { BusStationsComponent } from './Pages/bus/bus-stations/bus-stations.component';
import { BusDriversComponent } from './Pages/bus/bus-drivers/bus-drivers.component';
import { BusLinesComponent } from './Pages/bus/bus-lines/bus-lines.component';
import { TaxiListComponent } from './Pages/taxi/taxi-list/taxi-list.component';
import { TaxiDriversComponent } from './Pages/taxi/taxi-drivers/taxi-drivers.component';
import { ClientListComponent } from './Pages/client/client-list/client-list.component';
import { TravelsComponent } from './Pages/client/travels/travels.component';
import { LoginComponent } from './Pages/login/login.component';
import { MessagesComponent } from './Pages/messages/messages.component';
import { AddBusComponent } from './modals/add-bus/add-bus.component';
import { AddBusStationComponent } from './modals/add-bus-station/add-bus-station.component';
import { AddBusLineComponent } from './modals/add-bus-line/add-bus-line.component';
import { AddBusDriverComponent } from './modals/add-bus-driver/add-bus-driver.component';
import { AddTaxiComponent } from './modals/add-taxi/add-taxi.component';
import { AddTaxiDriverComponent } from './modals/add-taxi-driver/add-taxi-driver.component';
import { TopWidgetComponent } from './Pages/Dashboard/top-widget/top-widget.component';
import { TravelsPerMonthComponent } from './Pages/Dashboard/travels-per-month/travels-per-month.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardTotalComponent } from './Pages/Dashboard/dashboard-total/dashboard-total.component';
import { NgApexchartsModule } from "ng-apexcharts";
import ApexCharts from 'apexcharts'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    BusListComponent,
    TableComponent,
    AlertComponent,
    AddModalComponent,
    BusStationsComponent,
    BusDriversComponent,
    BusLinesComponent,
    TaxiListComponent,
    TaxiDriversComponent,
    ClientListComponent,
    TravelsComponent,
    LoginComponent,
    MessagesComponent,
    AddBusComponent,
    AddBusStationComponent,
    AddBusLineComponent,
    AddBusDriverComponent,
    AddTaxiComponent,
    AddTaxiDriverComponent,
    TopWidgetComponent,
    TravelsPerMonthComponent,
    DashboardTotalComponent,
   
  ],
  imports: [
    NgApexchartsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,

  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
