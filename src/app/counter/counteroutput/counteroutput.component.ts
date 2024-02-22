import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterstate } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css'],
}) //OnDestroy
export class CounteroutputComponent implements OnInit {
  constructor(private store: Store<{ counter: counterstate }>) { }
  //   ngOnDestroy(): void {
  // if(this.countersubscription)
  // {
  //   this.countersubscription.unsubscribe();
  // } }
  counter!: number;
  // countersubscription!:Subscription;
  counter$!: Observable<{ counter: number }>;
  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((data) => (this.counter = data.counter));
    // this.counter$=this.store.select('counter');
  }
}
