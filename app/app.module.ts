// zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import 'zone.js';
import 'reflect-metadata';
import 'normalize.css';
import '../public/style/sass/app.scss';
import 'font-awesome-webpack';

// 引入NgModule装饰器
import { NgModule } from '@angular/core';

//ngRx
import { StoreModule } from '@ngrx/store';

// 导入组件模块
import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { Login } from './login/login.component';
import { Movie } from './movie/movie.component';

//angular2-datatable
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from '../service/dataFilter';

// 表单模块
import { FormsModule } from '@angular/forms';
// 路由模块
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routers';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// 服务模块
import { HttpModule } from '@angular/http';

// 引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ 
	  BrowserModule, 
	  HttpModule, 
	  FormsModule,
    DataTableModule,
	  RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ AppComponent, DataFilterPipe, Home, Login, Movie ],
  bootstrap: [ AppComponent ],
  providers: [
  	{ 
  		provide: LocationStrategy, 
  		useClass: HashLocationStrategy 
  	}
  ],
})

export class AppModule {}