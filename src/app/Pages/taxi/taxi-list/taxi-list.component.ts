import { Component, OnInit } from '@angular/core';
import { AppDataService, ITaxis } from '../../../services/app-data.service';

@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrls: ['./taxi-list.component.scss']
})
export class TaxiListComponent implements OnInit {
  taxis: ITaxis[] = [];

  columns = [
    { prop: 'matricule', name: 'Matricule' },
    { prop: 'marque', name: 'Marque' },
    { prop: 'model', name: 'Modèle' },
    { prop: 'category', name: 'Catégorie' },
    { prop: 'numAgrement', name: 'Numéro d\'agrément' },
    // Add more columns as needed
  ];

  filteredTaxis: ITaxis[] = [];
  matriculeFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.taxis = this.appDataService.getTaxiData();
    this.filteredTaxis = [...this.taxis];
  }

  applyFilter() {
    this.filteredTaxis = this.taxis.filter(taxi =>
      taxi.matricule.toLowerCase().includes(this.matriculeFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
