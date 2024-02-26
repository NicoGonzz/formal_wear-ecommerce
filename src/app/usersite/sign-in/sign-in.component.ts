import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
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
    private http: HttpClient,
    ) {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required,Validators.minLength(5)]],
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
      const formData = {
        user: this.form.value.user,
        password: this.form.value.password
      };
      localStorage.setItem('email', this.form.value.user);
      localStorage.setItem('password', this.form.value.password);
      this.http.post("http://localhost:8000/login", formData).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );      console.log('Ingreso Exitoso')
    }else{
      console.log('Ingreso fallido')
    }
  }
}
