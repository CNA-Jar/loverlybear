import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServices } from './home.services';

@Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
	providers: [ HomeServices ]
})

export class Home implements OnInit{
	user = { name: ''};
	details = {};
	userList: any;
	public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'name';
  public sortOrder = 'asc';
	constructor(private homeServices: HomeServices, private _router: Router) {
		console.log('..create');
	}

	click(id = '') {
		const userId = id;
		console.log(userId);
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