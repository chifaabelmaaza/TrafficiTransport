import { Component, OnInit } from '@angular/core';

// Define the interface for your bus data
interface IBus {
  matricule: string;
  capacite: number;
  direction: string;
  disponibilite: boolean;
}

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  // Define the bus data for the table
  buses: IBus[] = [
    { matricule: 'BUS001', capacite: 50, direction: 'Direction 1', disponibilite: true },
    { matricule: 'BUS002', capacite: 45, direction: 'Direction 2', disponibilite: false },
    { matricule: 'BUS003', capacite: 55, direction: 'Direction 3', disponibilite: true },
    { matricule: 'BUS004', capacite: 60, direction: 'Direction 1', disponibilite: false },
    { matricule: 'BUS005', capacite: 40, direction: 'Direction 2', disponibilite: true },
    { matricule: 'BUS006', capacite: 65, direction: 'Direction 3', disponibilite: false },
    { matricule: 'BUS007', capacite: 55, direction: 'Direction 1', disponibilite: true },
    { matricule: 'BUS008', capacite: 70, direction: 'Direction 2', disponibilite: true },
    { matricule: 'BUS009', capacite: 45, direction: 'Direction 3', disponibilite: false },
    { matricule: 'BUS010', capacite: 50, direction: 'Direction 1', disponibilite: true },
    { matricule: 'BUS011', capacite: 60, direction: 'Direction 2', disponibilite: false },
    { matricule: 'BUS012', capacite: 55, direction: 'Direction 3', disponibilite: true }
    // Add more bus data as needed
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'matricule', name: 'Matricule' },
    { prop: 'capacite', name: 'Capacite' },
    { prop: 'direction', name: 'Direction' },
    { prop: 'disponibilite', name: 'Disponibilite' }
    // Add more columns as needed
  ];

  // Define filtered buses and name filter (if needed)
  filteredBuses: IBus[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredBuses = [...this.buses];
  }

  // Define name filter function
  applyFilter() {
    this.filteredBuses = this.buses.filter(bus =>
      bus.matricule.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}