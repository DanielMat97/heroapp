import { Component, OnInit } from '@angular/core';
import { HeroModule } from 'src/app/models/hero/hero.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {
  heroes: Array<HeroModule> = [];

  constructor(private heroesService: HeroesService) {
    this.render()
  }

  ngOnInit(): void {
  }

  render() {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  deleteHero(id: number){
    this.heroesService.deleteHero(id).subscribe(result => {
      this.render();
    });
  }
}
