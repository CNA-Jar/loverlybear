import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'detail',
	templateUrl: './app/home/home-detail/detail.html',
})

export class Detail implements OnInit{
	constructor() {
		// code...
	}

	ngOnInit() {
		console.log('detail');
	}
}