import { Component, OnInit } from '@angular/core';
import { counterstate } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changechannelname, coustomIncrement } from '../state/counter.action';

@Component({
  selector: 'app-costom-counter-input',
  templateUrl: './costom-counter-input.component.html',
  styleUrls: ['./costom-counter-input.component.css'],
})
export class CostomCounterInputComponent implements OnInit{
onchangechannel() {
this.store.dispatch(changechannelname())

}
  constructor(private store: Store<{ counter: counterstate }>) {}
  ngOnInit(): void {

this.store.select('counter').subscribe(data=>
  {
    this.channelname = data.channelname
  })
  }
  onadd() {
    this.store.dispatch(coustomIncrement({ value: this.value }));
  }
  value!: number;
  channelname!:string
}
