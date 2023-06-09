import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    return this.eventService.getEvents();
    // return this.eventService.getEvents().pipe(map((events) => events));
  }
}
