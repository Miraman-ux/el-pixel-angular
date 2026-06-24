import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateComponent } from './template/template.component';

export const routes: Routes = [
    { path: 'directives', component: DirectivesComponent },
    { path: 'template', component: TemplateComponent },
];
