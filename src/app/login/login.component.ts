import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('this.form', this.form);
    this.authService.login(
      this.form.value,
      (res: any) => {
        console.log(res);
        
      },
      (err: any) => console.log(err)
    );
  }
}
