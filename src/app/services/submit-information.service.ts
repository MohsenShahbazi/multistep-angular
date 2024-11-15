import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmitInformationService {
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'submit', data);
  }
}
