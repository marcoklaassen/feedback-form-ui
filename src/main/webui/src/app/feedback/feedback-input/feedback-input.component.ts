import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'feedback-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-input.component.html',
  styleUrl: './feedback-input.component.scss'
})
export class FeedbackInputComponent {

  @Output() newFeedbackEvent = new EventEmitter<number>();

  applyForm = new FormGroup({
    rating: new FormControl<number>(0),
  });

  submitFeedback() {
    this.newFeedbackEvent.emit(this.applyForm.value.rating ?? 0);
  }
}
