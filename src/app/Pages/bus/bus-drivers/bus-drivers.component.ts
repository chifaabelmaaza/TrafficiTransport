import { Component,OnInit } from '@angular/core';
interface IDriver {
  Nom: string;
  Prenom: string;
  Numero: string;
  Email: string;
  Disponibilite: Boolean;
  
}
@Component({
  selector: 'app-bus-drivers',
  templateUrl: './bus-drivers.component.html',
  styleUrl: './bus-drivers.component.scss'
})
export class BusDriversComponent implements OnInit {
  // Define the bus data for the table
  drivers: IDriver[] = [
    { 
      Nom: 'Smith',
      Prenom: 'John',
      Numero: '1234567890',
      Email: 'john.smith@example.com',
      Disponibilite: true
    },
    { 
      Nom: 'Johnson',
      Prenom: 'Alice',
      Numero: '987-654-3210',
      Email: 'alice.johnson@example.com',
      Disponibilite: false
    },
    { 
      Nom: 'Davis',
      Prenom: 'Bob',
      Numero: '(555) 123-4567',
      Email: 'bob.davis@example.com',
      Disponibilite: true
    },
    // Add more bus data as needed
    { 
      Nom: 'Miller',
      Prenom: 'Emily',
      Numero: '456.789.0123',
      Email: 'emily.miller@example.com',
      Disponibilite: true
    },
    { 
      Nom: 'Miller',
      Prenom: 'Emily',
      Numero: '456.789.0123',
      Email: 'emily.miller@example.com',
      Disponibilite: true
    },
    { 
      Nom: 'Wilson',
      Prenom: 'Michael',
      Numero: '+1 321-654-0987',
      Email: 'michael.wilson@example.com',
      Disponibilite: false
    },
    { 
      Nom: 'Brown',
      Prenom: 'Jessica',
      Numero: '7890123456',
      Email: 'jessica.brown@example.com',
      Disponibilite: true
    },
    { 
      Nom: 'Jones',
      Prenom: 'Christopher',
      Numero: '111-222-3333',
      Email: 'christopher.jones@example.com',
      Disponibilite: false
    },
    { 
      Nom: 'Taylor',
      Prenom: 'Sophia',
      Numero: '4445556666',
      Email: 'sophia.taylor@example.com',
      Disponibilite: true
    },
    { 
      Nom: 'Moore',
      Prenom: 'Daniel',
      Numero: '+44 20 7123 4567',
      Email: 'daniel.moore@example.com',
      Disponibilite: true
    },
    { 
      Nom: 'Anderson',
      Prenom: 'Olivia',
      Numero: '+1 (777) 888-9999',
      Email: 'olivia.anderson@example.com',
      Disponibilite: false
    },
    { 
      Nom: 'Clark',
      Prenom: 'Ethan',
      Numero: '222-333-4444',
      Email: 'ethan.clark@example.com',
      Disponibilite: true
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Nom', name: 'Family Name' },
    { prop: 'Prenom', name: 'First Name' },
    { prop: 'Numero', name: 'Number' },
    { prop: 'Email', name: 'Email' },
    { prop: 'Disponibilite', name: 'Disponibilite' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredDrivers: IDriver[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredDrivers = [...this.drivers];
  }

  // Define name filter function
  applyFilter() {
    this.filteredDrivers = this.drivers.filter( driver =>
      driver.Nom.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}
