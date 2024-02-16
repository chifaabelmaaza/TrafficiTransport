import { Component,OnInit } from '@angular/core';
interface ITaxis {
  Matricule: string;
  Marque: string;
  Model: string;
  Category: string;
  Num_Agrement:string;
  
}
@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrl: './taxi-list.component.scss'
})
export class TaxiListComponent implements OnInit {
  // Define the bus data for the table
  Taxis: ITaxis[] = [
    { 
      Matricule: 'ABC123',
      Marque: 'Toyota',
      Model: 'Camry',
      Category: 'Sedan',
      Num_Agrement: 'TAXI001'
    },
    { 
      Matricule: 'XYZ789',
      Marque: 'Ford',
      Model: 'Escape',
      Category: 'SUV',
      Num_Agrement: 'TAXI002'
    },
    { 
      Matricule: 'DEF456',
      Marque: 'Honda',
      Model: 'Civic',
      Category: 'Compact',
      Num_Agrement: 'TAXI003'
    },
    // Add more bus data as needed
    { 
      Matricule: 'GHI789',
      Marque: 'Chevrolet',
      Model: 'Impala',
      Category: 'Sedan',
      Num_Agrement: 'TAXI004'
    },
    { 
      Matricule: 'JKL012',
      Marque: 'Hyundai',
      Model: 'Santa Fe',
      Category: 'SUV',
      Num_Agrement: 'TAXI005'
    },
    { 
      Matricule: 'MNO345',
      Marque: 'Nissan',
      Model: 'Altima',
      Category: 'Sedan',
      Num_Agrement: 'TAXI006'
    },
    { 
      Matricule: 'PQR678',
  Marque: 'Kia',
  Model: 'Sportage',
  Category: 'SUV',
  Num_Agrement: 'TAXI007'
    },
    { 
      Matricule: 'VWX234',
      Marque: 'Subaru',
      Model: 'Outback',
      Category: 'Wagon',
      Num_Agrement: 'TAXI009'
    },
    { 
      Matricule: 'YZA567',
      Marque: 'Jeep',
      Model: 'Cherokee',
      Category: 'SUV',
      Num_Agrement: 'TAXI010'
    },
    { 
      Matricule: 'BCD890',
      Marque: 'Audi',
      Model: 'A4',
      Category: 'Luxury',
      Num_Agrement: 'TAXI011'
    },
    { 
      Matricule: 'EFG123',
      Marque: 'Mercedes-Benz',
      Model: 'E-Class',
      Category: 'Luxury',
      Num_Agrement: 'TAXI012'
    },
    { 
      Matricule: 'MNO345',
      Marque: 'Nissan',
      Model: 'Altima',
      Category: 'Sedan',
      Num_Agrement: 'TAXI006'
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Matricule', name: 'Matricule' },
    { prop: 'Marque', name: 'Marque' },
    { prop: 'Model', name: 'Model' },
    { prop: 'Category', name: 'Category' },
    { prop: 'Num_Agrement', name: 'Accreditation number' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredTaxis: ITaxis[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredTaxis = [...this.Taxis];
  }

  // Define name filter function
  applyFilter() {
    this.filteredTaxis = this.Taxis.filter( Taxi =>
      Taxi.Matricule.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}


