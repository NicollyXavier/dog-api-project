// src/app/dog.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getDogBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/list/all`);
  }

  getDogImages(breed: string, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/breed/${breed}/images/random/${limit}`);
  }
}
