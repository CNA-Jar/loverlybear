import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeRoute } from './home/home.router';
import { IndexRoute } from './login/login.router';
import { MovieRoute } from './movie/movie.router';

export const appRoutes: Routes = [
	{
		path:'',
		redirectTo: 'index',
		pathMatch: 'full'
	},
  ...IndexRoute,
  ...HomeRoute,
  ...MovieRoute
];
