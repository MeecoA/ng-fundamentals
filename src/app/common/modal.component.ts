import { Component, ElementRef, Input, ViewChild, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
@Component({
  selector: 'simple-modal',
  templateUrl: './modal.component.html',
  styles: [
    `
      .modal-body {
        height: 250px;
        overflow-y: scroll;
      }
    `,
  ],
})
export class ModalComponent {
  @Input() title!: string;
  @Input() elementId!: string;
  @ViewChild('modalcontainer') containerEl!: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
