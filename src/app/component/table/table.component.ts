import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';

import { AlertComponent } from '../alert/alert.component';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { AddBusComponent } from '../../modals/add-bus/add-bus.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ColumnMode = ColumnMode;
  SortType = SortType;
  title = 'angular-material-demo';

  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() filteredRows: any[] = [];
  @Input() nameFilter: string = '';

  dialogRef!: MatDialogRef<any>; // Definite assignment assertion

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const currentPage = this.getCurrentPageFromPath();
    console.log('Current Page:', currentPage);
  }

  getCurrentPageFromPath(): string {
    const url = this.router.url;
    // Remove the leading slash and return the path segment
    return url.substring(1);
  }

  openAddRowModal() {
    const currentPage = this.getCurrentPageFromPath();
  
    if (currentPage === 'bus') {
      this.dialogRef = this.dialog.open(AddBusComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    } else if (currentPage === 'bus-station') {
      this.dialogRef = this.dialog.open(AddModalComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    } else if (currentPage === 'bus-driver') {
      this.dialogRef = this.dialog.open(AddModalComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    } else if (currentPage === 'bus-lines') {
      this.dialogRef = this.dialog.open(AddModalComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    } else if (currentPage === 'taxi') {
      this.dialogRef = this.dialog.open(AddModalComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    } else if (currentPage === 'taxi-driver') {
      this.dialogRef = this.dialog.open(AddModalComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    } else if (currentPage === 'clients') {
      this.dialogRef = this.dialog.open(AddModalComponent, {
        data: { rows: this.rows },
        disableClose: true,
      });
    }
  
    if (this.dialogRef) {
      this.dialogRef.componentInstance.saveRow.subscribe((newRow: any) => {
        if (newRow) {
          this.addRow(newRow);
          this.dialogRef.close();
        }
      });
  
      this.dialogRef.componentInstance.cancel.subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
  
  addRow(newRow: any) {
    const newId = this.generateNewId();
    const newRowWithId = {
      id: newId,
      ...newRow,
    };

    this.rows.push(newRowWithId);
    this.filteredRows = [...this.rows];
  }

  private generateNewId(): number {
    const existingIds = this.rows.map(row => row.id);
    const maxId = Math.max(...existingIds, 0);
    return maxId + 1;
  }

  applyFilter() {
    this.filteredRows = this.rows.filter(row =>
      row.name.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  startEdit(row: any) {
    this.rows.forEach(r => r.editing = false);
    row.editing = true;
  }

  saveEdit(row: any) {
    row.form.markAllAsTouched();
    if (row.form.valid) {
      const editedValues = row.form.value;
      Object.assign(row, editedValues);
      row.editing = false;
    }
  }

  cancelEdit(row: any) {
    row.editing = false;
  }

  deleteRow(row: any) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this row?',
        isDanger: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        row.status = 'deleted';
        const index = this.rows.indexOf(row);
        if (index !== -1) {
          this.rows.splice(index, 1);
          this.filteredRows = [...this.rows];
        }
      }
    });
  }
}
