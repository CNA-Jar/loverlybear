import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServices } from './home.services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { STORESTATE } from '../../store/counter';
import { DataFilterPipe } from '../../service/dataFilter';

interface ListState {
  counter: number;
  payload?: any;
}

@Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
	providers: [ HomeServices, DataFilterPipe ]
})

export class Home implements OnInit{
	user = { name: ''};
	details = {};
	userList: any;
	counter: Observable<number>;
	mfData: any[];
	public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'name';
  public sortOrder = 'asc';
	constructor(private homeServices: HomeServices, 
		private _router: Router, private _store: Store<ListState>,
		private _dataFilter: DataFilterPipe) {
		// console.log('..create');
		this.counter = this._store.select('counter');
		console.log(this.filterQuery);
	}

	click(id = '') {
		const userId = id;
		// console.log(userId);
		// console.log(this.userList);
		const _storeList = this._dataFilter.transform(this.userList, this.filterQuery);
		/*this._store.dispatch({
			type: STORESTATE,
			payload: {
				data: _storeList,
				completed: true,
			}
		});*/
		this._store.dispatch({
			type: STORESTATE,
			payload: this.filterQuery
		});
		this._router.navigate(['/detail', userId]);
	}

	ngOnInit() {
		let params = {
		  "pagingTool": {
		    "currentPage": 0,
		    "pageSize": -1
		  }
		};
		this.homeServices.getUserList(params).then(data => {
			console.log(data);
			this.userList = data;
		})
	}
}