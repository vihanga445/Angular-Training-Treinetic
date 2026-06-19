import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin(): void {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      this.errorMessage = '';
      this.router.navigate(['/todos'], { replaceUrl: true });
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
