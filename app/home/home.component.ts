import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HomeServices } from './home.services';

@Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
	providers: [ HomeServices ]
})

export class Home implements OnInit{
	user = { name: ''};
	name: string;
	constructor(private homeServices: HomeServices) {
		console.log('..create');
	}

	click() {
		this.homeServices.getNotice();
	}

	ngOnInit() {
		this.user.name = 'YYY';
		this.homeServices.getList().then(data => {
			console.log(data);
		})
		console.log('...doSomething');
	}
}