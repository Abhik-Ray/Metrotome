import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockApi } from '../shared/services/mockAPI/mock-api';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  providers: [MockApi]  ,
  template: `
    <div class="login-main">
      <mat-card class="login-card">
        <mat-card-header class="header">
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-card-content class="content">
            <mat-form-field class="form-field">
            <mat-label>Email </mat-label>
            <input
              matInput
              autocomplete="username"
              type="email"
              formControlName = "email"
            />
          </mat-form-field>
          <mat-form-field class="form-field">
            <mat-label>Password </mat-label>
            <input
              type="password"
              autocomplete="current-password"
              matInput
              formControlName="password"
            />
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button matButton="filled" type="submit">Login</button>
          @if (errorMessage()){
            <mat-error class="error-msg">{{errorMessage()}}</mat-error>
          }
        </mat-card-actions>
      </form>
      </mat-card>
    </div>
  `,
  styleUrl: './login.scss'
})
export class Login {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  formSubmitted = false;

  errorMessage = signal<string>('');
  api: null | MockApi = null;


  constructor() {
    this.api = inject(MockApi);
  }

  validateFields = () => {
    if(this.form.invalid){
      if(this.form.get('email')?.errors?.['required'] && this.form.get('password')?.errors?.['required']){
        return 'Missing Fields';
      } else if(this.form.get('email')?.errors){
        if(this.form.get('email')?.errors?.['email']){
          return 'Not a valid email'
        } else {
          return 'Email is required'
        }
      } else if(this.form.get('password')?.errors){
        if(this.form.get('password')?.errors?.['required']){
          return 'Passoword is required'
        } else {
          return 'A Valid Password is required'
        }
      } else {
        return 'Something went wrong'
      }
    } else {
      return ''
    }
  }

  async onSubmit() {
    this.formSubmitted = true;
    this.errorMessage.set(this.validateFields());
    this.form.statusChanges.subscribe(status => {
      this.errorMessage.set(this.validateFields());
    })

    if(this.form.valid && this.api && this.form.value?.['email'] && this.form.value?.['password']){
      const user = await this.api.getUser(this.form.value?.['email'], this.form.value?.['password'])
      console.log('success!', this.form.value, user);
    }
  }
}
