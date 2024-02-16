import { Component,OnInit } from '@angular/core';
interface IClient {
  Nom: string;
  Prenom: string;
  Num: string;
  Email: string;
  
}
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {
  // Define the bus data for the table
  Clients: IClient[] = [
    { 
      Nom: 'Doe',
      Prenom: 'John',
      Num: '123456',
      Email: 'john.doe@example.com'
    },
    { 
      Nom: 'Smith',
      Prenom: 'Alice',
      Num: '987654',
      Email: 'alice.smith@example.com'
    },
    { 
      Nom: 'Johnson',
      Prenom: 'Bob',
      Num: '555123',
      Email: 'bob.johnson@example.com'
    },
    // Add more bus data as needed
    { 
      Nom: 'Williams',
      Prenom: 'Emily',
      Num: '456789',
      Email: 'emily.williams@example.com'
    },
    { 
      Nom: 'Brown',
      Prenom: 'Michael',
      Num: '321654',
      Email: 'michael.brown@example.com'
    },
    { 
      Nom: 'Davis',
      Prenom: 'Christopher',
      Num: '111222',
      Email: 'christopher.davis@example.com'
    },
    { 
      Nom: 'Miller',
      Prenom: 'Sophia',
      Num: '444555',
      Email: 'sophia.miller@example.com'
    },
    { 
      Nom: 'Wilson',
      Prenom: 'Daniel',
      Num: '888999',
      Email: 'daniel.wilson@example.com'
    },
    { 
      Nom: 'Taylor',
      Prenom: 'Olivia',
      Num: '777888',
      Email: 'olivia.taylor@example.com'
    },
    { 
      Nom: 'Anderson',
      Prenom: 'Ethan',
      Num: '222333',
      Email: 'ethan.anderson@example.com',
    },
    { 
      Nom: 'Moore',
      Prenom: 'Emma',
      Num: '666777',
      Email: 'emma.moore@example.com'
    },
    { 
      Nom: 'Jones',
      Prenom: 'Jessica',
      Num: '789012',
      Email: 'jessica.jones@example.com'
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Nom', name: 'Nom' },
    { prop: 'Prenom', name: 'Prenom' },
    { prop: 'Number', name: 'Num' },
    { prop: 'Email', name: 'Email' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredClients: IClient[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredClients = [...this.Clients];
  }

  // Define name filter function
  applyFilter() {
    this.filteredClients = this.Clients.filter( Client =>
      Client.Nom.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}
