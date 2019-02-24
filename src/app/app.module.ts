import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { fromJS, Map } from 'immutable';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>) {
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE))    
  }
}
