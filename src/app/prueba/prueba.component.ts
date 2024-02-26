import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss',
})
export class PruebaComponent {
  token: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.token = storedToken;
    

      this.http.get('http://localhost:8080/e/api/prueba', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
  }
}
