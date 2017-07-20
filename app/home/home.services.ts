import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../service/app.services';

@Injectable()

export class HomeServices extends BaseService implements OnInit {
	private _home_url: string;
	constructor(public http: Http) {
		super(http);
	}

	getNotice () {
		this.url += '/system/rest/kpi_task/task/notice';
		console.log(this.url);
	}

	ngOnInit() {
		console.log(this.url);
	}
}