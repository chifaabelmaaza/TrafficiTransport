import { Component, OnInit } from '@angular/core';
import { AppDataService, IMessage } from '../../services/app-data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: IMessage[] = [];

  filteredMessages: IMessage[] = [];
  senderFilter: string = '';

  columns = [
    { prop: 'nomSender', name: 'Sender Name' },
    { prop: 'emailSender', name: 'Sender Email' },
    { prop: 'message', name: 'Message' }
    // Add more columns as needed
  ];

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    this.messages = this.appDataService.getMessageData();
    this.filteredMessages = [...this.messages];
  }

  applyFilter() {
    this.filteredMessages = this.messages.filter(message =>
      message.nomSender.toLowerCase().includes(this.senderFilter.toLowerCase())
    );
  }

  // Other functionalities as needed
}
