import { Component, Input } from '@angular/core';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';
import { Feedback } from '../feedback';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feedback-list',
  standalone: true,
  imports: [CommonModule, FeedbackItemComponent],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.scss'
})
export class FeedbackListComponent {
  @Input() feedbacks!: Feedback[];
}
