import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public method: string = 'Robotronic';
  public capitalized: number = 1000;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Paco pelotas';
  }

  changeAge(): void {
    this.age = 126;
  }

  resetValues(): void {
    this.name = 'ironman';
    this.age = 45;
    this.method = 'Robotronic';
    this.capitalized = 1000;
  }
}
