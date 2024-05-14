import { Injectable } from '@angular/core';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  

  feedbacks: Feedback[] = [{rating: 10},{rating: 7},{rating: 2},{rating: 3},{rating: 6},];

  constructor() { }

  getFeedbacks(): Feedback[] {
    return this.feedbacks;
  }

  submitFeedback(rating: number) {
    this.feedbacks.push({ rating: rating });
    console.log(`Feedback received: rating: ${rating}.`);
  }
  
}
