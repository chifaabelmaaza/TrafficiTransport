import { Component, OnInit } from '@angular/core';

// Define the interface for your bus data
interface IBus {
  matricule: string;
  capacite: number;
  direction: string;
  disponibilite: boolean;
  driver: string;
  line: string;
}

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  // Define the bus data for the table
  buses: IBus[] = [
    { 
      matricule: 'BUS001', 
      capacite: 50, 
      direction: 'Direction 1', 
      disponibilite: true,
      driver: 'John Doe',
      line: 'N1',
    },
    { 
      matricule: 'BUS002', 
      capacite: 45, 
      direction: 'Direction 2', 
      disponibilite: false,
      driver: 'Jane Smith',
      line: 'N2',
    },
    { 
      matricule: 'BUS003', 
      capacite: 55, 
      direction: 'Direction 3', 
      disponibilite: true,
      driver: 'Michael Johnson',
      line: 'N3',
    },
    // Add more bus data as needed
    { 
      matricule: 'BUS004', 
      capacite: 60, 
      direction: 'Direction 1', 
      disponibilite: false,
      driver: 'Emily Davis',
      line: 'N4',
    },
    { 
      matricule: 'BUS005', 
      capacite: 40, 
      direction: 'Direction 2', 
      disponibilite: true,
      driver: 'William Brown',
      line: 'N5',
    },
    { 
      matricule: 'BUS006', 
      capacite: 65, 
      direction: 'Direction 3', 
      disponibilite: false,
      driver: 'Olivia Wilson',
      line: 'N6',
    },
    { 
      matricule: 'BUS007', 
      capacite: 55, 
      direction: 'Direction 1', 
      disponibilite: true,
      driver: 'James Garcia',
      line: 'N7',
    },
    { 
      matricule: 'BUS008', 
      capacite: 70, 
      direction: 'Direction 2', 
      disponibilite: true,
      driver: 'Sophia Martinez',
      line: 'N8',
    },
    { 
      matricule: 'BUS009', 
      capacite: 45, 
      direction: 'Direction 3', 
      disponibilite: false,
      driver: 'Logan Anderson',
      line: 'N9',
    },
    { 
      matricule: 'BUS010', 
      capacite: 50, 
      direction: 'Direction 1', 
      disponibilite: true,
      driver: 'Ava Taylor',
      line: 'N10',
    },
    { 
      matricule: 'BUS011', 
      capacite: 60, 
      direction: 'Direction 2', 
      disponibilite: false,
      driver: 'Ethan Thomas',
      line: 'N11',
    },
    { 
      matricule: 'BUS012', 
      capacite: 55, 
      direction: 'Direction 3', 
      disponibilite: true,
      driver: 'Mia Hernandez',
      line: 'N12',
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Matricule', name: 'Matricule' },
    { prop: 'Capacite', name: 'Capacite' },
    { prop: 'Direction', name: 'Direction' },
    { prop: 'Disponibilite', name: 'Disponibilite' },
    { prop: 'Driver', name: 'Driver' },
    { prop: 'Line', name: 'Line' },
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