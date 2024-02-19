import { Component, OnInit } from '@angular/core';
import { AppDataService, IDriver } from '../../../services/app-data.service';

@Component({
  selector: 'app-bus-drivers',
  templateUrl: './bus-drivers.component.html',
  styleUrls: ['./bus-drivers.component.scss']
})
export class BusDriversComponent implements OnInit {
  drivers: IDriver[] = [];

  columns = [
    { prop: 'nom', name: 'Nom' },
    { prop: 'prenom', name: 'Prénom' },
    { prop: 'numero', name: 'Numéro' },
    { prop: 'email', name: 'Email' },
    { prop: 'disponibilite', name: 'Disponibilité' }
    // Add more columns as needed
  ];

  filteredDrivers: IDriver[] = [];
  nameFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.drivers = this.appDataService.getDriverData();
    this.filteredDrivers = [...this.drivers];
  }

  applyFilter() {
    this.filteredDrivers = this.drivers.filter(driver =>
      (driver.nom + ' ' + driver.prenom).toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
