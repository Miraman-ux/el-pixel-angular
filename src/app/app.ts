import { asNativeElements, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import { HousingLocation } from './housing-location/housing-location';

@Component({
    selector: 'app-root',
    imports: [FormsModule, Home, HousingLocation, RouterOutlet, RouterLink],
    templateUrl: './app.html',
    styleUrls: ['./app.css', './text.css', './border.css'],
})
export class App {
    protected readonly title = signal('el-pixel-angular');
    protected readonly asNativeElements = asNativeElements;
}
