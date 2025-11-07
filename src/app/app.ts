import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './features/share/componets/nav-bar/nav-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('01-fundamentos');
}
