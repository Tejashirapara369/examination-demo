import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loggedInUser: any;
  showPopup: boolean = false;
  questionForm: FormGroup = this.fb.group({});
  questionList: any[] = [];
  studentList: any[] = [];

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.loggedInUser = authService.currentUser;
    this.questionList = authService.questions;
    this.studentList = authService.students;
   }

  ngOnInit(): void {
    this.setForm();
  }

  onSubmit() {
    console.log('this.questionForm', this.questionForm);
    this.authService.addQuestion(this.questionForm.value);
    this.showPopup = false;
  }

  setForm() {
    this.questionForm = this.fb.group({
      subject: ['', Validators.required],
      questionType: ['MCQ Based', Validators.required]
    })
  }

}
