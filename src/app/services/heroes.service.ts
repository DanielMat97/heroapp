import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroModule } from '../models/hero/hero.module';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getHeroes(): Observable<Array<HeroModule>> {
    return this.http.get<Array<HeroModule>>(this.heroesUrl).pipe(tap(_ => this.log('get heroes success')), catchError(this.handleError('get heroes', [])));
  }

  getHeroById(id: number){
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<HeroModule>(url).pipe(
      tap(_ => this.log(`detail hero id=${id}`)),
      catchError(this.handleError<HeroModule>(`getHero id=${id}`))
    );
  }

  addHero (hero: HeroModule) {
    return this.http.post<HeroModule>(this.heroesUrl, hero, httpOptions).pipe(
      tap((h: HeroModule) => this.log(`added hero id=${h.id}`)),
      catchError(this.handleError<HeroModule>('addHero'))
    );
  }

  deleteHero (id: number){
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<HeroModule>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<HeroModule>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Array<HeroModule>> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Array<HeroModule>>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`Found Heroes: "${term}"`)),
      catchError(this.handleError('search heroes error', []))
    );
  }

  updateHero (hero: HeroModule){
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messagesService.add(message);
  }
}
