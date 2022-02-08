import { Component, OnInit } from '@angular/core';
import { HeroModule } from 'src/app/models/hero/hero.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  heroes: Array<HeroModule> = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  handlerSearch(event: any) {
    const term = event.target.value;
    this.heroesService.searchHeroes(term).subscribe(result => {
      this.heroes = result;
    });
  }
} 
