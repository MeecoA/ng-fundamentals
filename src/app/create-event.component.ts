import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './events';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::webkit-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent implements OnInit {
  newEvent: any;

  isDirty: boolean = true;
  constructor(public router: Router, private eventService: EventService) {}

  saveEvent(values: any) {
    this.eventService.saveEvent(values).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events/']);
    });
  }
  ngOnInit(): void {
    this.newEvent = {
      name: 'Mcdo',
      date: '8/8/2023',
      time: '8 am',
      price: 999.99,
      location: {
        address: '46 happy street',
        city: 'san Francisco',
        country: 'CA',
      },
      onlineUrl: 'http://localhost',
      imageUrl:
        'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg',
    };
  }

  cancel() {
    this.router.navigate(['/events/']);
  }
}
