import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    {
        path: 'books',
        loadChildren: () => import('./modules/books/books-module').then(m => m.BooksModule)
    }
];
