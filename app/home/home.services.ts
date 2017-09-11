import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../service/app.services';

@Injectable()

export class HomeServices extends BaseService implements OnInit {
	private _url: string;
	constructor(public http: Http) {
		super(http);
	}

	getNotice () {
		this.url += 'system/rest/kpi_task/task/notice';
		console.log(this.url);
	}

	getList (params = {}): Promise<any> {
		this._url = 'system/rest/issue_cause/596';
		return this.getRquest(this._url);
	}

	getUserList(params = {}): Promise<any> {
		this.params = params;
		this._url = 'system/rest/users/list';
		return this.postRquest(this._url);
	}

	ngOnInit() {
		console.log(this.url);
	}
}