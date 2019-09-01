import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  template: `<span>{{ messageString }}</span>`,
  styles: []
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() inputDate: string;
  @Output() messageString: string;
  @Output() passed = false;

  private future: Date;
  private futureString: string;
  private counter$: Observable<number>;
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.futureString = this.inputDate;
    this.future = new Date(this.futureString);
    this.counter$ = interval(1000).pipe(
      map((x) => {
        this.passed = (this.future.getTime() < new Date().getTime()) ? true : false;
        return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      }));
    this.subscription = this.counter$.subscribe((x) => {
      const temp = this.dhms(x);

      this.messageString = (temp.search('NaN') === -1) ? temp : `ERR: 'Counter' failed`;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dhms(t) {
    let days: number;
    let hours: number;
    let minutes: number;
    let seconds: number;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }
}
