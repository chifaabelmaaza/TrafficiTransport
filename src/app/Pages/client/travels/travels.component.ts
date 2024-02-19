import { Component, OnInit } from '@angular/core';
import { AppDataService, ITravel } from '../../../services/app-data.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  travels: ITravel[] = [];

  filteredTravels: ITravel[] = [];
  pointFilter: string = '';

  columns = [
    { prop: 'idTravel', name: 'ID' },
    { prop: 'idChauffeur', name: 'Driver ID' },
    { prop: 'idClient', name: 'Client ID' },
    { prop: 'pointDepart', name: 'Departure Point' },
    { prop: 'pointArriver', name: 'Arrival Point' },
    { prop: 'typeTravels', name: 'Type' },
    { prop: 'cout', name: 'Cost' }
    // Add more columns as needed
  ];

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.travels = this.appDataService.getTravelData();
    this.filteredTravels = [...this.travels];
  }

  applyFilter() {
    this.filteredTravels = this.travels.filter(travel =>
      travel.pointDepart.toLowerCase().includes(this.pointFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
