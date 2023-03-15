import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.css'],
})
export class UpVoteComponent {
  @Input() count!: number;
  @Input() set voted(val: any) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  iconColor!: string;

  onClick() {
    this.vote.emit({});
  }
}
