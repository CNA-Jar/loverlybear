import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../../../store/counter';

interface AppState {
  counter: number;
}

@Component({
	selector: 'my-app',
	template: `
		<button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
	`
})
export class Detail implements OnInit{
	counter: Observable<number>;

	constructor(private _store: Store<AppState>){
	}

	ngOnInit() {
		console.log('detail');
		this.counter = this._store.select('counter');
		console.log(this.counter);
	}

	increment(){
		this._store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this._store.dispatch({ type: DECREMENT });
	}

	reset(){
		this._store.dispatch({ type: RESET });
	}
}