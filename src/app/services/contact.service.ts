// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }
  
  // Mock service that simulates a successful API response
  // In a real application, this would be an HTTP request to a backend service
  sendContactForm(formData: any): Observable<any> {
    console.log('Contact form data:', formData);
    
    // Simulate an API delay of 1 second
    return of({ success: true }).pipe(delay(1000));
    
    // In a real application, it would look like this:
    // return this.http.post('/api/contact', formData);
  }
}