// src/app/components/contact-form/contact-form.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  formSubmitted = false;
  submitSuccess = false;
  submitError = false;
  private subscription = new Subscription();
  
  constructor(
    private fb: FormBuilder, 
    private contactService: ContactService,
    private modalService: ModalService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  ngOnInit() {
    // Abonnieren des Modal-Status
    this.subscription.add(
      this.modalService.contactModalOpen$.subscribe(isOpen => {
        // Wenn Modal geschlossen wird, setze die Formvalidierung zurück, aber behalte die Werte
        if (!isOpen && this.formSubmitted) {
          this.resetFormValidation();
        }
      })
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  // Neue Methode, um nur die Validierung zurückzusetzen, nicht die Werte
  resetFormValidation() {
    this.formSubmitted = false;
    
    // Markiere alle Formularkontrollen als "unberührt"
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsUntouched();
    });
    
    // Zurücksetzen von Erfolgs- und Fehlermeldungen
    this.submitSuccess = false;
    this.submitError = false;
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