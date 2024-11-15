import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-review',
  standalone: true,
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  imports: [
    MatButton
  ]
})
export class ReviewComponent {
  @Input() formData: any;
  @Output() submit = new EventEmitter<void>();

  onSubmit() {
    this.submit.emit();
  }
}
