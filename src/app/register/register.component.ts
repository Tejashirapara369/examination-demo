import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      address: this.fb.control(''),
      city: this.fb.control(''),
      role: this.fb.control('Admin'),
    });
  }

  onSubmit() {
    this.authService.register(this.form.value);
  }
}
