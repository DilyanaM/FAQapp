import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    
  }
  // get questions from localStorage
  getQuestions() {
    if(localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  // add question to localStorage
  addQuestion(question:Question) {
    this.questions.unshift(question);

    // init local variable
    let questions;

    if(localStorage.getItem('questions') === null) {
      questions = [];
      // push new question
      questions.unshift(question);
      // set new array to localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question);

      //reset localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // remove question from localStorage
  removeQuestion(question:Question) {
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);

        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
