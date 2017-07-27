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
	constructor(private homeServices: HomeServices) {
		console.log('..create');
	}

	click() {
		console.log(this.user.name);
		// this.homeServices.getNotice();
	}

	ngOnInit() {
		// this.user.name = 'YYY';
		this.homeServices.getList().then(data => {
			console.log(data);
			this.details = data;
		})
		console.log('...doSomething');
	}
}