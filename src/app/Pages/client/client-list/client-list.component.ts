import { Component, OnInit } from '@angular/core';
import { AppDataService, IClient } from '../../../services/app-data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: IClient[] = [];

  columns = [
    { prop: 'nom', name: 'Nom' },
    { prop: 'prenom', name: 'Prénom' },
    { prop: 'num', name: 'Numéro' },
    { prop: 'email', name: 'Email' }
    // Add more columns as needed
  ];

  filteredClients: IClient[] = [];
  nameFilter: string = '';

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.clients = this.appDataService.getClientData();
    this.filteredClients = [...this.clients];
  }

  applyFilter() {
    this.filteredClients = this.clients.filter(client =>
      (client.nom + ' ' + client.prenom).toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
