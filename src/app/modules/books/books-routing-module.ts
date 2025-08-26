import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Books } from './books';
import { BooksList } from './books-list/books-list';

const routes: Routes = [
  {
    path: '',
    component: Books,
    children: [
      {
        path: '',
        component: BooksList
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
