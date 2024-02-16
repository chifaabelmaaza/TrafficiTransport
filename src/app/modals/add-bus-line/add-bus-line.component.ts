import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-bus-line',
  templateUrl: './add-bus-line.component.html',
  styleUrl: './add-bus-line.component.scss'
})
export class AddBusLineComponent {

  @Output() saveRow = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  @Input() rows?: any[] = [];

  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Num_Ligne: ['', Validators.required],
      Duree_traj: ['', Validators.required],
      Horaire_D: ['', Validators.required],
      Horaire_F: ['', Validators.required],
      Stations: ['', Validators.required],
      
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

