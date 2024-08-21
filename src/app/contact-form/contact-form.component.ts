import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgIf,FontAwesomeModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  tick = faCheck;
  showForm = true;
  success = false;
  displayForm() {
    this.showForm = !this.showForm;
    this.success = false;
  }
  submition() {
    this.success= true;
  }
}
