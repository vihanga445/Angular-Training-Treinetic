import { Component } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  submitted = false;

  model: RegisterModel = {
    name: '',
    email: '',
    password: '',
    agree: false,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onRegister(form: any): void {
    this.submitted = true;

    if (form.valid) {
      const success = this.authService.register(this.model);

      if (success) {
        alert('Registration successful! You can now log in.');
        form.reset();
        this.router.navigate(['/auth/login']);
      }
    }
  }
}
