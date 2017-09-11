import { Action } from '@ngrx/store';

export interface Reducer<T> {
	(state: T, action: Action): T;
}