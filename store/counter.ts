import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const STORESTATE = 'STORESTATE';

export function counterReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case STORESTATE:
			console.log(action.payload);
			return action.payload;
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case RESET:
			return 0;
		default:
			return state;
	}
}