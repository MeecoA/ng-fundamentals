import { Component, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css'],
})
export class SessionDetailsComponent {
  @Input() sessions: ISession[] | undefined;
}
