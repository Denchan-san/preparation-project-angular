import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstOBsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.firstOBsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.firstOBsSubscription.unsubscribe();
  }

}
