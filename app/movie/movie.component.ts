import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'movie',
	templateUrl: './app/movie/movie.html',
})

export class Movie implements OnInit{
	
	constructor() {
		// code...
	}

	ngOnInit() {
		console.log('movie');
		/*var viewer = PhotoSphereViewer({
	    container: 'container-id',
	    panorama: 'path/to/panorama.jpg'
	  });*/
	}
}