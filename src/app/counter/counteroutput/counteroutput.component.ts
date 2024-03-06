import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterstate } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';

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
  counter$!: Observable< number >;
  ngOnInit(): void {
    // this.store
    //   .select(getCounter)
    //   .subscribe((data) => 
    //   {
    //     console.log('counter')
    //     this.counter = data});
    this.counter$=this.store.select(getCounter);
  }
}
