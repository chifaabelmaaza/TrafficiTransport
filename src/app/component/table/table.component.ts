import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';

import { AlertComponent } from '../alert/alert.component';
import { AddModalComponent } from '../add-modal/add-modal.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  ColumnMode = ColumnMode;
  SortType = SortType;
  title = 'angular-material-demo';

  // formBuilder = new FormBuilder();
  @Input() rows: any[] = []; // Input property to receive rows data from parent component
  @Input() columns: any[] = []; // Input property to receive columns data from parent component
  @Input() filteredRows: any[] = []; // Input property to receive filtered rows data from parent component
  @Input() nameFilter: string = ''; // Input property to receive name filter from parent component


  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {}
  allRowsEditing = false;

  // constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // Initialize rows with FormGroups
    // this.rows = this.initFormGroups(this.rows);
    // this.filteredRows = [...this.rows];
  }

  // initFormGroups(rows: any[]): FormGroup[] {
  //   return rows.map(row => {
  //     const form = this.formBuilder.group({
  //       id: [row.id],
  //       name: [row.name, Validators.required],
  //       gender: [row.gender, Validators.required],
  //       company: [row.company, Validators.required]
  //     });

  //     row.form = form;

  //     return row;
  //   });
  // }


  openAddRowModal() {
    const dialogRef = this.dialog.open(AddModalComponent, {
      data: { rows: this.rows },
      disableClose: true, // Prevent closing modal on outside click or pressing Escape key
    });

    dialogRef.componentInstance.saveRow.subscribe((newRow: any) => {
      if (newRow) {
        this.addRow(newRow);
        dialogRef.close(); // Close the modal after adding a new row
      }
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close(); // Close the modal when cancel is triggered
    });
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

  /*   toggleAllRowsEditing() {
      // Toggle editing mode for all rows
      this.allRowsEditing = !this.allRowsEditing;
      this.rows.forEach(row => (row.editing = this.allRowsEditing));
    }
   */
  startEdit(row: any) {
    // Enable editing mode for the clicked row
    this.rows.forEach(r => r.editing = false); // Disable editing mode for all other rows
    row.editing = true;
  }

  saveEdit(row: any) {
    // Save the edited values back to the row
    row.form.markAllAsTouched();
    if (row.form.valid) {
      const editedValues = row.form.value;
      Object.assign(row, editedValues);
      // Disable editing mode
      row.editing = false;
    }
  }

  cancelEdit(row: any) {
    // Disable editing mode without saving changes
    row.editing = false;
  }



  deleteRow(row: any) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this row?',
        isDanger: true, // Indicate danger status
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Perform deletion logic here
        console.log('Row deleted:', row);
        // Update your object status to indicate deletion
        row.status = 'deleted';
        const index = this.rows.indexOf(row);
        if (index !== -1) {
          this.rows.splice(index, 1); // Remove the row from the array
          this.filteredRows = [...this.rows]; // Update the filtered rows
        }
      }
    });
  }



}