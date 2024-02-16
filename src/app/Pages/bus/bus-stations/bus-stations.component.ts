import { Component,OnInit } from '@angular/core';
interface IStation {
  Nom: string;
  Cord_N: number;
  Cord_W: number;
  
}
@Component({
  selector: 'app-bus-stations',
  templateUrl: './bus-stations.component.html',
  styleUrl: './bus-stations.component.scss'
})
export class BusStationsComponent implements OnInit {
  // Define the bus data for the table
  Stations: IStation[] = [
    { 
      Nom: 'Station A',
      Cord_N: 40.7128,
      Cord_W: -74.0060,
    },
    { 
      Nom: 'Station B',
      Cord_N: 34.0522,
      Cord_W: -118.2437
    },
    { 
      Nom: 'Station C',
      Cord_N: 51.5074,
      Cord_W: -0.1278
    },
    // Add more bus data as needed
    { 
      Nom: 'Station E',
      Cord_N: 41.8781,
      Cord_W: -87.6298
    },
    { 
      Nom: 'Station F',
      Cord_N: 45.4215,
      Cord_W: -75.6993
    },
    { 
      Nom: 'Station G',
      Cord_N: 35.6895,
      Cord_W: 139.6917
    },
    { 
      Nom: 'Station H',
      Cord_N: -22.9083,
      Cord_W: -43.1964
    },
    { 
      Nom: 'Station I',
      Cord_N: 55.7558,
      Cord_W: 37.6176
    },
    { 
      Nom: 'Station J',
      Cord_N: -12.0464,
      Cord_W: -77.0428
    },
    { 
      Nom: 'Station K',
      Cord_N: 52.5200,
      Cord_W: 13.4050
    },
    { 
      Nom: 'Station L',
      Cord_N: 28.6139,
      Cord_W: 77.2090
    },
    { 
      Nom: 'Station M',
      Cord_N: 22.4667,
      Cord_W: -32.4572,
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Nom', name: 'Name Station' },
    { prop: 'Cord_N', name: 'North Coordinate' },
    { prop: 'Cord_W', name: 'West coordinate' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredStations: IStation[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredStations = [...this.Stations];
  }

  // Define name filter function
  applyFilter() {
    this.filteredStations = this.Stations.filter( Station =>
      Station.Nom.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}
