import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill',
  imports: [RouterLink],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export default class Skill {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
