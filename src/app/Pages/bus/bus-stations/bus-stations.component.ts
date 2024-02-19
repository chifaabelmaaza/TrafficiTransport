import { Component, OnInit } from '@angular/core';
import { AppDataService, IStation } from '../../../services/app-data.service';

@Component({
  selector: 'app-bus-stations',
  templateUrl: './bus-stations.component.html',
  styleUrls: ['./bus-stations.component.scss']
})
export class BusStationsComponent implements OnInit {
  stations: IStation[] = [];

  columns = [
    { prop: 'nom', name: 'Nom' },
    { prop: 'cordN', name: 'Coordonnée N' },
    { prop: 'cordW', name: 'Coordonnée W' }
    // Add more columns as needed
  ];

  filteredStations: IStation[] = [];
  nameFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.stations = this.appDataService.getStationData();
    this.filteredStations = [...this.stations];
  }

  applyFilter() {
    this.filteredStations = this.stations.filter(station =>
      station.nom.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
