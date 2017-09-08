import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from './login.services';
import { Cookie } from 'ng2-cookies';

@Component({
	selector: 'index',
	templateUrl: './app/login/login.html',
	providers: [ LoginServices ]
})

export class Login implements OnInit{
	user = {
		account: '',
		password: ''
	}
	constructor(private loginServices: LoginServices, 
		private _router: Router) {
	}

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
		Cookie.delete('access_token');

		const params = {
			username: this.user.account,
			password: this.user.password
		};

		this.loginServices.login(params)
			.then(data => {
				const { access_token } = data;
  			Cookie.set('access_token', access_token);
				this._router.navigate(['/home']);
			})
			.catch((err: Response) => {
				console.log(err);
				const { status, statusText } = err;
				if (status !== 200) {
					console.log('接口调用失败');
				}
				return false;
			});
	}
}