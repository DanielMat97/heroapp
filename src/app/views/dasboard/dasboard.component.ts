import { Component, OnInit } from '@angular/core';
import { HeroModule } from 'src/app/models/hero/hero.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  heroes: Array<HeroModule> = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.sort().slice(1, 5);
    });
  }

}
