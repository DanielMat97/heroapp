import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroModule } from 'src/app/models/hero/hero.module';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: HeroModule = {
    id: 0,
    name: ''
  }
  initialName:string = '';
  isEditHero: boolean = false;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private navigate: Router) {
    this.route.paramMap.subscribe(result => {
      const idRoute = result.get('id') ? result.get('id') : 0;
      const id = parseInt(idRoute ? idRoute : '0');
      this.heroesService.getHeroById(id).subscribe(result => {
        this.hero = result;
        this.initialName = this.hero.name;
      });
    })
  }

  handlerValidator(event: any) {
    this.isEditHero = false;
    const name = event.target.value;
    if (name != this.initialName && name.length >= 2) {
      this.hero.name = name;
      this.isEditHero = true;
    }
  }

  ngOnInit(): void {
  }

  editHero() {
    this.heroesService.updateHero(this.hero).subscribe(result => {
      this.navigate.navigateByUrl('/dashboard');
    });
  }
}
