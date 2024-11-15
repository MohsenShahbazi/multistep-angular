import { Component, EventEmitter, Output } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-upload-document',
  standalone: true,
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css'],
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    FormsModule
  ]
})
export class UploadDocumentComponent {
  @Output() save = new EventEmitter<File>();

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSave() {
    if (this.selectedFile) {
      this.save.emit(this.selectedFile);
    }
  }
}
