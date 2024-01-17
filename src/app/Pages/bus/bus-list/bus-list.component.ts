import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

// Define the interface for your data
interface ListItem {
  name: string;
  age: number;
  city: string;
}


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.scss'
})
export class BusListComponent {
  // rows: ListItem[] = [];
  // columns = [
  //   { prop: 'name', name: 'Name' },
  //   { prop: 'age', name: 'Age' },
  //   { prop: 'city', name: 'City' },
  // ];

  // totalRows = 30;
  // rowsPerPage = 10;

  // // Filter properties
  // filterCity = '';

  // @ViewChild('yourTable') yourTable: ElementRef;

  // ngAfterViewInit() {
  //   // Access the element in ngAfterViewInit
  //   const tableElement = this.yourTable.nativeElement;
  //   const boundingClientRect = tableElement.getBoundingClientRect();
  //   console.log('Bounding Client Rect:', boundingClientRect);
  // }

  // onPage(event: any) {
  //   console.log('Page Event:', event);
  //   const startIndex = event.offset * this.rowsPerPage;
  //   this.loadRows(startIndex);
  // }

  // applyFilter() {
  //   this.loadRows();
  // }

  // private loadRows(startIndex: number = 0) {
  //   this.rows = [];

  //   for (let i = startIndex; i < startIndex + this.rowsPerPage && i < this.totalRows; i++) {
  //     const rowData: ListItem = {
  //       name: `Person ${i + 1}`,
  //       age: Math.floor(Math.random() * 30) + 20,
  //       city: this.getRandomCity(),
  //     };

  //     // Apply the filter
  //     if (this.filterCity === '' || (rowData.city && rowData.city.toLowerCase().includes(this.filterCity.toLowerCase()))) {
  //       this.rows.push(rowData);
  //     }
  //   }
  // }

  // private getRandomCity(): string {
  //   const cities = ['New York', 'Tokyo', 'London', 'Paris', 'Berlin'];
  //   const randomIndex = Math.floor(Math.random() * cities.length);
  //   return cities[randomIndex];
  // }
}
