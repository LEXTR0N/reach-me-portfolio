// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppConfig, displayIfExists } from '../../config/app-config';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  config = AppConfig;
  displayIfExists = displayIfExists;
  
  mobileMenuOpen = false;
  dropdownOpen = false;
  
  constructor(private modalService: ModalService) {}
  
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.dropdownOpen = false;
    document.body.style.overflow = '';
  }
  
  toggleDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  openContactModal(event: Event): void {
    event.preventDefault();
    this.modalService.openContactModal();
  }
}