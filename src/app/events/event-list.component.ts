import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
@Component({
  selector: 'app-event-list',
  template: `<div>
      <h1>Upcoming Angular Events</h1>
    </div>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <app-event-thumbail
          (click)="handleThumbnailClick(event.name)"
          #thumbail
          [event]="event"
        ></app-event-thumbail>
      </div>
    </div> `,
})
export class EventListComponent implements OnInit {
  events!: IEvent[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });

    this.events = this.route.snapshot.data['events'];
  }
  handleThumbnailClick(eventName: any) {
    this.toastr.info(eventName);
  }
}
