import { Route } from '@angular/router';
import { Detail } from './homeDetail';

export const DetailRoute: Route[] = [
    {
        path: 'detail/:id',
        component: Detail
    }
];

