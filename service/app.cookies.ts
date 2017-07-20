import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()

export class BaseCookie {

	constructor(private _cookieService: CookieService) {}

	/**
	 * [getCookie description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @param   {any}    _key [description]
	 * @return  {any}         [description]
	 */
	getCookie(_key: any): any {
		const { key } = _key;
		return this._cookieService.get(key);
	}

	/**
	 * [setCookie description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 * @param   {any}    _key [description]
	 */
	setCookie(_key: any) {
		const { key, value } = _key;
		this._cookieService.put(key, value);
	}
}