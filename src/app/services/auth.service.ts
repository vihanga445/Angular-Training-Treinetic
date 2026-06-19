import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = false;

  constructor() {}

  register(data: RegisterModel): boolean {
    console.log('User registered with data:', data);
    return true;
  }

  isAuthenticated(): boolean {
    return this.isLoggedInStatus;
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isLoggedInStatus = true;
      return true;
    }

    this.isLoggedInStatus = false;
    return false;
  }

  logout(): void {
    this.isLoggedInStatus = false;
  }
}
