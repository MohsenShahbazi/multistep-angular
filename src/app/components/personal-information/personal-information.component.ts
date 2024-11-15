import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,  // Ensure MatFormFieldModule is imported here
    MatInputModule,
    MatButtonModule,
  ]
})
export class PersonalInformationComponent {
  @Output() save = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalCode: ['', Validators.required],
    });
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
``
