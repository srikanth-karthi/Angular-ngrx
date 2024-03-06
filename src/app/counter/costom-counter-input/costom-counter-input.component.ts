import { Component, OnInit } from '@angular/core';
import { counterstate } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changechannelname, coustomIncrement } from '../state/counter.action';
import { getchannalname } from '../state/counter.selector';
import { Observable } from 'rxjs';

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

    this.channelname$=this.store.select(getchannalname)
  }
  onadd() {
    this.store.dispatch(coustomIncrement({ value: this.value }));
  }
  value!: number;
  channelname$!:Observable<string> 
}
