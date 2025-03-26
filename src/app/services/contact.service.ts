// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }
  
  // Mockup-Service, der eine erfolgreiche API-Antwort simuliert
  // In einer echten Anwendung würde hier ein HTTP-Request an einen Backend-Service erfolgen
  sendContactForm(formData: any): Observable<any> {
    console.log('Contact form data:', formData);
    
    // Simulieren einer API-Verzögerung von 1 Sekunde
    return of({ success: true }).pipe(delay(1000));
    
    // In einer echten Anwendung würde es so aussehen:
    // return this.http.post('/api/contact', formData);
  }
}