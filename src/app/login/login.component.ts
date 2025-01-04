import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
    
  }

  redirectToForward(): void {
    console.log('Login successful, navigating to forward-view');
    this.router.navigate(['/forward-view']);
  }
}
