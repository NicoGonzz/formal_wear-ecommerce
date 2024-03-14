import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss',
})
export class PruebaComponent {
  token: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedToken = localStorage.getItem('token');
    this.token = storedToken;

    this.http
      .get(`${environment.apiUrl}/e/api/prueba`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        observe: 'response',
      })
      .subscribe(
        (response: HttpResponse<any>) => {
          alert(response.body.mensaje);
        },
        (error) => {
          console.error(error);
          alert('Error al obtener la información');
        }
      );
  }
}
