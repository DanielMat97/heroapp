import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroModule } from 'src/app/models/hero/hero.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css']
})
export class AddHeroeComponent implements OnInit {
  @Input() heroes: Array<HeroModule> = [];
  hero: HeroModule = {
    id: 0,
    name: ''
  };
  isCreatedHero: boolean = false;
  @Output() addHeroEvent = new EventEmitter<boolean>();

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  handlerValidator(event: any) {
    this.isCreatedHero = false;
    const name = event.target.value;
    this.hero.id = this.heroes[this.heroes.length - 1].id + 1;
    if (name.length >= 2) {
      this.hero.name = name;
      this.isCreatedHero = true;
    }
  }

  addHero() {
    this.heroesService.addHero(this.hero).subscribe(result => {
      console.log(result);
      this.addHeroEvent.emit(true);
    })
  }
}
