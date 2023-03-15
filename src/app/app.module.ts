import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import {
  JQ_TOKEN,
  TOASTER_TOKEN,
  Toaster,
  CollapsibleWellComponent,
  ModalComponent,
  ModalTrigerDirective,
} from './common/index';
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
  CreateSessionComponent,
  SessionDetailsComponent,
  DurationPipe,
  VoterService,
  UpVoteComponent,
  EventResolverService,
} from './events/index';
import { AuthService } from './user/auth.service';
import { LocationValidator } from './location-validator.directive';

declare let toastr: Toaster;
declare let jQuery: any;

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
    CollapsibleWellComponent,
    DurationPipe,
    ModalComponent,
    ModalTrigerDirective,
    UpVoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolverService,
    AuthService,
    VoterService,
    EventResolverService,
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
