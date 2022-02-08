import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroModule } from '../models/hero/hero.module';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getHeroes(): Observable<Array<HeroModule>> {
    return this.http.get<Array<HeroModule>>(this.heroesUrl).pipe(tap(_ => this.log('get heroes success')), catchError(this.handleError('get heroes', [])));
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('se agrego mensaje');
    this.messagesService.add(message);
  }
}
