import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './Pages/bus/bus-list/bus-list.component';
import { BusStationsComponent } from './Pages/bus/bus-stations/bus-stations.component';
import { BusDriversComponent } from './Pages/bus/bus-drivers/bus-drivers.component';
import { BusLinesComponent } from './Pages/bus/bus-lines/bus-lines.component';
import { TaxiListComponent } from './Pages/taxi/taxi-list/taxi-list.component';
import { TaxiDriversComponent } from './Pages/taxi/taxi-drivers/taxi-drivers.component';
import { ClientListComponent } from './Pages/client/client-list/client-list.component';
import { TravelsComponent } from './Pages/client/travels/travels.component';
import { MessagesComponent } from './Pages/messages/messages.component';
import { DashboardTotalComponent } from './Pages/Dashboard/dashboard-total/dashboard-total.component';

const routes: Routes = [
  { path: '', component:  BusListComponent},
  { path: 'dashboard', component:  DashboardTotalComponent},
  { path: 'messages', component:  MessagesComponent},
  { path: 'bus', component:  BusListComponent },
  { path: 'bus-station', component: BusStationsComponent },
  { path: 'bus-driver', component: BusDriversComponent },
  { path: 'bus-lines', component:  BusLinesComponent},
  { path: 'taxi', component:  TaxiListComponent},
  { path: 'taxi-driver', component:  TaxiDriversComponent},
  { path: 'clients', component:  ClientListComponent},
  { path: 'travels', component:  TravelsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
