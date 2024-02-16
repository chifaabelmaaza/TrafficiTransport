import { Component,OnInit } from '@angular/core';
interface ILine {
  Num_Ligne: string;
  Duree_traj: number;
  Horaire_D: string;
  Horaire_F: string;
  Station: string;
  
}
@Component({
  selector: 'app-bus-lines',
  templateUrl: './bus-lines.component.html',
  styleUrl: './bus-lines.component.scss'
})

export class BusLinesComponent implements OnInit {
  // Define the bus data for the table
  Lines: ILine[] = [
    { 
      Num_Ligne: 'Ligne 1',
      Duree_traj: 30,
      Horaire_D: '08:00',
      Horaire_F: '08:30',
      Station: 'Station A'
    },
    { 
      Num_Ligne: 'Ligne 2',
      Duree_traj: 45,
      Horaire_D: '09:15',
      Horaire_F: '10:00',
      Station: 'Station B'
    },
    { 
      Num_Ligne: 'Ligne 3',
      Duree_traj: 60,
      Horaire_D: '12:00',
      Horaire_F: '13:00',
      Station: 'Station C'
    },
    // Add more bus data as needed
    { 
      Num_Ligne: 'Ligne 4',
      Duree_traj: 20,
      Horaire_D: '14:30',
      Horaire_F: '14:50',
      Station: 'Station D'
    },
    { 
      Num_Ligne: 'Ligne 5',
      Duree_traj: 35,
      Horaire_D: '16:45',
      Horaire_F: '17:20',
      Station: 'Station E'
    },
    { 
      Num_Ligne: 'Ligne 6',
      Duree_traj: 50,
      Horaire_D: '18:10',
      Horaire_F: '19:00',
      Station: 'Station F'
    },
    { 
      Num_Ligne: 'Ligne 7',
      Duree_traj: 25,
      Horaire_D: '07:30',
      Horaire_F: '07:55',
      Station: 'Station G'
    },
    { 
      Num_Ligne: 'Ligne 8',
      Duree_traj: 40,
      Horaire_D: '10:30',
      Horaire_F: '11:10',
      Station: 'Station H'
    },
    { 
      Num_Ligne: 'Ligne 9',
      Duree_traj: 55,
      Horaire_D: '13:45',
      Horaire_F: '14:40',
      Station: 'Station I'
    },
    { 
      Num_Ligne: 'Ligne 10',
      Duree_traj: 15,
      Horaire_D: '15:20',
      Horaire_F: '15:35',
      Station: 'Station J'
    },
    { 
      Num_Ligne: 'Ligne 10',
      Duree_traj: 15,
      Horaire_D: '15:20',
      Horaire_F: '15:35',
      Station: 'Station J'
    },
    { 
      Num_Ligne: 'Ligne 12',
      Duree_traj: 28,
      Horaire_D: '20:15',
      Horaire_F: '20:43',
      Station: 'Station L'
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Num_ligne', name: 'Ligne Number' },
    { prop: 'Duree_traj', name: 'travel time' },
    { prop: 'Horaire_D', name: 'Departure time' },
    { prop: 'Horaire_F', name: 'End time' },
    { prop: 'Station', name: 'Station' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredLines: ILine[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredLines = [...this.Lines];
  }

  // Define name filter function
  applyFilter() {
    this.filteredLines = this.Lines.filter( Line =>
      Line.Num_Ligne.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}