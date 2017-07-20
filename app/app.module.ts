// zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import 'zone.js';
import 'reflect-metadata';
import 'normalize.css';
import '../public/style/sass/app.scss';
import 'font-awesome-webpack';

// 引入NgModule装饰器
import { NgModule } from '@angular/core';

// 导入组件模块
import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { Login } from './login/login.component';
// 表单模块
import { FormsModule } from '@angular/forms';
// 路由模块
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routers';
import { HashLocationStrategy, LocationStrategy }
from '@angular/common';

// 服务模块
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CookieBackendService } from 'angular2-cookie/services/cookies.backend.service';

// 引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ 
	  BrowserModule, 
	  HttpModule, 
	  FormsModule,
	  RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ AppComponent, Home, Login ],
  bootstrap: [ AppComponent ],
  providers: [
  	{ 
  		provide: LocationStrategy, 
  		useClass: HashLocationStrategy 
  	},
  	{
  		provide: CookieService,
      useClass: CookieBackendService
  	}
  ],
})

export class AppModule {}