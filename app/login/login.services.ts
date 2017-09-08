import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { BaseService } from '../../service/app.services';

@Injectable()

export class LoginServices extends BaseService implements OnInit {
	private _url: string;
	constructor(public http: Http) {
		super(http);
	}

	/**
	 * [login description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @param   {any}          params [description]
	 * @return  {Promise<any>}        [description]
	 */
	login(params:	any): Promise<any> {
		this._url = 'system/oauth/token';
		const _params = new URLSearchParams();
    _params.set('username', params.username);
    _params.set('password', params.password);
    _params.set('grant_type', 'password');
    _params.set('scope', 'read+write');
    _params.set('client_secret', 'mySecretOAuthSecret');
    _params.set('client_id', 'authserverapp');
    console.log(_params);
		this.params = _params;

		return this.postRquest(this._url, 'application/x-www-form-urlencoded; charset=UTF-8');
	}

	/**
	 * [getNotice description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @param   {any}          params [description]
	 * @return  {Promise<any>}        [description]
	 */
	/*getNotice (params: any): Promise<any> {
		console.log(params);
		this.url += 'system/rest/users/';
		this.params = params;
		
		return this.getRquest();
	}*/

	ngOnInit() {
		console.log(this.url);
	}
}