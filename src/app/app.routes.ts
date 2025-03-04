import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainENGComponent } from './main-eng/main-eng.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: "", component:MainComponent},
    {path:"eng",component:MainENGComponent},
    {path:"about", component:AboutComponent}
];
