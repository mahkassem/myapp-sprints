import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-books-list',
  standalone: false,
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})
export class BooksList {
  protected readonly books = signal([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ]);
}
