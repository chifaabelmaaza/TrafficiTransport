import { Component,OnInit } from '@angular/core';
interface ITravel {
  Id_travel:string;
  Id_Chauffeur: string;
  Id_Client: string;
  Point_Depart: string;
  Point_Arriver: string;
  Type_Travels:string;
  cout:number;
  
}
@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent implements OnInit {
  // Define the bus data for the table
  Travels: ITravel[] = [
    {
      Id_travel: "TRV001",
      Id_Chauffeur: "CHF101",
      Id_Client: "CLI567",
      Point_Depart: "Domicile",
      Point_Arriver: "Aéroport",
      Type_Travels: "Navette",
      cout: 50.00,
      
    },
    { 
      Id_travel:"TRV002",
      Id_Chauffeur: "CHF105",
      Id_Client: "CLI789",
      Point_Depart: "Centre-ville",
      Point_Arriver: "Quartier résidentiel",
      Type_Travels: "Taxi",
      cout: 25.50
    },
    { 
      Id_travel: "TRV003",
      Id_Chauffeur: "CHF110",
      Id_Client: "CLI123",
      Point_Depart: "Hôtel",
      Point_Arriver: "Site touristique",
      Type_Travels: "Excursion",
      cout: 120.00
    },
    // Add more bus data as needed
    { 
      Id_travel: "TRV004",
      Id_Chauffeur: "CHF102",
      Id_Client: "CLI456",
      Point_Depart: "Bureau",
      Point_Arriver: "Réunion client",
      Type_Travels: "Service VIP",
      cout: 80.75
    },
    { 
      Id_travel: "TRV005",
      Id_Chauffeur: "CHF103",
      Id_Client: "CLI789",
      Point_Depart: "Domicile",
      Point_Arriver: "Lieu de travail",
      Type_Travels: "Navette quotidienne",
      cout: 35.00
    },
    { 
      Id_travel: "TRV003",
      Id_Chauffeur: "CHF110",
      Id_Client: "CLI123",
      Point_Depart: "Hôtel",
      Point_Arriver: "Site touristique",
      Type_Travels: "Excursion",
      cout: 120.00
    },
    { 
      Id_travel: "TRV004",
      Id_Chauffeur: "CHF102",
      Id_Client: "CLI456",
      Point_Depart: "Bureau",
      Point_Arriver: "Réunion client",
      Type_Travels: "Service VIP",
      cout: 80.75
    },
    { 
      Id_travel: "TRV005",
      Id_Chauffeur: "CHF103",
      Id_Client: "CLI789",
      Point_Depart: "Domicile",
      Point_Arriver: "Lieu de travail",
      Type_Travels: "Navette quotidienne",
      cout: 35.00
    },
    {
      Id_travel: "TRV006",
      Id_Chauffeur: "CHF104",
      Id_Client: "CLI567",
      Point_Depart: "Restaurant",
      Point_Arriver: "Cinéma",
      Type_Travels: "Course rapide",
      cout: 15.25
    },
    {
      Id_travel: 'T001',
      Id_Chauffeur: 'C001',
      Id_Client: 'CL001',
      Point_Depart: 'Point A',
      Point_Arriver: 'Point B',
      Type_Travels: 'Business',
      cout: 50.0
    },
    {
      Id_travel: 'T002',
      Id_Chauffeur: 'C002',
      Id_Client: 'CL002',
      Point_Depart: 'Point X',
      Point_Arriver: 'Point Y',
      Type_Travels: 'Tourism',
      cout: 75.5
    },
    { 
      Id_travel: 'T003',
      Id_Chauffeur: 'C003',
      Id_Client: 'CL003',
      Point_Depart: 'Home',
      Point_Arriver: 'Office',
      Type_Travels: 'Commute',
      cout: 30.25
    }
  ];

  // Define the columns configuration for the table
  columns = [
    { prop: 'Id_Travel', name: 'Travel ID' },
    { prop: 'Id_Chauffeur', name: 'Chauffeur ID' },
    { prop: 'Id_Client', name: 'Client ID' },
    { prop: 'Point_Depart', name: 'Point Depart' },
    { prop: 'Point_Arriver', name: 'Point Arriver' },
    { prop: 'Type_Travels', name: 'Type Travels' },
    { prop: 'cout', name: 'Cout' },
    // Add more columns as needed
  ];

  

  // Define filtered buses and name filter (if needed)
  filteredTravels: ITravel[] = []; // Initialize filteredBuses array
  nameFilter: string = ''; // Initialize nameFilter property
  
  // Initialize filteredBuses with all buses data
  ngOnInit() {
    this.filteredTravels = [...this.Travels];
  }

  // Define name filter function
  applyFilter() {
    this.filteredTravels = this.Travels.filter( Travel =>
      Travel.Type_Travels.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Add other functionalities as needed
}

