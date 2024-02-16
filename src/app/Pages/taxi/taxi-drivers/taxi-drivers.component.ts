import { Component,OnInit } from '@angular/core';
interface ITaxiDriver {
  Nom: string;
  Prenom: string;
  Num: string;
  Email: string;
  
}
@Component({
  selector: 'app-taxi-drivers',
  templateUrl: './taxi-drivers.component.html',
  styleUrl: './taxi-drivers.component.scss'
})
export class TaxiDriversComponent implements OnInit {
  // Define the bus data for the table
  Drivers: ITaxiDriver[] = [
    { 
      Nom: 'Smith',
      Prenom: 'Alice',
      Num: '987-654-3210',
      Email: 'alice.smith@example.com'
    },
    { 
      Nom: 'Johnson',
      Prenom: 'Bob',
      Num: '(555) 123-4567',
      Email: 'bob.johnson@example.com'
    },
    { 
      Nom: 'Williams',
      Prenom: 'Emily',
      Num: '456.789.0123',
      Email: 'emily.williams@example.com'
    },
    // Add more bus data as needed
    { 
      Nom: 'Brown',
      Prenom: 'Michael',
      Num: '+1 321-654-0987',
      Email: 'michael.brown@example.com'
    },
    { 
      Nom: 'Jones',
      Prenom: 'Jessica',
      Num: '7890123456',
      Email: 'jessica.jones@example.com'
    },
    { 
      Nom: 'Davis',
      Prenom: 'Christopher',
      Num: '111-222-3333',
      Email: 'christopher.davis@example.com'
    },
    { 
      Nom: 'Miller',
      Prenom: 'Sophia',
      Num: '4445556666',
      Email: 'sophia.miller@example.com'
    },
    { 
      Nom: 'Wilson',
      Prenom: 'Daniel',
      Num: '+44 20 7123 4567',
      Email: 'daniel.wilson@example.com'
    },
    { 
      Nom: 'Taylor',
      Prenom: 'Olivia',
      Num: '+1 (777) 888-9999',
      Email: 'olivia.taylor@example.com'
    },
    { 
      Nom: 'Anderson',
      Prenom: 'Ethan',
      Num: '222-333-4444',
      Email: 'ethan.anderson@example.com'
    },
    { 
      Nom: 'Moore',
      Prenom: 'Emma',
      Num: '6667778888',
      Email: 'emma.moore@example.com'
    },
    { 
      Nom: 'Doe',
      Prenom: 'John',
      Num: '1234567890',
      Email: 'john.doe@example.com'
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Nom', name: 'Family Name' },
    { prop: 'Prenom', name: 'First Name' },
    { prop: 'Num', name: 'Number' },
    { prop: 'Email', name: 'Email' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredDrivers: ITaxiDriver[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredDrivers = [...this.Drivers];
  }

  // Define name filter function
  applyFilter() {
    this.filteredDrivers = this.Drivers.filter( Driver =>
      Driver.Nom.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}

