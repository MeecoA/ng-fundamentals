import { ErrorComponent } from './error/error.component';
import { Routes } from '@angular/router';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventListResolverService,
  EventListComponent,
  CreateSessionComponent,
} from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' },

  {
    //new syntex for lazy loading
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
