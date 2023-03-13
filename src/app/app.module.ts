import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ErrorComponent } from './error/error.component';
import { EventListResolverService } from './events/event-list-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //template based

import {
  EventListComponent,
  EventThumbailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  CreateSessionComponent,
  SessionDetailsComponent,
} from './events/index';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolverService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure you want to cancel?');
  }
  return true;
}
