import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = []
  questions: any[] = []
  currentUser: any;
  students: any[] =[]

  constructor(private router: Router) {
    this.users = JSON.parse(localStorage.getItem('users') as string) || [];
    this.questions = JSON.parse(localStorage.getItem('questions') as string) || [];
    this.students = this.users.filter(el => el.role === 'Student')
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string)
   }

  login(data: any, onSuccess: any, onFail: any) {
    data.email = data.email.toLowerCase();
    const user = this.users.find((el: any) => data.email === el.email && data.password === el.password)
    if(user) {
      if(user.role) {
        this.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
        onSuccess(user);
        this.router.navigate([`/${user.role.toLowerCase()}`]);
      } 
    } else {
      onFail("User not found!");
    }
  }

  register(userData: any) {
    userData.email = userData.email.toLowerCase();
    if(this.users.findIndex((el) => el.email === userData.email) !== -1) {
      this.users.push(userData);
      localStorage.setItem("currentUser", JSON.stringify(userData));
      localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigate([`/${userData.role.toLowerCase()}`])
    } else {
      console.error(userData.name, " User already exist!")
    }
  }

  addQuestion(data: any) {
    this.questions.push(data);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
