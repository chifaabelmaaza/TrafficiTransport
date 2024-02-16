import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-taxi',
  templateUrl: './add-taxi.component.html',
  styleUrl: './add-taxi.component.scss'
})
export class AddTaxiComponent {

  @Output() saveRow = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  @Input() rows?: any[] = [];


  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Matricule: ['', Validators.required],
      Marque: ['', Validators.required],
      Model: ['', Validators.required],
      Category: ['', Validators.required],
      Num_Agrement: ['', Validators.required],
     
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

