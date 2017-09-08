import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
	postRquest(url: String, contentType = 'application/json;'):	any {
		console.log(contentType);
		let headers = new Headers();
		headers.append('Content-Type', contentType);
		const headOptions = this.setHeaderOptions(headers);
		const _url = this.url + url;
		return this.http.post(_url, this.params, { headers: headOptions })
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
		const _url = this.url + url;
		return this.http.get(_url, { headers: headOptions } )
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
		if (this.token) 
			headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
	}
}