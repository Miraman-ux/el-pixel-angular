import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css'],
    imports: [NgIf, NgFor, NgStyle],
})
export class DirectivesComponent {
    public isAdult: boolean = true;

    public checkAge: number = 10;

    public day: number = Math.floor(Math.random() * 31) + 1;

    public str: string = '';

    public isDiv: boolean = true;

    public arr: number[] = [1, 2, 3, 4, 5];
    protected readonly Math = Math;

    public strArr: string[] = ['a', 'b', 'c', 'd'];
}
