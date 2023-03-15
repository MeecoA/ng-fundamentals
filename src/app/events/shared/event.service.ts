import { Injectable } from '@angular/core';
import { Subject, Observable, of, catchError } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));

    // let subject = new Subject<IEvent[]>();

    // setTimeout(() => {
    //   subject.next(events);
    //   subject.complete();
    // }, 100);
    // return subject;
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));

    // return events.find((event) => event.id === id);
  }

  saveEvent(event: any) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<IEvent>('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
    // event.id = 999;
    // event.session = [];
    // events.push(event);
  }
  // updateEvent(event: any) {
  //   let index = events.findIndex((x) => (x.id = event.id));
  //   events[index] = event;
  // }

  searchSessions(searchTerm: string): Observable<ISession> | any {
    return this.http
      .get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
