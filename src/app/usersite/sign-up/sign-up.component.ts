import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { DocumentType } from '../../interfaces/documentType.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatStepperModule,
    MatSelectModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})


export class SignUpComponent {

  formSignUpInformation: FormGroup;
  formPassword: FormGroup;
  documentTypes: DocumentType[];
  passwordVisible: boolean;
  errorMessage: string;

  constructor(
  private router: Router,
  private formBuilder: FormBuilder,
  ){
  this.formSignUpInformation = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    documentType: ['', Validators.required],
    documentNumber: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });
  this.formPassword = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    secondpassword: ['', [Validators.required, Validators.minLength(8)]],
  });
  this.documentTypes = [
    { idDocumentType: '1', name: 'CC' },
    { idDocumentType: '2', name: 'Pasaporte' }
  ];
  
  this.passwordVisible = false;
  this.errorMessage = 'El campo es requerido.';
}

public isFormInvalid() {
  const passwordControl = this.formPassword.get('password')?.value;
  const secondPasswordControl = this.formPassword.get('secondpassword')?.value;
  const validatePassword = (secondPasswordControl === passwordControl);
  return (
    this.formPassword.valid &&
    validatePassword
  );
}

public togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}

public redirectTo(page: string): void {
  this.router.navigate([`${page}`]);
 }

 public saveFormData(){
      name: String(this.formSignUpInformation.value.name);
      lastName: String(this.formSignUpInformation.value.lastname);
      email: String(this.formSignUpInformation.value.email);
      phone: String(this.formSignUpInformation.value.phone);
      password: String(this.formPassword.value.password);
      documentType: String(this.formSignUpInformation.value.documentType);
      documentNumber: String(this.formSignUpInformation.value.documentNumber);
 }
}
