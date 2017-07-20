import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BaseService {
	url: string = 'http://192.168.8.107/';
	params: any;
	headers: any;
	header_options: any;

	constructor(public http: Http) {
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
		this.setHeaderOptions();
		const _url = this.url + url;
		return this.http.post(_url, this.params, { headers: this.header_options})
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
	getRquest(): any {
		this.setHeaderOptions();
		this.url += 1;
		return this.http.get(this.url, {headers: this.headers})
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
	private setHeaderOptions() {
    this.headers = {
    	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    this.header_options = new Headers(this.headers);
	}
}