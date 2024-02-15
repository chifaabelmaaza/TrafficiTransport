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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './init/sidebar/sidebar.component';
import { NavbarComponent } from './init/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusListComponent } from './Pages/bus/bus-list/bus-list.component';
import { TableComponent } from './component/table/table.component';
import { AlertComponent } from './component/alert/alert.component';
import { AddModalComponent } from './component/add-modal/add-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    BusListComponent,
    TableComponent,
    AlertComponent,
    AddModalComponent,
  ],
  imports: [
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
    MatFormFieldModule

  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
