import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IEvent, ISession } from '../events';
import { EventService } from '../events';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions!: ISession[];
  events!: IEvent[];
  constructor(
    public authService: AuthService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });

    // this.events = this.route.snapshot.data['events'];
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: any) => {
      this.foundSessions = sessions;
    });
  }
}
