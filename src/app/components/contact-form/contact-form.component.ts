// src/app/components/contact-form/contact-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  submitSuccess = false;
  submitError = false;
  
  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    this.formSubmitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // Hier würde normalerweise der API-Aufruf erfolgen
    this.contactService.sendContactForm(this.contactForm.value)
      .subscribe({
        next: () => {
          this.submitSuccess = true;
          this.contactForm.reset();
          this.formSubmitted = false;
          
          // Nach 5 Sekunden Success-Meldung zurücksetzen
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: () => {
          this.submitError = true;
          
          // Nach 5 Sekunden Error-Meldung zurücksetzen
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      });
  }
  
  // Hilfsfunktionen für die Formularvalidierung im Template
  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }
}