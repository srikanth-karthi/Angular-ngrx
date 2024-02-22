import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { counterstate } from '../state/counter.state';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent {
constructor(private store:Store<{counter: counterstate}>){}
  OnIncrement()
  {
    this.store.dispatch(increment())
  }
   ondecrement()
   {this.store.dispatch(decrement())
   }
   Onreset()
   {this.store.dispatch(reset())
   }
} 
