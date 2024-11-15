import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contact-information',
  standalone: true,
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css'],
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    ReactiveFormsModule,
    MatFormFieldModule,  // Ensure MatFormFieldModule is imported here
    MatInputModule,
    MatButtonModule,
  ]
})
export class ContactInformationComponent {
  @Output() save = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      province: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
