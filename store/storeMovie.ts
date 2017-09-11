import { Reducer } from './reducer';
import { Action } from './storeDispatch';

export const counter: Reducer<number> = (state: 0, action: Action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + action.payload;
		case 'DECREMENT':
			return state - action.payload;
		default:
			return state;
	}
}