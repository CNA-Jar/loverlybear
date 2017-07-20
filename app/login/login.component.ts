import { Component, OnInit } from '@angular/core';
import { LoginServices } from './login.services';
import { BaseCookie } from '../../service/app.cookies';
// import { User } from '../user/user.factory';

@Component({
	selector: 'index',
	templateUrl: './app/login/login.html',
	providers: [ LoginServices, BaseCookie ]
})

export class Login implements OnInit{
	// user: User;
	user = {
		account: '',
		password: ''
	}
	constructor(private loginServices: LoginServices, private _cookie: BaseCookie) {}

	ngOnInit() {
		console.log('...login');
	}

	/**
	 * [submit description]
	 * @author Yang 2017-07-19
	 * @params  {[type]}
	 * @return  {[type]}
	 * @version v1.0.0
	 */
	submit() {

		const params = {
			username: this.user.account,
			password: this.user.password
		};

		this.loginServices.login(params)
			.then(data => {
				const _cookie_token = {
					key: 'access_token',
					value: `${data.token_type} ${data.access_token}`,
				}
				this._cookie.setCookie(_cookie_token);
			})
			.catch((err: Response) => {
				const { status, statusText } = err;
				if (!statusText) {
					console.log('接口调用失败');
				}
				return false;
			});
	}
}