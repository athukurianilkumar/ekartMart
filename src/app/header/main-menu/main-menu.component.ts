import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: false,
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  constructor(private router: Router) {

  }

  aboutBtn(){
  this.router.navigate(['/about']);
}
}

