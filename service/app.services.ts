import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BaseService{
	url: string = 'http://192.168.8.107/';
	params: any;
	headers: any;
	header_options: any;
	token: string;

	constructor(public http: Http) {
		this.token = Cookie.get('access_token') || '';
	}

	/**
	 * [postRquest description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @param   {String} url [description]
	 * @return  {any}        [description]
	 */
	postRquest(url: String):	any {
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		const headOptions = this.setHeaderOptions(headers);
		const options = new RequestOptions({headers: headOptions});
		console.log(options);
		const _url = this.url + url;
		return this.http.post(_url, this.params, options)
					.toPromise()
					.then(res => res.json())
					.catch(this.handleError);
	}

	/**
	 * [getRquest description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @return  {any}    [description]
	 */
	getRquest(url: String): any {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json;');
		const headOptions = this.setHeaderOptions(headers);
		const options = new RequestOptions({headers: headOptions});
		console.log(options);
		const _url = this.url + url;
		return this.http.get(_url, options)
					.toPromise()
					.then(res => res.json())
					.catch(this.handleError);
	}

	/**
	 * [handleError description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @param   {any}          error [description]
	 * @return  {Promise<any>}       [description]
	 */
	private handleError(error: any): Promise<any> {
	  return Promise.reject(error.message || error);
	}

	/**
	 * [setHeaderOptions description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 */
	private setHeaderOptions(headers: Headers): any {
		if (this.token) headers.append('Authorization', `bearer ${this.token}`);
    return headers;
	}
}