import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPayload } from '../../interfaces/documentType.interface';
import { AuthenticationServeService } from '../../services/authentication/authentication.serve.service';
import { NgxCaptchaModule } from 'ngx-captcha';

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
    NgxCaptchaModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
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
      user: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
      recaptcha: ['', Validators.required]
    });
    this.passwordVisible = false;
    this.errorMessage = 'El campo es requerido.';
  }

  ngOnInit() {}

  public togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  public redirectTo(page: string): void {
    this.router.navigate([`${page}`]);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const body: LoginPayload = {
        username: this.form.value.user,
        password: this.form.value.password,
      };

      const authService = new AuthenticationServeService(this.http);
      authService.login(body).subscribe((response) => {
        const token = response.headers.get('Authorization');
        if (token != null) {
          authService.setToken(token);
        }
        alert('Ingreso exitoso');
      });


    } else {
      console.log('Ingreso fallido');
    }
  }
}
