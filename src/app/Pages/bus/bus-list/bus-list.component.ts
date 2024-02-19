import { Component, OnInit } from '@angular/core';
import { AppDataService, IBus } from '../../../services/app-data.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  buses: IBus[] = [];

  columns = [
    { prop: 'Matricule', name: 'Matricule' },
    { prop: 'Capacite', name: 'Capacite' },
    { prop: 'Direction', name: 'Direction' },
    { prop: 'Disponibilite', name: 'Disponibilite' },
    { prop: 'Driver', name: 'Driver' },
    { prop: 'Line', name: 'Line' },
    // Add more columns as needed
  ];

  filteredBuses: IBus[] = [];
  nameFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.buses = this.appDataService.getBusData();
    this.filteredBuses = [...this.buses];
  }

  applyFilter() {
    this.filteredBuses = this.buses.filter(bus =>
      bus.matricule.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
