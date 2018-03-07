import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }
  SelectedHero: Hero;
  OnSelect(hero: Hero) {
    this.SelectedHero = hero;//Sumit GIT check
  }
}
