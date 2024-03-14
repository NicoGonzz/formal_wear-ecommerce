import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../../interfaces/documentType.interface';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServeService {
  constructor(private http: HttpClient) {}

  login(body: LoginPayload) {
    return this.http.post(`${environment.apiUrl}/login`, body, {
      observe: 'response',
    });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
