import { Component, Input, OnInit } from '@angular/core';
import { HeroModule } from 'src/app/models/hero/hero.module';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {
  @Input() heroes: Array<HeroModule> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
