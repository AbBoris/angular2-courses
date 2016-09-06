import { Routes, RouterModule } from '@angular/router';
import { Course } from './course';
import { Courses } from './courses';
import { Login } from'./login';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: 'login',  component: Login },
  { path: 'course', component: Course },
  { path: 'courses', component: Courses },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: Login },
];
