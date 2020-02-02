import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({ providedIn: 'root' })
export class DataService {
  questions: Question[];

  getQuestions() {
    if(localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);

    let questions: Question[];

    if (localStorage.getItem('questions') === null) {
      questions = [];

      questions.unshift(question);

      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));

      questions.unshift(question);

      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);

        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
