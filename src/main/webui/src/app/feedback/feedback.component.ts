import { Component, inject } from '@angular/core';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackInputComponent } from './feedback-input/feedback-input.component';
import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'feedback',
  standalone: true,
  imports: [FeedbackListComponent, FeedbackInputComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  feedbacks: Feedback[] = [];
  feedbackService: FeedbackService = inject(FeedbackService);

  constructor() {
    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  addFeedback(rating: number){
    this.feedbackService.submitFeedback(rating);
  }
}
