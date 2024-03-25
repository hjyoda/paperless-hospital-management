import { Component } from '@angular/core';
import { Router } from '@angular/router';

// boolean check = true;
// true pe home ka div pe ngIf 
// NGIF = true -> Patient
// ngif = false -> logout

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  check: boolean = true;
  toggleCount: number = 0;

  constructor(private router: Router) {}

  toggle() {
    this.toggleCount++;
    if (this.toggleCount % 2 === 1) {
      this.check = true;
      this.router.navigate(['/dashboard']);
    } else {
      this.check = false;
      this.router.navigate(['/logout']);
    }
  }
}