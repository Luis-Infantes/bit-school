import { RouterModule, Routes } from '@angular/router';
import { FormCoursesComponent } from './core/components/form-courses/form-courses';
import { TableCoursesComponent } from './core/components/table-courses/table-courses';

export const routes: Routes = [

  { path: 'form-courses/:mode/:id', component: FormCoursesComponent },
  { path: 'form-courses/:mode', component: FormCoursesComponent },
  { path: '', component: TableCoursesComponent },


];


export const routing = RouterModule.forRoot(routes);
