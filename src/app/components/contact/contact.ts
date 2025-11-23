import { NgIf } from '@angular/common';
import emailjs from '@emailjs/browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf, HttpClientModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact {
  menuOpen = false;
  http = inject(HttpClient);
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  formgroup = new FormGroup({
    NameControl: new FormControl('', [Validators.required, Validators.minLength(3)]),
    MailControl: new FormControl('', [Validators.required, Validators.email]),
    CommentControl: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });
  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }
  onSubmit() {
    this.formgroup.markAllAsTouched();
    if (this.formgroup.invalid) {
      return;
    }
    this.http
      .post(
        'https://api.emailjs.com/api/v1.0/email/send/',
        {
          service_id: 'service_8gsjczk',
          template_id: 'template_yx1pnrc',
          user_id: 'dEawineN2cuGqx57R',
          template_params: {
            from_name: this.formgroup.value.NameControl,
            from_email: this.formgroup.value.MailControl,
            message: this.formgroup.value.CommentControl,
          },
        },
        {
          responseType: 'text',
        }
      )
      .subscribe({
        next: () => console.log('Message envoyé ✅'),
        error: (err) => console.log('Erreur  ❌', err),
      });
    this.formgroup.reset();
  }
}
