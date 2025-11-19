import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-education',
  imports: [RouterLink],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export default class Education {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
