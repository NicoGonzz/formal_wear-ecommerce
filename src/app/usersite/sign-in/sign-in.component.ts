import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  form: FormGroup;
  passwordVisible: boolean;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    });
    this.passwordVisible = false;
    this.errorMessage = 'El campo es requerido.';
  }

  ngOnInit() {

  }

  public togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  public redirectTo(page: string): void {
    this.router.navigate([`${page}`]);
   }

   public onSubmit(): void {
    if (this.form.valid) {
      localStorage.setItem('email', this.form.value.email);
      localStorage.setItem('password', this.form.value.password);
      console.log('Ingreso Exitoso')
    }else{
      console.log('Ingreso fallido')
    }
  }
}
