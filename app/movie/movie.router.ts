import { Route } from '@angular/router';
import { Movie } from './movie.component';

export const MovieRoute: Route[] = [
    {
        path: 'movie',
        component: Movie
    }
];

