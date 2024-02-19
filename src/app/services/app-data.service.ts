import { Injectable } from '@angular/core';

// Define the interfaces
export interface IBus {
  matricule: string;
  capacite: number;
  direction: string;
  disponibilite: boolean;
  driver: string;
  line: string;
}

export interface ILine {
  numLigne: string;
  dureeTraj: number;
  horaireD: string;
  horaireF: string;
  station: string;
}

export interface IStation {
  nom: string;
  cordN: number;
  cordW: number;
}

export interface IClient {
  nom: string;
  prenom: string;
  num: string;
  email: string;
}

export interface IDriver {
  nom: string;
  prenom: string;
  numero: string;
  email: string;
  disponibilite: boolean;
}

export interface ITravel {
  idTravel: string;
  idChauffeur: string;
  idClient: string;
  pointDepart: string;
  pointArriver: string;
  typeTravels: 'By Taxi' | 'By Bus';
  cout: number;
}

export interface ITaxis {
  matricule: string;
  marque: string;
  model: string;
  category: 'BIG' | 'SMALL';
  numAgrement: string;
}

export interface ITaxiDriver {
  nom: string;
  prenom: string;
  num: string;
  email: string;
}
export interface IMessage {
  nomSender: string;
  idSender: number;
  emailSender: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  // Sample data for each interface
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


  lines: ILine[] = [
    { numLigne: 'N1', dureeTraj: 30, horaireD: '08:00', horaireF: '08:30', station: 'Station A' },
    { numLigne: 'N2', dureeTraj: 45, horaireD: '09:00', horaireF: '09:45', station: 'Station B' },
    // Add more sample line data as needed
  ];

  stations: IStation[] = [
    { nom: 'Station A', cordN: 123, cordW: 456 },
    { nom: 'Station B', cordN: 789, cordW: 101 },
    // Add more sample station data as needed
  ];

  clients: IClient[] = [
    { nom: 'Doe', prenom: 'John', num: '123456789', email: 'john.doe@example.com' },
    { nom: 'Smith', prenom: 'Jane', num: '987654321', email: 'jane.smith@example.com' },
    // Add more sample client data as needed
  ];

  taxis: ITaxis[] = [
    {
      matricule: 'ABC123',
      marque: 'Toyota',
      model: 'Camry',
      category: 'SMALL',
      numAgrement: 'TAXI001'
    },
    {
      matricule: 'XYZ789',
      marque: 'Ford',
      model: 'Escape',
      category: 'SMALL',
      numAgrement: 'TAXI002'
    },
    // ... (add more taxi data as needed)
  ];

  taxiDrivers: ITaxiDriver[] = [
    { nom: 'Smith', prenom: 'John', num: '123456789', email: 'john.doe@example.com' },
    { nom: 'Doe', prenom: 'Jane', num: '987654321', email: 'jane.smith@example.com' },
    // ... (add more taxi driver data as needed)
  ];

 

  drivers: IDriver[] = [
    { nom: 'Doe', prenom: 'John', numero: '123456789', email: 'john.doe@example.com', disponibilite: true },
    { nom: 'Smith', prenom: 'Jane', numero: '987654321', email: 'jane.smith@example.com', disponibilite: false },
    // ... (add more bus driver data as needed)
  ];
  messages: IMessage[] = [
    { nomSender: 'Sender1', idSender: 1, emailSender: 'sender1@example.com', message: 'Message 1' },
    { nomSender: 'Sender2', idSender: 2, emailSender: 'sender2@example.com', message: 'Message 2' },
    // Add more sample message data as needed
  ];


  travels: ITravel[] = [
    { idTravel: '1', idChauffeur: 'C1', idClient: 'Client1', pointDepart: 'Departure A', pointArriver: 'Arrival B', typeTravels: 'By Taxi', cout: 50 },
    { idTravel: '2', idChauffeur: 'C2', idClient: 'Client2', pointDepart: 'Departure B', pointArriver: 'Arrival C', typeTravels: 'By Bus', cout: 70 },
    { idTravel: '3', idChauffeur: 'C3', idClient: 'Client3', pointDepart: 'Departure C', pointArriver: 'Arrival A', typeTravels: 'By Taxi', cout: 90 },
    // Add more sample travel data as needed
  ];

  // Functions to get data
  getBusData(): IBus[] {
    return this.buses;
  }

  getLineData(): ILine[] {
    return this.lines;
  }

  getStationData(): IStation[] {
    return this.stations;
  }

  getClientData(): IClient[] {
    return this.clients;
  }

  getDriverData(): IDriver[] {
    return this.drivers;
  }

  getTravelData(): ITravel[] {
    return this.travels;
  }

  getTaxiData(): ITaxis[] {
    return this.taxis;
  }

  getTaxiDriverData(): ITaxiDriver[] {
    return this.taxiDrivers;
  }

  getMessageData(): IMessage[] {
    return this.messages;
  }
}
