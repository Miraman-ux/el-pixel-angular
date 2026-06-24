import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'template-component',
    templateUrl: './template.component.html',
    styleUrl: './template.component.css',
    imports: [ReactiveFormsModule, FormsModule],
})
export class TemplateComponent {
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

    public value: string = 'abcde';

    protected readonly Math = Math;
}
