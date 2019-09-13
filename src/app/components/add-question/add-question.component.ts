import { Component, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  @Output() questionAdded = new EventEmitter<Question>();
  question: string;
  answer: string;

  addQuestion() {
    this.questionAdded.emit({
      text: this.question,
      answer: this.answer,
      hide: true
    });
  }
}
