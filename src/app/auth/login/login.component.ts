import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin(): void {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/todos']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
