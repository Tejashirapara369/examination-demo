import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  loggedInUser: any;
  questionList: any[] = [];

  constructor(public authService: AuthService) {
    this.loggedInUser = authService.currentUser;
    this.questionList = authService.questions;
   }

  ngOnInit(): void {
  }

}
