import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksList } from './books-list/books-list';
import { BooksRoutingModule } from './books-routing-module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Books } from './books';



@NgModule({
  declarations: [
    Books,
    BooksList
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    BooksRoutingModule
  ]
})
export class BooksModule { }
