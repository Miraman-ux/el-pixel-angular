import { asNativeElements, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.html',
    styleUrls: ['./app.css', './text.css', './border.css'],
})
export class App {
    public name: string = 'john';
    public surn: string = 'smit';

    public imgUrl: string = 'test.png';
    public imgAlt: string = 'picture';

    public arr: number[] = [1, 2, 3, 4, 5];

    public user = {
        name: 'john',
        surn: 'smit',
    };

    public user1 = {
        img: 'pic.png',
        alt: 'picture',
    };

    public showName() {
        return 'john';
    }

    public showSurn() {
        return 'smit';
    }

    public text: string = 'abcde';

    protected readonly title = signal('el-pixel-angular');
    protected readonly Math = Math;
    protected readonly asNativeElements = asNativeElements;
}
