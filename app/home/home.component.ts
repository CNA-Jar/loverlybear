import { Component, OnInit, Input, Injectable } from '@angular/core';
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
	constructor(private homeServices: HomeServices) {
		console.log('..create');
	}

	click() {
		console.log(this.user.name);
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