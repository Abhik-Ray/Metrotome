import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="login-main">
      <mat-card class="login-card">
        <mat-card-header class="header">
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content class="content">
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <mat-form-field>
            <mat-label>Email</mat-label>
            <input
              matInput
              id="email"
            />
            
          </mat-form-field>
          <mat-form-field>
            <mat-label>Password</mat-label>
            <input
              type="password"
              matInput
              id="password"
            />
          </mat-form-field>
          </form>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button matButton="filled">Login</button>
        </mat-card-actions>
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

  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');

  constructor() {
  }

  onSubmit(){
    this.formSubmitted = true;

    this.form.markAllAsTouched();

    console.log(this.form.value)
  }

}
