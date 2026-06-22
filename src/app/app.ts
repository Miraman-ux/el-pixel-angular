import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './text.css', './border.css'],
})
export class App {
  protected readonly title = signal('el-pixel-angular');
}
