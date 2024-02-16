import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-bus-driver',
  templateUrl: './add-bus-driver.component.html',
  styleUrl: './add-bus-driver.component.scss'
})
export class AddBusDriverComponent {
  @Output() saveRow = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  @Input() rows?: any[] = [];

  // Define a static list of lines
  lines: string[] = ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      Numero: ['', Validators.required],
      Email: ['', Validators.required],
      Disponibilite: ['', Validators.required],
      Line: ['', Validators.required],
    
    });
  }

  save() {
    if (this.form.valid) {
      const newRow = {
        ...this.form.value,
        ID: this.generateNewId(), // Assuming ID is part of the row
      };
      this.saveRow.emit(newRow);
      this.form.reset();
    }
  }

  cancelForm() {
    this.cancel.emit();
  }

  private generateNewId(): number {
    const existingIds = this.rows?.map(row => row.ID) || [];
    const maxId = Math.max(...existingIds, 0);

    return maxId + 1;
  }

}
