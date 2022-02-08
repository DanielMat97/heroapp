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
  term: string = '';

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  handlerSearch(event: any) {
    const term = event.target.value;
    this.term = term;
    this.heroesService.searchHeroes(this.term).subscribe(result => {
      this.heroes = result;
    });
  }
} 
