import { Component, OnInit } from '@angular/core';
import { AppDataService, ITaxiDriver } from '../../../services/app-data.service';

@Component({
  selector: 'app-taxi-drivers',
  templateUrl: './taxi-drivers.component.html',
  styleUrls: ['./taxi-drivers.component.scss']
})
export class TaxiDriversComponent implements OnInit {
  taxiDrivers: ITaxiDriver[] = [];

  columns = [
    { prop: 'nom', name: 'Nom' },
    { prop: 'prenom', name: 'Prénom' },
    { prop: 'num', name: 'Numéro' },
    { prop: 'email', name: 'Email' },
    // Add more columns as needed
  ];

  filteredTaxiDrivers: ITaxiDriver[] = [];
  nameFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.taxiDrivers = this.appDataService.getTaxiDriverData();
    this.filteredTaxiDrivers = [...this.taxiDrivers];
  }

  applyFilter() {
    this.filteredTaxiDrivers = this.taxiDrivers.filter(driver =>
      (driver.nom + ' ' + driver.prenom).toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
