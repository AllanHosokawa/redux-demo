import { INCREMENT } from './action';
import { tassign } from 'tassign'
import { Map } from 'immutable';

export interface IAppState {
    counter: number;
  }
  
export const INITIAL_STATE: IAppState = {
    counter: 0,
  };
  
  export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch(action.type) {
      case INCREMENT:
       return state.set('counter', state.get('counter') + 1);
        //return tassign(state, {counter: state.counter + 1})
       //return { counter: state.counter + 1 };
    }
  
    // We don't care about any other actions right now.
    return state;
  }