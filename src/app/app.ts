import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  template: `
    <h1>{{ title() }}</h1>
    <small>{{ ENV.appEnv }}</small>
    <nav>
      <a routerLink="/"> Home </a>
      <a routerLink="/books"> Books </a>
      <a routerLink="/about"> About </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: `
    nav {
      margin: 1rem 0;
    }
    a {
      margin-right: 1rem;
    }
  `
})
export class App {
  protected readonly title = signal('My App');
  ENV = environment;
}
