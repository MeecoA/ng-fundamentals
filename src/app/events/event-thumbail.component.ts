import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'app-event-thumbail',
  templateUrl: './event-thumbail.component.html',
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .green {
        color: lightgreen !important;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbailComponent {
  @Input() event!: IEvent;

  @Output() eventClick = new EventEmitter();

  hotdogProperty = {
    brand: 'tender juicy',
  };

  timeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  handleClick() {
    this.eventClick.emit(this.event.name);
  }
  logFoo() {
    console.log('foo');
  }
}
