import { asNativeElements, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [FormsModule, RouterOutlet, RouterLink],
    templateUrl: './app.html',
    styleUrls: ['./app.css', './text.css', './border.css'],
})
export class App {
    protected readonly title = signal('el-pixel-angular');
    protected readonly asNativeElements = asNativeElements;
}
