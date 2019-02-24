import { INCREMENT } from './action';
import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  @select(s => s.get('counter')) counter;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    // this.ngRedux.subscribe(() => {
    //   console.log(ngRedux.getState());
    // });
  }

  increment(){
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
