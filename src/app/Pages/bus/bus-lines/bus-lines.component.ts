import { Component, OnInit } from '@angular/core';
import { AppDataService, ILine } from '../../../services/app-data.service';

@Component({
  selector: 'app-bus-lines',
  templateUrl: './bus-lines.component.html',
  styleUrls: ['./bus-lines.component.scss']
})
export class BusLinesComponent implements OnInit {
  lines: ILine[] = [];

  columns = [
    { prop: 'numLigne', name: 'Numéro de Ligne' },
    { prop: 'dureeTraj', name: 'Durée du Trajet' },
    { prop: 'horaireD', name: 'Horaire de Départ' },
    { prop: 'horaireF', name: 'Horaire de Fin' },
    { prop: 'station', name: 'Station' }
    // Add more columns as needed
  ];

  filteredLines: ILine[] = [];
  nameFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.lines = this.appDataService.getLineData();
    this.filteredLines = [...this.lines];
  }

  applyFilter() {
    this.filteredLines = this.lines.filter(line =>
      line.numLigne.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
